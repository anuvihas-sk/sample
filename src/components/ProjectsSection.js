// src/components/ProjectsSection.js
import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="project">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 className="display-4 fw-normal">Projects</h2>
          <p className="fs-5 text-body-secondary">See through it</p>
        </div>
        
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {/* Project 1 */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">To-do List Application</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Developed a To-Do application using ReactJS to demonstrate fundamental React concepts. This application allows users to create, edit, and delete tasks.</li>
                </ul>
                <a href="https://github.com/anuvihas/Todo-List-Application" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="w-100 btn btn-lg btn-outline-dark">Click Here</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">QR Code Generator</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Developed a QR Code generator application using Node.js to provide an efficient way to create and manage QR codes. This application allows users to generate and download QR codes in various formats such as PNG, JPEG, and SVG.</li>
                </ul>
                <a href="https://github.com/anuvihas/QR-Code-Generator" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="w-100 btn btn-lg btn-outline-dark">Click Here</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Weather Application</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Developed a Weather application using Node.js with Express.js and API to fetch weather data. This application allows users to search for weather data for any city in the world.</li>
                </ul>
                <a href="https://github.com/anuvihas/Weather-Application/tree/394a38f24c58806c6021ce807f3928e68b82d2ff" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="w-100 btn btn-lg btn-outline-dark">Click Here</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {/* Project 4 */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Authentication Application</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Developed an authentication application using React and Firebase, allowing users to sign up, login, and manage their profiles securely.</li>
                </ul>
                <a href="https://github.com/anuvihas-sk/Authentication_App" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="w-100 btn btn-lg btn-outline-dark">Click Here</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Reddit Bot</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Created a Reddit bot using Python and the PRAW library. This bot automates tasks like posting, commenting, and voting on Reddit.</li>
                </ul>
                <a href="https://github.com/anuvihas-sk/Redditbot" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="w-100 btn btn-lg btn-outline-dark">Click Here</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Chat Application</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Developed a full-stack chat application using React, Node.js, and MongoDB. The app allows users to send real-time messages in chat rooms.</li>
                </ul>
                <a href="https://github.com/anuvihas-sk/chat-app" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="w-100 btn btn-lg btn-outline-dark">Click Here</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
