import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsTransparent(true); // Make navbar transparent after scrolling down 50px
    } else {
      setIsTransparent(false); // Keep navbar blue when at the top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`nav ${isTransparent ? 'header-transparent' : ''}`}>
      <div className='side'>
        <span>Portfolio...</span>
      </div>
      <nav className='navigation'>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#skill">SKILL</a>
        <a href="#contact">CONTACT</a>
        <a href="#projects">PROJECT</a>
      </nav>
    </header>
  );
}

export default Navbar;
