
// Import CSS File
import './experience.css';


// Import React Icons

import { BsPatchCheckFill } from 'react-icons/bs';




// import Dummy Data
import { frontend_experience } from '../../assets/data/EXPERIENCE';
import { backend_experience } from '../../assets/data/EXPERIENCE';

const Experience = () => {
    




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
        <h5>The Skills I Have</h5>
        <h2>My Experiences</h2>


        <div className="container experience__container">
        </div>
    </section>
    </>
  )
}

export default Experience