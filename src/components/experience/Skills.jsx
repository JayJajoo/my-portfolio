import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { skillsData } from './skillsData'; // Import the data file

function Skills() {
  return (
    <div>
      <div className="container experience__container">
        {skillsData.map((category) => (
          <div key={category.id} className="experience__frontend">
            <h3>{category.category}</h3>

            <div className="experience__content">
              {category.skills.map((skill, index) => (
                <article key={index} className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;