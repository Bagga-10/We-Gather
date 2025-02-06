// src/components/Footer.js
import React from "react";
import "./Footer.css";  // Custom footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Company Info */}
        <div className="footer-left">
          <a href="/" className="footer-logo">
            <svg className="bi" width="30" height="24" role="img" aria-label="Logo">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="footer-text">© 2024 We-Gather, Inc. All Rights Reserved.</span>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <ul className="footer-nav">
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            <li><a href="/contact" className="footer-link">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Icons using Font Awesome */}
        <div className="footer-social">
          <a href="https://twitter.com" className="social-icon">
            <i className="fab fa-twitter"></i> {/* Twitter Icon */}
          </a>
          <a href="https://instagram.com" className="social-icon">
            <i className="fab fa-instagram"></i> {/* Instagram Icon */}
          </a>
          <a href="https://facebook.com" className="social-icon">
            <i className="fab fa-facebook"></i> {/* Facebook Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
