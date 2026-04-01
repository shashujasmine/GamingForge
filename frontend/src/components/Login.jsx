import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError(null);

        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);

        try{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/token`,  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Login Failed. Please check your credentials.');
            }

            const data = await response.json();
            localStorage.setItem('token', data.access_token);

            navigate('/');
        } catch(err) {
            setError(err.message);
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh'
        }}>
            <main style={{
                background: 'var(--bg-card)',
                padding : '3rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                width:'100%',
                maxWidth: '400px'
            }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem'}}>Login</h1>
                {error && <div id="login-error" role="alert" aria-live="assertive" style={{ color: '#ff4444', marginBottom: '1rem', textAlign: 'center'}}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem'}}>
                        <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', color:'var(--text-secondary)'}}>Username or Email</label>
                        <input
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.8rem',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.2)',
                            color: 'white'
                        }}
                        required
                        aria-invalid={error ? "true" : "false"}
                        aria-describedby={error ? "login-error" : undefined}
                    />
                    </div>
                    <div style={{ marginBottom: '2rem'}}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem',color:'var(--text-secondary)'}}>Password</label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.8rem',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.2)',
                            color: 'white'
                        }}
                        required
                        aria-invalid={error ? "true" : "false"}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%',padding: '1rem'}}>
                        Sign In
                    </button>
                    <div style={{ marginTop: '1rem' , textAlign: 'center', fontSize: '0.9rem' , color: 'var(--text-secondary'}}>
                        <p>Demo Credentials: admin / password</p>
                        <p>Or login with email: admin@gmail.com / password</p>
                        <p style={{ marginTop: '0.5rem'}}> Don't have an account? <Link to="/register" style={{ color: 'var(--accent-cyan)'}}> Sign Up</Link></p>
                    </div>

                </form>
            </main>
        </div>
    );
};

export default Login;