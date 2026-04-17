#  GameForge Studio

*A modern and cinematic web platform for exploring games.*

---

##  About the Project

GameForge Studio is a web-based platform designed to give users a smooth and engaging way to explore games. The focus of this project is not just functionality, but also creating a visually appealing and immersive experience.

This project also reflects my ideas for building a larger gaming ecosystem in the future. Some elements currently visible in the interface—like the top navigation buttons **Studios**, **Community**, and **Careers**—are part of planned features. They are included to represent the direction of the platform and will be developed further in future updates.

I also plan to introduce a **newsletter feature**, where users can create an account or subscribe to receive updates about new games, releases, and announcements. This will help keep users informed and connected to the platform.

Another feature planned for future development is the **“Watch Trailer”** option. This will allow users to view game trailers directly on the website, making it easier for them to understand and explore games before deciding to try them.

Overall, this project is a starting point for a **next-generation gaming platform**. The current version focuses on core features and design, while future updates will expand its functionality and user experience.

---

##  Key Features

* **User Authentication**
  Secure registration and login system using JWT and password hashing.

* **Game Browsing**
  Users can view and explore different games through a structured interface.

* **Modern UI Design**
  A cinematic and clean interface built using custom CSS, focusing on smooth animations and visual appeal.

* **Responsive Layout**
  The website works well across different devices including mobile, tablet, and desktop.

---

##  Architecture & Tech Stack

###  Frontend (`/frontend`)

* Built with **React + Vite** for fast performance and development.
* Uses **React Router** for smooth navigation between pages.
* Styled using **custom CSS**, without relying on frameworks, to maintain a unique design.
* Includes components like:

  * Home and Hero sections
  * Game cards and detailed views
  * Login and Registration pages

---

###  Backend (`/backend`)

* Developed using **FastAPI (Python)**
* Runs on **Uvicorn server**
* Implements authentication using **JWT tokens**
* Uses **Pydantic** for data validation

---

##  API Overview

The backend provides simple REST APIs that handle user authentication and game data.

### Authentication

* Register a new user
* Login and receive access token
* Get current user details

### Games

* View all games
* View details of a specific game

---

##  Getting Started

Follow these steps to run the project locally.

---

###  Prerequisites

* Node.js (v16 or higher)
* Python (v3.8 or higher)
* (Optional) Virtual environment

---

###  Backend Setup

```bash
cd backend

python -m venv venv
# Activate environment:
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend will run at:
[http://127.0.0.1:8000](http://127.0.0.1:8000)

---

###  Frontend Setup

```bash
cd frontend

npm install

echo "VITE_API_URL=http://127.0.0.1:8000" > .env

npm run dev
```

Frontend will run at:
[http://localhost:5173](http://localhost:5173)

---

##  Project Structure

```
gamefor/
│
├── backend/          # FastAPI backend
│   ├── main.py
│   └── requirements.txt
│
├── frontend/         # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

The project follows a **separated frontend-backend architecture**, making it easier to manage and scale in the future.

---

##  Future Scope

* Develop **Studios, Community, and Careers** sections into full features
* Add **Watch Trailer** functionality for games
* Implement **newsletter system** for user updates
* Improve personalization and recommendations
* Expand game database and filtering options



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
