import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/work.css';

function Work() {
  const projects = [
    {
      name: 'CRM Dashboard',
      description: 'A fully functional CRM dashboard built using React.js with charts, cards, and dynamic data.',
      github: 'https://github.com/bhoomirastogi/CRM',
      liveLink: 'https://bhoomirastogi.github.io/CRM/'
    },
    {
      name: 'Map Visualizer',
      description: 'Interactive map website using QGIS, Bootstrap, and JavaScript.',
      github: 'https://github.com/bhoomirastogi/map-visualizer',
      liveLink: '#'  // Add live link if deployed
    },
    {
      name: 'Hosting Website',
      description: 'A hosting service website built with React.js showcasing domain and hosting plans.',
      github: 'https://github.com/bhoomirastogi/Hosting',
      liveLink: '#'  // Add live link if deployed
    },
    {
      name: 'Rhode Website',
      description: 'A product-based website designed for Rhode company using React.',
      github: 'https://github.com/bhoomirastogi/rhode',
      liveLink: '#'  // Add live link if deployed
    },
    {
      name: 'Hubspot CRM Clone',
      description: 'A CRM dashboard inspired by Hubspot, created with React for business management.',
      github: 'https://github.com/bhoomirastogi/Hubspot',
      liveLink: '#'  // Add live link if deployed
    },
    {
      name: 'Spreadwealth Risk Reward',
      description: 'An interactive financial roadmap app to visualize risk-reward scenarios.',
      github: 'https://github.com/bhoomirastogi/risk-reward-roadmap',
      liveLink: '#'  // Add live link if deployed
    },
    {
      name: 'Live Task Manager',
      description: 'A real-time task management web app with React and Firebase backend.',
      github: 'https://github.com/bhoomirastogi/live-task-master',
      liveLink: '#'  // Add live link if deployed
    }
  ];

  return (
    <section className="work-section" id="work">
      <h2>My Work</h2>
      <div className="work-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                GitHub
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-button">
                <FaExternalLinkAlt />
                Live Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
