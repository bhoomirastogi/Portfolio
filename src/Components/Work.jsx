import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/work.css';

function Work() {
  const projects = [
    {
      id: 'crm-dashboard',
      name: 'CRM Dashboard',
      description: 'A fully functional CRM dashboard built using React.js with charts, cards, and dynamic data.',
      github: 'https://github.com/bhoomirastogi/CRM',
      liveLink: 'https://bhoomirastogi.github.io/CRM/'
    },
  
    {
      id: 'hosting-website',
      name: 'Hosting Website',
      description: 'A hosting service website built with React.js showcasing domain and hosting plans.',
      github: 'https://github.com/bhoomirastogi/Hosting',
      liveLink: 'https://bhoomirastogi.github.io/Hosting/'
    },
    {
      id: 'rhode-website',
      name: 'Rhode Website',
      description: 'A product-based website designed for Rhode company using React.',
      github: 'https://github.com/bhoomirastogi/rhode',
      liveLink: 'https://bhoomirastogi.github.io/rhode/'
    },
    {
      id: 'hubspot-clone',
      name: 'Hubspot CRM Clone',
      description: 'A CRM dashboard inspired by Hubspot, created with React for business management.',
      github: 'https://github.com/bhoomirastogi/Hubspot',
      liveLink: 'https://bhoomirastogi.github.io/Hubspot/'
    },
    {
      id: 'spreadwealth',
      name: 'Spreadwealth Risk Reward',
      description: 'An interactive financial roadmap app to visualize risk-reward scenarios.',
      github: 'https://github.com/bhoomirastogi/risk-reward-roadmap',
      gallery: true  // Will link to /gallery/spreadwealth
    },
    {
      id: 'live-task',
      name: 'Live Task Manager',
      description: 'A real-time task management web app with React and Firebase backend.',
      github: 'https://github.com/bhoomirastogi/live-task-master',
      gallery: true  // Will link to /gallery/live-task
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

              {project.gallery ? (
                <Link to={`/gallery/${project.id}`} className="image-button">
                  <FaImage />
                  Images
                </Link>
              ) : (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-button">
                  <FaExternalLinkAlt />
                  Live Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
