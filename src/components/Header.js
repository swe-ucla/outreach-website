import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* <div className="logo">
        <p>SWE UCLA</p>
        </div> */}
      <nav className="nav">
        <ul>
          <li><a href="/" target="_blank">Our Events</a></li>
          <li><a href="/about" target="_blank">Projects</a></li>
          <img 
            src="../images/swe_outreach_logo.png"
            className="swe_logo"
          />
          <li><a href="/events" target="_blank">Meet the Team</a></li>
          <li><a href="/contact" target="_blank">Contact us</a></li>
          
        </ul>
      </nav>
    </header>
  );
}
export default Header;
