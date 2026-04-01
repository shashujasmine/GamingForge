import React from 'react';

const Footer = () => {
    return(
        <footer style={{
            marginTop: '5rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '4rem 0 2rem',
            background: 'linear-gradient(to bottom, var(--bg-primary), #000)'
        }}>
            <div className="container" >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <div style={{
                        maxWidth: '300px'
                    }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem'}}>GAME<span style={{color: 'var(--accent-cyan)'}}>FORGE</span></h3>
                        <p style={{ color: 'var(--text-secondary)'}}>
                            Building the next generation of immersive gaming experience.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem'}}>Studios</h4>
                        <ul style={{ listStyle: 'none',color:'var(--text-secondary)',display: 'flex',flexDirection: 'column',gap: '0.5rem'}}>
                            <li>About Us</li>
                            <li>Our team</li>
                            <li>Careers</li>
                            <li>Press Kit</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem'}}>Studios</h4>
                        <ul style={{ listStyle: 'none',color:'var(--text-secondary)',display: 'flex',flexDirection: 'column',gap: '0.5rem'}}>
                            <li>Discord</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Twitch</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem'}}>Newsletter</h4>
                        <div style={{display: 'flex'}}>
                            <input type="email" placeholder="Enter your email" style={{
                                padding: '0.8rem',
                                background:'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color:'white',
                                outline: 'none'
                            }}/>
                            <button style={{
                                padding:'0.8rem 1.5rem',
                                background: 'var(--accent-purple)',
                                border: 'none',
                                color: 'white',
                                fontFamily: 'var(--font-display)',
                                cursor: 'pointer'
                            }}>Join</button>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center',color:'var(--text-secondary)',fontSize: '0.9rem',paddingTop: '2rem',borderTop: '1px solid rgba(255,255,255,0.05)'}}>
                    {new Date().getFullYear()} GameForge Studios. All rights reserved.
        
                </div>
            </div>
        </footer>
    );
};

export default Footer;