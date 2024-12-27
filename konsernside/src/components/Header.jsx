import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Åkeberg Skoglunn Holding AS</h1>
      <nav>
        <ul>
          <li><Link to="/">Hjem</Link></li>
          <li><Link to="/about">Om oss</Link></li>
          <li><Link to="/tjenester">Tjenester</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;