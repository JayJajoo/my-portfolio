import React from 'react';
import './myprojects.css';
import { projectsData } from './projectsData';

const MyProjects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {projectsData.map((project) => {
          const isClickable = project.link && project.link.length > 0;
          const Wrapper = isClickable ? 'a' : 'div';

          return (
            <Wrapper
              key={project.id}
              href={isClickable ? project.link : undefined}
              target="_blank"
              rel="noreferrer"
              className={`portfolio__item ${isClickable ? 'clickable-card' : 'disabled-card'}`}
            >
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
              </div>

              {/* Short Description */}
              {project.description && (
                <p className="project-description">{project.description}</p>
              )}
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default MyProjects;
