import React from 'react';
import './footer.css'; // Create this CSS file for styling the footer

const footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-links">
          <p>Connect with me:</p>
          <ul className="footer-links">
            <li><a href="https://www.linkedin.com/in/fathima23/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="sf0174813@gmail.com">Email</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fathima. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
