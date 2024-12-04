import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Add styles here

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic (validation, API call)
        console.log('Login Data:', loginData);
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
                <p>
                    Forgot password? <Link to="/forgot-password">Click here</Link>
                </p>
                <p>
                    Don't have an account? <Link to="/signup">Create one here</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
