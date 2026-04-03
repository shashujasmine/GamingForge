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


