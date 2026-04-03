<div align="center">
  <h1>🎮 GameForge Studio</h1>
  <p><i>A modern, cinematic web portal for a premium game development studio.</i></p>
  
  [![React](https://img.shields.io/badge/React-19.2.4-blue.svg?style=flat&logo=react)](https://reactjs.org/)
  [![FastAPI](https://img.shields.io/badge/FastAPI-0.110.0-009688.svg?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
  [![Vite](https://img.shields.io/badge/Vite-8.0.0-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

<br />

GameForge Studio is an immersive web interface designed for a gaming company. Built with a decoupled architecture, it leverages a high-performance **React (Vite)** frontend to deliver cinematic layouts and fluid micro-animations, while a secure **FastAPI** Python backend handles user authentication and data management.

About Project:
This project aims to create the user a better gaming platform and my aim is to create a platform to explore games , the buttons I have included at the top of the website studios , community are a part of my ideas , it will be my future scopes to develop at latest styles , and watch trailer , newsletter are the part of my ideas to update the user to give about new games . To build next generation gaming platform . 

---

## ✨ Key Features

- **Robust Authentication:** Secure user registration, login, and session management using JWT (`python-jose`) and `bcrypt`.
- **Dynamic Game Repository:** Fetch, filter, and view games via secure REST API endpoints.
- **Cinematic UI/UX:** Premium design with glassmorphism, gradient overlays, and tailored micro-animations designed to "wow" users (no utility CSS frameworks like Tailwind used—pure custom CSS design system).
- **Responsive Navigation:** fully responsive layout optimized for all device sizes, featuring a dynamic navigation bar and footer.

## 🏗️ Architecture & Tech Stack

### 🎨 Frontend (`/frontend`)
- **Core:** React 19 + Vite for lightning-fast HMR and building.
- **Routing:** `react-router-dom` v7 for seamless client-side page transitions.
- **Styling:** Custom Vanilla CSS design system (`index.css`) prioritizing a dynamic, premium aesthetic over standard utility classes.
- **Icons:** `lucide-react`.
- **Key Components:**
  - `Home.jsx` & `Hero.jsx`: Landing page and impactful hero banners.
  - `GameCard.jsx` & `GameDetails.jsx`: Modular components for game browsing and deep-dive cinematic views.
  - `Login.jsx` & `Register.jsx`: JWT-secured authentication forms.

### ⚙️ Backend (`/backend`)
- **Core:** Python 3.8+ with FastAPI.
- **Server:** Uvicorn (ASGI web server).
- **Security:** OAuth2 with Password (and hashing), Bearer with JWT tokens.
- **Data handling:** Pydantic for data validation and schema definitions.

---

## 📡 API Reference

The backend exposes the following RESTful endpoints (accessible via the Swagger UI at `http://127.0.0.1:8000/docs` when running locally):

### Authentication
- `POST /register` – Register a new user (requires username and password).
- `POST /token` – Authenticate user and issue a JWT access token.
- `GET /users/me` – Retrieve the currently authenticated user's profile.

### Games
- `GET /games` – Retrieve a list of all games (requires Bearer token).
- `GET /games/{game_id}` – Retrieve detailed information for a specific game (requires Bearer token).

---

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [Python](https://www.python.org/) (v3.8 or higher)
- Optional but recommended: Virtual environment manager for Python (like `venv` or `conda`)

### 1. Backend Setup

Open a terminal and set up the FastAPI server:

```bash
# 1. Navigate to the backend directory
cd backend

# 2. (Optional) Create and activate a Python virtual environment
python -m venv venv
# On Windows: venv\Scripts\activate
# On macOS/Linux: source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Start the development server
uvicorn main:app --reload
```
The API should now be running at `http://127.0.0.1:8000`.

### 2. Frontend Setup

Open a **new** terminal window for the React app:

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install NPM dependencies
npm install

# 3. Configure Environment Variables
# Create a .env file based on the environment structure:
echo "VITE_API_URL=http://127.0.0.1:8000" > .env

# 4. Run the frontend development server
npm run dev
```

The application will be accessible at `http://localhost:5173` (or the local network URL provided by Vite).

---

## 📁 Project Structure

```text
gamefor/
│
├── backend/                  # Python API
│   ├── main.py               # Core FastAPI routing & logic
│   └── requirements.txt      # Python dependencies
│
├── frontend/                 # React UI
│   ├── index.html            # Entry HTML
│   ├── package.json          # Node dependencies
│   ├── vite.config.js        # Vite bundler config
│   ├── .env                  # Environment Variables (backend URL)
│   ├── public/               # Static assets (images, favicons)
│   └── src/
│       ├── assets/           # Reusable graphical assets
│       ├── components/       # UI Components (Hero, Login, Navbar, etc.)
│       ├── index.css         # Global styling & layout tokens
│       ├── App.jsx           # Root layout & routing logic
│       └── main.jsx          # React renderer entry
│
└── README.md                 # Primary documentation
```

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
