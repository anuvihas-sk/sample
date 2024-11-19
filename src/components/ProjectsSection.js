import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ProjectsSection = () => {
  const projects = [
    {
      link: "https://github.com/anuvihas-sk/chat-app",
      image: "/images/chat.jpeg",
      // title: "Chat App",
      // description: "A real-time chat application using React and Firebase.",
    },
    {
      link: "https://github.com/anuvihas/QR-Code-Generator",
      image: "/images/qr.jpeg",
      // title: "QR Code Generator",
      // description: "A simple QR Code generator built with React.",
    },
    {
      link: "https://github.com/anuvihas/Todo-List-Application",
      image: "/images/todo.jpeg",
      // title: "To-Do List App",
      // description: "Manage tasks efficiently with this minimal to-do app.",
    },
    {
      link: "https://github.com/anuvihas/Weather-Application",
      image: "/images/weather.jpeg",
     // description: "A weather forecast app using APIs and React.",
    },
    {
      link: "https://github.com/anuvihas-sk/Redditbot",
      image: "/images/reddit.jpeg",
      // title: "Reddit Bot",
      // description: "Automated Reddit post handler using Python.",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "linear-gradient(to right, #e3f2fd, #bbdefb)",
        padding: "4rem 1rem",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "auto" }}>
        <div className="text-center mb-4">
          <h2 className="display-4 fw-bold" style={{ color: "#0d47a1" }}>
            Projects
          </h2>
          <p className="fs-5 text-secondary">Showcasing my latest work</p>
        </div>

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{
                  background: `url(${project.image}) no-repeat center center`,
                  backgroundSize: "cover",
                  height: "400px",
                }}
              >
                <div className="carousel-caption">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
