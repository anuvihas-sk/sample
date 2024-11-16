import React, { useEffect, useRef, useState } from 'react';

const TitleSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      });
    }, { threshold: 0.5 });

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="title"
      className={`gradient-background ${inView ? 'fade-in' : ''}`}
      ref={sectionRef}
    >
      <div className="container col-xxl-8 px-4 pt-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img className="profile" src="/images/anuvihas.jpeg" alt="Anuvihas" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Anuvihas S K</h1>
            <p>Web Developer</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a 
                href="https://drive.google.com/file/d/1ORqZqYTOWThpKoFd8LoyXJuGJjAZDmbG/view?usp=sharing" 
                target="_blank" 
                download
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

export default TitleSection;
