import React , { useState} from 'react' ;
import { useNavigate, Link} from 'react-router-dom';

const Register = () => {
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }

        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });

            if (!response.ok){
                const data = await response.json();
                throw new Error(data.details || 'Registration failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh'
        }}>
            <main style={{
                background: 'var(--bg-card)',
                padding: '3rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1) ',
                width: '100%',
                maxWidth: '400px'
            }}>
                <h1 style = {{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem'}}> Register</h1>
                {error && <div id="register-error" role="alert" aria-live="assertive" style={{ color: '#ff4444', marginBottom: '1rem', textAlign: 'center'}}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem'}}>
                        <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)'}}>Username</label>
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
                        />
                    </div>
                    <div style={{ marginBottom: '1.5rem'}}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)'}}>Password</label>
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
                    <div style={{ marginBottom: '2rem' }}>
                        <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Confirm Password</label>
                        <input 
                        id="confirmPassword"
                        name="confirmPassword"
                        type = "password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                    <button type="submit" className="btn" style={{ width: '100%', padding: '1rem'}}>
                        Sign Up 
                    </button>
                    <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-secondary)'}}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--accent-cyan)'}}>Login</Link>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Register;