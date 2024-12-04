import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic here
        console.log('Forgot Password Request:', email);
    };

    return (
        <div className="forgot-password-form">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
