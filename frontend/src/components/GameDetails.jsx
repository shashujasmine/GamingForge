import React , {useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import { ArrowLeft} from 'lucide-react';

const GameDetails = () => {
    const {id}=useParams();
    const [game,setGame] = useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/games/${id}`)
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
            },[id]);
            if (loading) return <div style = {{ textAlign: 'center', padding: '4rem'}}> Loading details...</div>;
            if (!game) return <div style = {{ textAlign: 'center', padding: '4rem'}}>Game not found.</div>;

            return (
                <div className = "container" style={{ padding : '4rem 2rem'}}>
                    <Link to="/" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-cyan)',
                        marginBottom: '2rem',
                        textDecoration: 'none'
                    }}>
                        <ArrowLeft size={20} /> Back to Games
                    </Link>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
                        gap: '4rem',
                        alignItems: 'start'
                    }}>
                        <div>
                            <img
                            src={game.image}
                            alt={game.title}
                            style={{
                                width: '100%',
                                borderRadius: '16px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                            />
                        </div>
                        <div>
                            <span style={{
                                color: 'var(--accent-purple)',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                textTransform: 'uppercase'
                            }}>
                                {game.genre}
                            </span>
                            <h1 style={{ fontSize: '3.5rem' , margin: '0.5rem 0 1.5rem', lineHeight: '1.1'}}>
                                {game.title}
                            </h1>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.1rem',
                                lineHeight: '1.6',
                                marginBottom: '2rem'
                            }}>
                                {game.description}
                            </p>

                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                marginTop: '2rem',
                                padding: '2rem',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '12px',
                                flexWrap: 'wrap'

                            }}>
                                <div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}> Release Date</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold'}}>{game.release_date || 'TBA'} </div>

                                </div>
                                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                                <div>
                                    <div style={{ color: 'var(--text-secondary)',fontSize: '0.9rem'}}>Developer</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold'}}>{game.developer || 'Unknown'}</div>
                                </div>
                                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                                <div>
                                    <div style={{ color: 'var(--text-secondary)',fontSize: '0.9rem'}}>Rating</div>
                                    <div style={{ fontSize: '1.1rem',fontWeight: 'bold', color: 'var(--accent-cyan)'}}>
                                        {game.rating ? `${game.rating}/5` : 'Pending'}
                                    </div>
                                </div>
                            </div>
                        

                        <button className= "btn btn-primary" style={{ marginTop: '2rem', fontSize: '1.1rem',padding: '1rem 3rem'}}>
                            Play Now
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default GameDetails;