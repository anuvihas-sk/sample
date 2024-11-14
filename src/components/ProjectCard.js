// src/components/ProjectCard.js

import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm ">
        {/* Card Header with title */}
        <div className="card-header py-3 bg-dark text-light">
          <h4 className="my-0 fw-normal">{title}</h4>
        </div>
        {/* Card Body with description and button */}
        <div className="card-body">
          <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
            {/* Description Section */}
            <div className="mb-3">
              <p>{description}</p>
            </div>
            {/* Button Section */}
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-dark"
                style={{ maxWidth: '250px', margin: '0 auto' }} // Centered button
              >
                Click here
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
