import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/gallery.css';

// Live Task Manager Images
import taskMasterImage from '../assets/Task Master.png';
import createTaskImage from '../assets/Create Task.png';

// Spreadwealth Images
import spread2 from '../assets/Spread2.png';
import spreadWealth from '../assets/SpreadWealth.png';
import spread3 from '../assets/Spread3.png';

// Gallery Mapping
const galleries = {
  'live-task': [taskMasterImage, createTaskImage],
  'spreadwealth': [spread2, spreadWealth, spread3]
};

function Gallery() {
  const { projectId } = useParams();
  const images = galleries[projectId] || [];

  return (
    <div className="gallery-page">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h2>{projectId.replace('-', ' ').toUpperCase()} Gallery</h2>

      {images.length > 0 ? (
        <div className="gallery-grid">
          {images.map((img, index) => (
            <img src={img} alt={`Screenshot ${index + 1}`} key={index} />
          ))}
        </div>
      ) : (
        <p>No images available for this project.</p>
      )}
    </div>
  );
}

export default Gallery;
