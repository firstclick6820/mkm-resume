import React from 'react'
import './about.css';



import PROFILE4 from '../../assets/images/PROFILE4.jpg'

// Import react Icons
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';




const About = () => {
  return (
    <section id="about">
     
        <h5 className='animate-charcter'>Get To Know</h5>
        <h2 className="animationClass">About Me</h2>


        <dic className="container about__container">

            {/* About Container First Item */}
            <div className="about__me">
                <div className="about__me__image">
                  <img src={PROFILE4} alt="About Me" /> 
                </div>
            </div>


            {/* About Container Second Item */}
            <div className="about__content">

                {/* About Content Cards */}
                <div className="about__cards">
                  {/* About Content First Card */}
                  <article className="about__card ">
                      <FaAward className="about__icon"/>
                      <h5>Experience</h5>
                      <p>7+ Years Working Experience</p>
                  </article>

                  {/* About Content Second Card */}
                  <article className="about__card">
                      <FiUsers className="about__icon"/>
                      <h5>Clients</h5>
                      <p>15+ Happy Clients</p>
                  </article>

                  {/* About Content Third Card */}
                  <article className="about__card">
                      <VscFolderLibrary className="about__icon"/>
                      <h5>Projects</h5>
                      <p>25+ completed projects</p>
                  </article>

                </div>



                {/* About Content Text */}
                <p>
                A results-oriented professional with 7 years of experience in accounting, business administration, production, and business operations. Seeking a role as an accountant, administrator, business operations specialist, or personal assistant. Proficient in cost management, financial and business principles, and strong in analytical and organizational skills. Looking to contribute my skills and expertise to a growing organization.
                </p>

                {/* Link to the contact page */}
                <a className="btn glow-on-hover" href='#contact' > Let's Talk</a>
            </div>
        </dic>
    </section>
  )
}

export default About