import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Moises Gutierrez. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
