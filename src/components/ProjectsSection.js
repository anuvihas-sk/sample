import React, { useEffect } from 'react';

const ProjectsSection = () => {
  const projects = [

    {
      // title: "QR Code Generator",
      // description:
      //   "Developed a QR Code generator application using Node.js to provide an efficient way to create and manage QR codes. This application allows users to generate and download QR codes in various formats such as PNG, JPEG, and SVG.",
      link: "https://github.com/anuvihas/QR-Code-Generator",
      image: "/images/qr.jpeg" // Project image
    },
    {
      // title: "To-do List Application",
      // description:
      //   "Developed a To-Do application using ReactJS to demonstrate fundamental React concepts. This application allows users to create, edit, and delete tasks.",
      link: "https://github.com/anuvihas/Todo-List-Application",
      image: "/images/todo.jpeg" // Project image
    },
    {
      // title: "Weather Application",
      // description:
      //   "Developed a Weather application using Node.js with Express.js to fetch weather data. This application allows users to search for weather data for any city in the world.",
      link: "https://github.com/anuvihas/Weather-Application/tree/394a38f24c58806c6021ce807f3928e68b82d2ff",
      image: "/images/weather.jpeg" // Project image
    },
    {
      // title: "Reddit Bot",
      // description:
      //   "Created a Reddit bot using Python and the PRAW library. This bot automates tasks like posting, commenting, and voting on Reddit.",
      link: "https://github.com/anuvihas-sk/Redditbot",
      image: "/images/reddit.jpeg" // Project image
    },
    {
      // title: "Chat Application",
      // description:
      //   "Developed a full-stack chat application using React, Node.js, and MongoDB. The app allows users to send real-time messages in chat rooms.",
      link: "https://github.com/anuvihas-sk/chat-app",
      image: "/images/chat.jpeg" // Project image
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
                style={{
                  backgroundImage: `url(${project.image})`, // Dynamically set background image
                  backgroundSize: 'cover', // Ensure image covers the full item
                  backgroundPosition: 'center', // Center the image
                  height: '400px', // Set height of the carousel item
                }}
              >
                <div className="carousel-caption d-none d-md-block text-center">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev btn btn-primary "
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next btn btn-primary"
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
