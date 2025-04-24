import React from 'react'
import './myprojects.css'
import { projectsData } from './projectsData'; // Adjust path as needed

const MyProjects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {projectsData.map((project) => (
          <article key={project.id} className="portfolio__item">
            {/* Image Section */}
            {project.image && (
              <div className="portfolio__item-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            {/* Title and Tech Stack */}
            <h3>{project.title}</h3>
            <div>
              <small className="text-light">{project.techStack}</small>
              <br />
              <small className="text-light">{project.duration}</small>
            </div>
            {/* Responsibilities */}
            <ul className="experience-list">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>

            {/* Links */}
            <div className="portfolio__item-cta">
              {project.link.length > 0 ? (
                <a
                  href={project.link} // Use the first link
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Open Project
                </a>
              ) : (
                <button className="btn" disabled>
                  No Link Available
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};


export default MyProjects;