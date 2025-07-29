import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../Styles/contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Let's Connect</h2>
      <div className="contact-details">
        <p><strong>Email:</strong> rastogibhoomi78@gmail.com</p>
        <p><strong>Phone:</strong> 9711776021</p>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/bhoomi-rastogi-4b2492263/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/bhoomirastogi" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Contact;
