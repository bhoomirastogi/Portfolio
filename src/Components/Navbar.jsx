import React from 'react'
import '../Styles/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Bhoomi</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#techstack">TechStack</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar