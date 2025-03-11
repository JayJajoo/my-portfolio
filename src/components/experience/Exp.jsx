import React from 'react';
import './exp.css';


const Exp = ({ company, position, startYear, endYear, responsibilities 
}) => {
  return (
    <div className="experience-container">
      <div className="timeline-column">
        <div className="dumbbell">
          <div className="dumbbell-ball start-ball">{startYear}</div>
          <div className="dumbbell-line"></div>
          <div className="dumbbell-ball end-ball">{endYear}</div>
        </div>
      </div>
      <div className="content-column">
        <h2 className="company-name">{company}</h2>
        <h3 className="position-title">{position}</h3>
        <ul className="experience-list">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exp;