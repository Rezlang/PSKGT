import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
        <img src="/pskShield.png" alt="Logo" className="logo" />
        <nav className="nav-buttons">
            <button className="nav-button">Home</button>
            <button className="nav-button">About</button>
            <button className="nav-button">Services</button>
            <button className="nav-button">Contact</button>
        </nav>
    </header>
  );
}

export default Header;
