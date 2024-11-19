import React, { useEffect } from 'react';

const ProjectsSection = () => {
  const projects = [
    {

      link: "https://github.com/anuvihas-sk/chat-app",
      image: "/images/chat.jpeg" // Project image
    },
    {

      image: "/images/qr.jpeg" // Project image
    },
    {
      link: "https://github.com/anuvihas/Todo-List-Application",
      image: "/images/todo.jpeg" // Project image
    },
    {
      link: "https://github.com/anuvihas/Weather-Application/tree/394a38f24c58806c6021ce807f3928e68b82d2ff",
      image: "/images/weather.jpeg" // Project image
    },
    {
      link: "https://github.com/anuvihas-sk/Redditbot",
      image: "/images/reddit.jpeg" // Project image
    },

  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      // Initialize Bootstrap Carousel
      new window.bootstrap.Carousel(document.querySelector('#carouselExampleCaptions'));
    }
  }, []);

  return (
    <section
      id="projects"
      style={{
        background: 'linear-gradient(to right, #e3f2fd, #bbdefb)',
        padding: '4rem 1rem',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: 'auto' }}>
        <div className="text-center mb-4">
          <h2 className="display-4 fw-bold" style={{ color: '#0d47a1' }}>
            Projects
          </h2>
          <p className="fs-5 text-secondary">Showcasing my latest work</p>
        </div>

        {/* Bootstrap Carousel */}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-label={`Slide ${index + 1}`}
                aria-current={index === 0 ? 'true' : undefined}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
  {projects.map((project, index) => (
    <div
      key={index}
      className={`carousel-item ${index === 0 ? 'active' : ''}`}
    >
      <img
        src={project.image}
        className="d-block w-100"
        alt={`Project ${index + 1}`}
        style={{ height: '400px', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="carousel-caption d-none d-md-block text-center">
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
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
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button
  className="carousel-control-next custom-control-next"
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
