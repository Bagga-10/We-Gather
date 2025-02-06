import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        WE-GATHER
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>
          <a href="https://www.iare.ac.in/" target="_blank" rel="noopener noreferrer">
            Academic Updates
          </a>
        </li>
        <li>
            <a href='https://events.com/' target='_blank' rel='noopener noreferrer'>Events
            </a>
        </li>
        <li>
            <a href='https://www.iare.ac.in/?q=pages/iare-academic-calendar' target='_blank' rel='noopener noreferrer'>
            Announcements
            </a>
        </li>
        <li><Link to="/messaging">Messaging</Link></li>
        <li><Link to="/Notes">Notes</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
