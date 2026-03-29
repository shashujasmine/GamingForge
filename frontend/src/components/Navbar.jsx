import React, { useState, useEffect, Fragment } from 'react' ;
import { Gamepad2, User } from 'lucide-react';
import { Link, useNavigate , useLocation } from 'react-router-dom';

const Navbar = () => {
    const [ user, setUser ] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            fetch(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                if(res.ok) return res.json();
                throw new Error('Failed to fetch user');
            })
            .then(data => setUser(data))
            .catch(() => {
                localStorage.removeItem('token');
                setUser(null);
            });

        }
    }, [ location]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    };

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        }} className="container">
            <Link to="/" style={{ display: 'flex', alignItems: 'center' , gap: '0.5rem', textDecoration: 'none'}}>
            <Gamepad2 color="var(--accent-cyan)" size={32} />
            <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                fontFamily: 'var(--font-display)',
                color: 'white'
            }}>GAME<span style={{ color: 'var(--accent-cyan)' }}>FORGE</span></span>
            </Link>

            <div style={{ display: 'flex', gap: '2rem'}}>
                {['Games', 'Studio','Careers', 'Community'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} style={{
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    transition: 'color 0.3s',
                    textDecoration: 'none'}}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                    {item.toUpperCase()}
                    </a>
                ))}
            </div>

            {user ? (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)'}}>
                <User size={20} />
                <span>{user.username}</span>
                </div>
                <button onClick={handleLogout} className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)'}}>
                Logout
                </button>
                </div>
                ) : (
                 <div style={{ display: 'flex', gap: '1rem', alignItems: 'center'}}>
                 <Link to="/login" className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)'}}>
                 Login
                 </Link>
                 <Link to="/register" className="btn">
                 Sign Up
                 </Link>
                 </div>
                 )}
        </nav>
    );
};

export default Navbar;