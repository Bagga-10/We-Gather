import React from 'react';
import './Auth.css';

function Login() {
  const handleLogin = (e) => {
    // e.preventDefault();
    alert('Login Successful!');
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
        <button type="submit" className="auth-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
