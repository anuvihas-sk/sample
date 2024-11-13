// src/components/ProjectCard.js

import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{title}</h4>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">
            <li>{description}</li>
          </ul>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button type="button" className="w-100 btn btn-lg btn-outline-dark">
              Click here
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
