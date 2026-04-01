from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime, timedelta
from jose import JWTError, jwt
import bcrypt

SECRET_KEY = "supersecretkey"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None

class UserInDB(User):
    hashed_password: str


fake_users_db = {
    "admin" : {
        "username" : "admin",
        "full_name": "Admin User",
        "email": "admin@gmail.com",
        "hashed_password": "$2b$12$Lz27Zz67nkqF3tto15bLtOPKEC9B3oSHRWwXettKrU2dfwVGh5VPG",
        "disabled": False,
    }
}

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

def get_password_hash( password):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

def get_user(db, identifier: str):
    # Check if identifier is username or email
    for username, user_dict in db.items():
        if user_dict.get("username") == identifier or user_dict.get("email") == identifier:
            return UserInDB(**user_dict)
    return None

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)

    except JWTError:
        raise credentials_exception
    user = get_user(fake_users_db, identifier=token_data.username)
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


@app.post("/register", response_model=Token)
async def register_user(form_data: OAuth2PasswordRequestForm = Depends()):
    if form_data.username in fake_users_db:
        raise HTTPException(status_code=400, detail="Username already registered")
    
    hashed_password = get_password_hash(form_data.password)
    fake_users_db[form_data.username] = {
        "username": form_data.username,
        "full_name": "New User",
        "email": "user@gmail.com",
        "hashed_password": hashed_password,
        "disabled": False
    }

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data = {"sub": form_data.username} , expires_delta=access_token_expires
    )
    return { "access_token": access_token, "token_type": "bearer" }

@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = get_user(fake_users_db, form_data.username)
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

@app.get("/")
def read_root():
    return {"message": "Welcome to GameForge Studios API"}


GAMES = [
    {
        "id": 1,
        "title": "Assassin's Creed Valhalla",
        "genre": "Action",
        "category": "Action & Adventure",
        "description": "Become Eivor, a legendary Viking warrior in Assassin's Creed Valhalla. Raid, conquer, and shape the destiny of a nation in this epic RPG adventure.",
        "image": "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "rating": 4.5,
        "downloads": "10M+",
        "size": "25 GB",
        "release_date": "2020-11-10",
        "developer": "Ubisoft"
    },
    {
        "id": 2,
        "title": "Galactic Empires",
        "genre": "Strategy",
        "category": "Strategy",
        "description": "Command vast interstellar fleets in this 4X space strategy game. Build your empire, form alliances, and conquer the galaxy.",
        "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "rating": 4.2,
        "downloads": "5M+",
        "size": "2.1 GB",
        "release_date": "2021-05-15",
        "developer": "Stardock"
    },
    {
        "id": 3,
        "title": "Shadow Ninja",
        "genre": "Action",
        "category": "Action & Adventure",
        "description": "Master the art of stealth in this intense action game. Navigate treacherous environments and eliminate targets with precision.",
        "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "rating": 4.7,
        "downloads": "8M+",
        "size": "1.5 GB",
        "release_date": "2019-03-22",
        "developer": "Team Ninja"
    },
    {
        "id": 4,
        "title": "Cyberpunk 2077",
        "genre": "RPG",
        "category": "Role Playing",
        "description": "An open-world, action-adventure RPG set in the dark future of Night City.",
        "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "rating": 4.0,
        "downloads": "15M+",
        "size": "70 GB",
        "release_date": "2020-12-10",
        "developer": "CD Projekt Red"
    },
    {
        "id": 5,
        "title": "The Witcher 3",
        "genre": "RPG",
        "category": "Role Playing",
        "description": "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game.",
        "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "rating": 4.8,
        "downloads": "20M+",
        "size": "35 GB",
        "release_date": "2015-05-19",
        "developer": "CD Projekt Red"
    },
    {
        "id": 6,
        "title": "FIFA 24",
        "genre": "Sports",
        "category": "Sports",
        "description": "Experience the thrill of the beautiful game with FIFA 24.",
        "image": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "rating": 4.3,
        "downloads": "25M+",
        "size": "50 GB",
        "release_date": "2023-09-29",
        "developer": "EA Sports"
    }
]

@app.get("/games")
def get_games(current_user: User = Depends(get_current_active_user)):
    return GAMES
@app.get("/games/{game_id}")
def get_game(game_id: int, current_user: User = Depends(get_current_active_user)):
    for game in GAMES:
        if game["id"] == game_id:
            return game
    raise HTTPException(status_code=404, detail="Game not found")