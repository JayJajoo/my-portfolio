import React from 'react'
import './about.css'
import myImage from '../../assets/IMG_2496.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>MS in Data Science<br /><i>Northeastern University, Boston</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>4.00</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Machine Learning</li>
                      <li>NLP</li>
                      <li>Generative AI</li>
                      <li>Data Engineering</li>
                      <li>Cloud Practitioner</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            I am a <b>Master’s in Data Science student at Northeastern University</b>, with a strong foundation in machine learning, deep learning, 
            data engineering, and cloud computing. Passionate about leveraging data to solve real-world challenges, I have hands-on experience 
            in predictive modeling, big data processing, and deploying scalable solutions on cloud platforms like AWS and Snowflake. With 
            expertise in data pipelines, distributed systems, and cloud-based architectures, I am eager to contribute to innovative projects 
            and collaborate with industry professionals. A quick learner with a keen eye for detail, I am committed to driving efficiency, accuracy, 
            and scalability in data-driven decision-making.
            </p>

          </div>
      </div>
    </section>
  )
}

export default About