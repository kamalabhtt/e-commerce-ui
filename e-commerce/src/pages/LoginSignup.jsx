import React, { useState } from 'react';
import Login from '../components/Auth/login';     
import Signup from '../components/Auth/signup';   


const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <Login switchToSignup={() => setShowLogin(false)} />
      ) : (
        <Signup switchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
};

export default LoginSignup;
