import React from 'react';
import '../styles/Footer.css';
import logoWhite from '../assets/logoWhite.png';

export function Footer() {
  return (
    <footer>
      <img src={logoWhite} alt="logo blanc" className="kasa-logo-white" />
      <p className="kasa-2020">&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
