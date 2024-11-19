import React, { useEffect } from "react";

const ProjectsSection = () => {
  const projects = [
    {
      link: "https://github.com/anuvihas-sk/chat-app",
      image: "/images/chat.jpeg",
      title: "Chat App",
      description: "A real-time chat application using React and Firebase.",
    },
    {
      link: "https://github.com/anuvihas-sk/QR-Code-Generator",
      image: "/images/qr.jpeg",
      title: "QR Code Generator",
      description: "A simple QR Code generator built with React.",
    },
    {
      link: "https://github.com/anuvihas/Todo-List-Application",
      image: "/images/todo.jpeg",
      title: "To-Do List App",
      description: "Manage tasks efficiently with this minimal to-do app.",
    },
    {
      link: "https://github.com/anuvihas/Weather-Application/tree/394a38f24c58806c6021ce807f3928e68b82d2ff",
      image: "/images/weather.jpeg",
      title: "Weather App",
      description: "A weather forecast app using APIs and React.",
    },
    {
      link: "https://github.com/anuvihas-sk/Redditbot",
      image: "/images/reddit.jpeg",
      title: "Reddit Bot",
      description: "Automated Reddit post handler using Python.",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      // Initialize Bootstrap Carousel
      new window.bootstrap.Carousel(
        document.querySelector("#carouselExampleCaptions")
      );
    }
  }, []);

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

        {/* Bootstrap Carousel */}
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
                aria-current={index === 0 ? "true" : undefined}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(${project.image}) no-repeat center center`,
                  backgroundSize: "cover",
                }}
              >
                <div className="carousel-caption text-light">
                  <h3 className="fw-bold">{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-lg"
                      style={{
                        backgroundColor: "#333",
                        borderColor: "#333",
                        borderRadius: "25px",
                      }}
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev custom-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next custom-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
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
