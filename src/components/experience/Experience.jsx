import React from 'react'
import { experiences } from './experiencesData.js';
import Skills from './Skills';
import Exp from './Exp.jsx';


const Experience = () => {
  return (
    <section>
        <h2 id="experience">Experience</h2>
        <div className="experiences-wrapper">
          {experiences.map(exp => (
            <Exp key={exp.id} {...exp} />              
          ))}
        </div>
        <h2 id="skills">Skills</h2>
        <Skills></Skills>
    </section>
  )
}

export default Experience