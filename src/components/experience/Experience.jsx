
// Import CSS File
import './experience.css';

// Import React components
import { useEffect, useState } from 'react';


// Import React Icons

import { BsPatchCheckFill } from 'react-icons/bs';




// import Dummy Data
import { frontend_experience } from '../../assets/data/EXPERIENCE';
import { backend_experience } from '../../assets/data/EXPERIENCE';
import { working_experiences } from '../../assets/data/EXPERIENCE';


const Experience = () => {
  // var allTheData = document.querySelector('.summary').textContent.trim().split(',')
  // var separateList = '<ul>'
  // allTheData.forEach(function(value) {
  //    separateList += '<li>' + value + '</li>';
  // });
  // separateList += '</ul>';
  // document.querySelector(".commaSeparated").innerHTML = separateList;
    
  return (
    <>
    <section id="experience">
  


        <h5 className="animate-charcter">The Skills I Have</h5>
        <h2 className="animationClass">Web & Software Development</h2>


        <div className="container experience__container">
          <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">
                
                {frontend_experience.map((expr, id) => 
                  <article className="experience__details" key={id}>
                      <BsPatchCheckFill className="experience__details__icon" />
                      <div>
                        <h4>{expr.name}</h4>
                        <small className="text-light">{expr.level}</small>
                      </div>
                  </article>
                )}
              </div>
          </div>


          <div className="experience__backend">
              <h3>Backend Development</h3>

              <div className="experience__content">

                {backend_experience.map((expr, id) => 
                  <article className="experience__details" key={id}>
                      <BsPatchCheckFill className="experience__details__icon" />
                      <div>
                        <h4>{expr.name}</h4>
                        <small className="text-light">{expr.level}</small>
                      </div>
                  </article>
                )}
             
              </div>
          </div>
        </div>
    </section>
    <section id="experience">
        <h5 className="animate-charcter">Working History</h5>
        <h2 className="animationClass">Professional Working Traks</h2>


        <div className="container working__Expereience__wrapper">

             
              {working_experiences.map(work => 
                  <article className="single__work_container" key={work.id}>

                      <div className="work__details">
                          <small>{work.start_date} - {work.end_date}</small>
                          <h2>{work.position}</h2>
                          <p>{work.company}</p>
                          <p>{work.location}</p>
                      </div>


                      <div className="work__responsibilites">
                        <h2>Summary</h2>

                        
                        <code className="summary">{work.summary}</code>
                      </div>

                  </article>
              )}
             
        </div>
          

       
    </section>
    </>
  )
}

export default Experience