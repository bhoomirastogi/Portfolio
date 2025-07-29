import React from 'react';
import '../Styles/techstack.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';

function TechStack() {
  return (
    <section className="techstack-section" id="techstack">
      <h2>MY TECHSTACK</h2>
      <div className="logo-container">
        <div className="logo-ball bounce"><FaReact size={40} color="#61DBFB" /></div>
        <div className="logo-ball float"><FaNodeJs size={40} color="#68A063" /></div>
        <div className="logo-ball wiggle"><FaHtml5 size={40} color="#E34C26" /></div>
        <div className="logo-ball float"><FaCss3Alt size={40} color="#264de4" /></div>
        <div className="logo-ball wiggle"><FaJs size={40} color="#f0db4f" /></div>
        <div className="logo-ball float"><FaGitAlt size={40} color="#F1502F" /></div>
      </div>
    </section>
  );
}

export default TechStack;
