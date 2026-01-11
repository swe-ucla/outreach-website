import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, image, tags }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3> 

      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>

      <div className="tags-overlay-container"> 
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className={`tag tag-${tag.color}`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;