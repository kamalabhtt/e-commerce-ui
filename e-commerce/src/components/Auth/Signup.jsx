import React from 'react';
import './Auth.css';

const Signup = ({ switchToLogin }) => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p className="switch-link">
          Already have an account? <span onClick={switchToLogin}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
