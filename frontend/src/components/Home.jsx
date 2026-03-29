import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import GameCard from './GameCard';

const MOCK_GAMES = [
    {
        id: 1,
        title: "Assassin's Creed Valhalla",
        genre: "Action",
        category: "Action & Adventure",
        description: "Become Eivor, a legendary Viking warrior in Assassin's Creed Valhalla. Raid, conquer, and shape the destiny of a nation in this epic RPG adventure.",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        rating: 4.5,
        downloads: "10M+",
        size: "25 GB"
    },
    {
        id: 2,
        title: "Galactic Empires",
        genre: "Strategy",
        category: "Strategy",
        description: "Command vast interstellar fleets in this 4X space strategy game. Build your empire, form alliances, and conquer the galaxy.",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        rating: 4.2,
        downloads: "5M+",
        size: "2.1 GB"
    },
    {
        id: 3,
        title: "Shadow Ninja",
        genre: "Action",
        category: "Action & Adventure",
        description: "Master the art of stealth in this intense action game. Navigate treacherous environments and eliminate targets with precision.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        rating: 4.7,
        downloads: "8M+",
        size: "1.5 GB"
    },
    {
        id: 4,
        title: "Cyberpunk 2077",
        genre: "RPG",
        category: "Role Playing",
        description: "An open-world, action-adventure RPG set in the dark future of Night City.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        rating: 4.0,
        downloads: "15M+",
        size: "70 GB"
    },
    {
        id: 5,
        title: "The Witcher 3",
        genre: "RPG",
        category: "Role Playing",
        description: "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        rating: 4.8,
        downloads: "20M+",
        size: "35 GB"
    },
    {
        id: 6,
        title: "FIFA 24",
        genre: "Sports",
        category: "Sports",
        description: "Experience the thrill of the beautiful game with FIFA 24.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        rating: 4.3,
        downloads: "25M+",
        size: "50 GB"
    }
];

const Home = () =>{
    const [ games, setGames] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/games`)
           .then(res => res.json())
           .then(data => {
            setGames(data);
            setLoading(false);
           })
           .catch(() => {
            console.log("Backend not reachable , using mock data");
            setGames(MOCK_GAMES);
            setLoading(false);
           });
    }, []);

    return (
        <main>
            <Hero />

            <section id="games" className="container" style={{ padding: '4rem 2rem'}}>
                <div style = {{  marginBottom: '3rem' ,textAlign: 'center'}}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem'}}>
                        FEATURED <span style={{ color: 'var(--accent-cyan)'}}>GAMES</span>

                    </h2>
                    <div style={{ width: '100px', height: '4px',background: 'var(--accent-purple)',margin: '0 auto'}}></div>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center',padding: '2rem'}}>Loading Games...</div>
                ) : (
                    <div className="grid-games">
                        {games.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                )}
            </section>

            <section className="container" style={{
                padding: '4rem 2rem',
                background: 'linear-gradient(90deg, transparent, rgba(112,0,255,0.05),transparent)',
                borderRadius: '20px',
                margin: '4rem auto',
                textAlign: 'center'
            }}>
                <h2 style ={{ fontSize: '2.5rem', marginBottom: '1.5rem'}}>READY TO START</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem'}}>
                    Join our growing community of 10+ million players worldwide. Creating accounts is free and gives you instant access to our free-to-play titles.
                </p>
                <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem'}}>
                    CREATE ACCOUNT
                </button>
            </section>

            <footer style={{ background: 'var(--bg-card)', padding: '4rem 2rem 2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>GAMEFORGE</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Building the next generation of immersive gaming experiences.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>STUDIOS</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About Us</a></li>
                            <li><a href="#team" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Our Team</a></li>
                            <li><a href="#careers" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Careers</a></li>
                            <li><a href="#press" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Press Kit</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>COMMUNITY</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><a href="#discord" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Discord</a></li>
                            <li><a href="#twitter" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Twitter</a></li>
                            <li><a href="#instagram" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Instagram</a></li>
                            <li><a href="#twitch" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Twitch</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>NEWSLETTER</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Stay updated with our latest games and news.</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(0,0,0,0.2)',
                                color: 'white',
                                marginBottom: '0.5rem'
                            }}
                        />
                        <button className="btn" style={{ width: '100%', padding: '0.8rem' }}>JOIN</button>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
                    © 2026 GameForge Studios. All rights reserved.
                </div>
            </footer>
        </main>
    );
};

export default Home;