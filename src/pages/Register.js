import React from 'react';
import './Auth.css';

function Register() {
  const handleRegister = (e) => {
    // e.preventDefault();
    alert('Registration Successful!');
  };
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password</label>
        <input type="password" placeholder="Create a password" required />
        <button type="submit" className="auth-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
