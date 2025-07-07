import React from 'react';
import './Auth.css';

const Login = ({ switchToSignup }) => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p className="switch-link">
          Don’t have an account? <span onClick={switchToSignup}>Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
