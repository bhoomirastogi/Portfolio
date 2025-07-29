import React from 'react';
import '../Styles/hero.css';

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1>Hi, I'm Bhoomi</h1>
        <p>Frontend Developer crafting responsive and seamless web experiences with React.js expertise. Dedicated to building visually engaging and performance-optimized user interfaces with clean, maintainable code.</p>
        <a href="mailto:rastogibhoomi78@gmail.com" className="hero-button">Let's Connect</a>

      </div>
      <div className="hero-image">
        <img src="https://i.pinimg.com/736x/c2/7d/30/c27d30ae50a35784c1ac2332fdb5ee39.jpg" alt="Bhoomi" />
      </div>
    </section>
  );
}

export default Hero;
