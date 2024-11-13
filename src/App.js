import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const TitleSection = () => {
  return (
    <section id="title" className="gradient-background">
      <div className="container col-xxl-8 px-4 pt-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img className="profile" src="images/anuvihas.jpeg" alt="Anuvihas" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Anuvihas S K</h1>
            <p>Web Developer</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="https://drive.google.com/file/d/1ORqZqYTOWThpKoFd8LoyXJuGJjAZDmbG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-outline-light btn-lg px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LinksSection = () => {
  return (
    <section id="links">
      <div className="my-1">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h2 className="text-body-emphasis">"Opportunities don't happen, you create them"</h2>
            <img className="profile" src="images/anuvihas.jpeg" alt="Anuvihas S K" />
            <p className="col-lg-8 mx-auto lead mt-2">India</p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <a href="https://www.linkedin.com/in/anuvihas" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="Black" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </div>
              <div className="col-lg-3 col-sm-12">
                <a href="https://github.com/anuvihas" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="Black" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
              <div className="col-lg-3 col-sm-12">
                <a href="mailto:anuvihas2005@gmail.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="Black" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 className="display-4 fw-normal">Projects</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <ProjectCard
            title="To-do list application"
            description="Developed a To-Do application using ReactJS to demonstrate fundamental React concepts. This application allows users to create, edit, and delete tasks."
            link="https://github.com/anuvihas/Todo-List-Application"
          />
          <ProjectCard
            title="QR code generator"
            description="Developed a QR Code generator application using Node.js to provide an efficient way to create and manage QR codes."
            link="https://github.com/anuvihas/QR-Code-Generator"
          />
          <ProjectCard
            title="Weather Application"
            description="Developed a Weather application using Node.js with Express.js and API to fetch weather data."
            link="https://github.com/anuvihas/Weather-Application/tree/394a38f24c58806c6021ce807f3928e68b82d2ff"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section id="contact" className="gradient-background">
      <div className="container">
        <footer className="py-3 my-6">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#title" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#links" className="nav-link px-2 text-body-secondary">About</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link px-2 text-body-secondary">Projects</a></li>
          </ul>
          <p className="text-center text-body-secondary">© Anuvihas</p>
        </footer>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <TitleSection />
      <LinksSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
