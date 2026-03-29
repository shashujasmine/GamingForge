import React from 'react';

const Hero = () => {
    const heroImg = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';

    return (
        <section style={{
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }} className="container">
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)',
                opacity: '0.2',
                filter: 'blur(80px)',
                zIndex: -1
            }}></div>

            <div style={{ maxWidth: '600px', zIndex: 1}}>
                <h4 style={{
                    color: 'var(--accent-cyan)',
                    marginBottom: '1rem',
                    letterSpacing: '0.2rem'
                }}> FUTURE OF GAMING</h4>

                <h1 style={{
                    fontSize: '5rem',
                    lineHeight: '0.9',
                    marginBottom: '1.5rem',
                    textShadow: '0 0 20px rgba(0,0,0,0.5)'
                }}>
                    FORGING <br />
                    <span className="glow-text" style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent-cyan)'}}>LEGENDS</span>

                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    marginBottom: '2.5rem',
                    maxWidth: '500px'
                }}>
                    We craft immersive digital experiences that push the boundaries of reality.
                    Join the next generation of players in words without limits.
                </p>

                <div style={{ display: 'flex', gap: '1rem'}}>
                    <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem'}}>
                        EXPLORE GAMES
                    </button>
                    <button className="btn" style={{ background: 'transparent', border: '2px solid var(--accent-cyan)', color: 'var(--accent-cyan)', fontSize: '1.2rem', padding: '1rem 2rem'}}>
                        WATCH TRAILER
                    </button>
                </div>
            </div>

            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                animation: 'float 6s ease-in-out infinite'
            }}>
                {/* Hero Image */}
                <div style={{
                    width: '100%',
                    height: '400px',
                    background: 'linear-gradient(45deg, rgba(0,240,255,0.1) , rgba(112,0,255,0.1))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <img src={heroImg} alt="GameForge Hero" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
            </div>
        </section>
    );
};

export default Hero;