import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Åkeberg Skoglunn Holding AS. All rights reserved.</p>
      <nav>
        <ul>
          <li><Link to="/privacy">Personvernerklæring</Link></li>
          <li><Link to="/contact">Kontakt oss</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;