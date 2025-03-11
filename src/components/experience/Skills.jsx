import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

function Skills() {
  return (
    <div>
                <div className="container experience__container">
        
                  <div className="experience__frontend">
                    <h3>Data Enginenering</h3>
        
                    <div className="experience__content">
        
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Python</h4>
                          <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>SQL</h4>
                          <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Data Analysis</h4>
                          <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>AWS</h4>
                          <small className='text-light'>Intermediate</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Snowflakes</h4>
                          <small className='text-light'>Intermediate</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>ETL</h4>
                          <small className='text-light'>Intermediate</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Dsshboarding</h4>
                          <small className='text-light'>Intermediate</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>FLask</h4>
                          <small className='text-light'>Intermediate</small>
                        </div>
                      </article>
                    </div>
                  </div>
                  {/* End of frontend part */}
        
                  <div className="experience__backend">
                    <h3>Machine Learning</h3>
                    <div className="experience__content">
        
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Pytorch</h4>
                          <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Tensorflow</h4>
                          <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Py-Spark</h4>
                          <small className='text-light'>Intermediate</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Pandas & Numpy</h4>
                          <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Neural Networks</h4>
                          <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>NLP</h4>
                          <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>GEN-AI</h4>
                          <small className='text-light'>Experienced</small>
                        </div>
                      </article>
                      <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>Web Scrapping</h4>
                          <small className='text-light'>Intermediate</small>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Skills