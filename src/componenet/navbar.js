import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for the toggle bar

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsTransparent(true); // Make navbar transparent after scrolling down 50px
    } else {
      setIsTransparent(false); // Keep navbar blue when at the top
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`nav ${isTransparent ? 'header-transparent' : ''}`}>
      <div className="toggle-bar" onClick={toggleMenu}>
        {/* Hamburger icon */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <h2 className='gg' style={{color:"white"}}>Portfolio...</h2>
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>HOME</a>
        <a href="#about" onClick={closeMenu}>ABOUT</a>
        <a href="#skill" onClick={closeMenu}>SKILL</a>
        <a href="#projects" onClick={closeMenu}>PROJECT</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
        
      </nav>
    </header>
  );
}

export default Navbar;
