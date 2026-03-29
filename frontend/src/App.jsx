import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import GameDetails from './components/GameDetails.jsx';

function App() {
  return (
    <div style = {{ minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;