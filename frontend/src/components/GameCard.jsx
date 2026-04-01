import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ game, showInstall }) => {
    const navigate = useNavigate();
    const handleInstall = () => {
        alert(`Installing ${game.title}... (Demo only)`);
    };
    return (
        <div style={{
            background: 'var(--bg-card)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
            transition: 'transform 0.3s, box-shadow 0.3s',
        }}
            className="game-card"
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.querySelector('.overlay').style.opacity = '0';
            }}
        >
            <div style={{ position: 'relative', height: '250px' }}>
                <img
                    src={game.image}
                    alt={game.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="overlay" style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top,var(--bg-card), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1rem'
                }}>
                    <span style={{
                        background: 'var(--accent-purple)',
                        color: 'white',
                        padding: '0.2rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                    }}>
                        {game.genre}
                    </span>
                </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{game.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    {game.description}
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        style={{
                            flex: 1,
                            padding: '0.8rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: 'none',
                            color: 'white',
                            fontFamily: 'uppercase',
                            cursor: 'pointer',
                            transition: 'background 0.3s'
                        }}
                        onMouseEnter={e => e.target.style.background = 'var(--accent-cyan)'}
                        onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.05)'}
                        onClick={() => navigate(`/games/${game.id}`)}
                    >
                        View Details
                    </button>
                    {showInstall && (
                        <button
                            style={{
                                flex: 1,
                                padding: '0.8rem',
                                background: 'var(--accent-purple)',
                                border: 'none',
                                color: 'white',
                                fontFamily: 'uppercase',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                                borderRadius: '8px'
                            }}
                            onClick={handleInstall}
                        >
                            Install
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameCard;