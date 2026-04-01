import React , {useState, useEffect} from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import { ArrowLeft} from 'lucide-react';

const GameDetails = () => {
    const {id}=useParams();
    const [game,setGame] = useState(null);
    const [loading,setLoading]=useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        fetch(`${import.meta.env.VITE_BACKEND_URL}/games/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
              .then(res => {
                if (!res.ok) throw new Error("Game not found");
                return res.json();
              })
              .then(data => {
                setGame(data);
                setLoading(false);
              })
              .catch(err => {
                console.error(err);
                setLoading(false);
              });
            },[id, navigate]);
            if (loading) return <div style = {{ textAlign: 'center', padding: '4rem'}}> Loading details...</div>;
            if (!game) return <div style = {{ textAlign: 'center', padding: '4rem'}}>Game not found.</div>;

            return (
                <div style={{ position: 'relative', minHeight: '100vh' }}>
                    {/* Background Blur Effect */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '60vh',
                        backgroundImage: `url(${game.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(30px) brightness(0.3)',
                        zIndex: -1,
                        maskImage: 'linear-gradient(to bottom, black, transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
                    }}></div>

                    <div className="container" style={{ padding: '4rem 2rem', paddingTop: '6rem' }}>
                        <Link to="/" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--accent-cyan)',
                            marginBottom: '3rem',
                            textDecoration: 'none',
                            background: 'rgba(0,0,0,0.5)',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '30px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'var(--accent-cyan)';
                            e.currentTarget.style.color = 'black';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                            e.currentTarget.style.color = 'var(--accent-cyan)';
                        }}
                        >
                            <ArrowLeft size={20} /> Back to Hub
                        </Link>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(350px, 1fr) 2fr',
                            gap: '4rem',
                            alignItems: 'start'
                        }}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={game.image}
                                    alt={game.title}
                                    style={{
                                        width: '100%',
                                        borderRadius: '20px',
                                        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(255,255,255,0.2)'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    right: '-20px',
                                    background: 'var(--accent-purple)',
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    boxShadow: '0 10px 20px rgba(112,0,255,0.4)',
                                    border: '2px solid rgba(255,255,255,0.2)'
                                }}>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: '1' }}>{game.rating ? game.rating : '?'}</span>
                                    <span style={{ fontSize: '0.7rem' }}>/5</span>
                                </div>
                            </div>

                            <div style={{ background: 'rgba(20,20,30,0.7)', padding: '3rem', borderRadius: '24px', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <span style={{
                                    display: 'inline-block',
                                    background: 'rgba(112,0,255,0.2)',
                                    color: 'var(--accent-cyan)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    marginBottom: '1rem',
                                    border: '1px solid rgba(0,240,255,0.2)'
                                }}>
                                    {game.genre}
                                </span>
                                <h1 style={{ fontSize: '4rem' , margin: '0 0 1.5rem', lineHeight: '1.1', textShadow: '0 0 20px rgba(255,255,255,0.1)'}}>
                                    {game.title}
                                </h1>
                                <p style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '1.2rem',
                                    lineHeight: '1.8',
                                    marginBottom: '2.5rem'
                                }}>
                                    {game.description}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    gap: '2rem',
                                    marginBottom: '3rem',
                                    flexWrap: 'wrap'
                                }}>
                                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '16px', flex: 1, minWidth: '150px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Release</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold'}}>{game.release_date || 'TBA'}</div>
                                    </div>
                                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '16px', flex: 1, minWidth: '150px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Studio</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold'}}>{game.developer || 'Unknown'}</div>
                                    </div>
                                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '16px', flex: 1, minWidth: '150px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Size</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold'}}>{game.size || 'N/A'}</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem', flex: 1}}>
                                        PLAY NOW
                                    </button>
                                    <button className="btn" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.2)', fontSize: '1.2rem', padding: '1.2rem 3rem', flex: 1, transition: 'background 0.3s' }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                    >
                                        WATCH TRAILER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
};

export default GameDetails;