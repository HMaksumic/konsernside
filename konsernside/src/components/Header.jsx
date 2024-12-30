import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <h1>Åkeberg Skoglunn Holding</h1>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Hjem</Link></li>
          <li><Link to="/tjenester" onClick={toggleMenu}>Tjenester</Link></li>
          <li><Link to="/kontakt" onClick={toggleMenu}>Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;