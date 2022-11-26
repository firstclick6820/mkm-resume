import React from 'react'
import './about.css';


// Import Images
import PROFILE1 from '../../assets/images/PROFILE1.png';
import PROFILE2 from '../../assets/images/PROFILE2.png';
import PROFILE3 from '../../assets/images/PROFILE3.png';
// Import react Icons
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id="about">

        <h5>Get To Know</h5>
        <h2>About Me</h2>


        <dic className="container about__container">
            {/* About Container First Item */}
            <div className="about__me">
                <div className="about__me__image">
                  <img src={PROFILE3} alt="About Me" /> 
                </div>
            </div>


            {/* About Container Second Item */}
            <div className="about__content">

                {/* About Content Cards */}
                <div className="about__cards">
                  {/* About Content First Card */}
                  <article className="about__card">
                      <FaAward className="about__icon"/>
                      <h5>Experience</h5>
                      <p>3+ Years Working Experience</p>
                  </article>

                  {/* About Content Second Card */}
                  <article className="about__card">
                      <FiUsers className="about__icon"/>
                      <h5>Clients</h5>
                      <p>300+ Clients</p>
                  </article>

                  {/* About Content Third Card */}
                  <article className="about__card">
                      <VscFolderLibrary className="about__icon"/>
                      <h5>Projects</h5>
                      <p>80+ completed projects</p>
                  </article>

                </div>



                {/* About Content Text */}
                <p>About Me Something Goes here.</p>

                {/* Link to the contact page */}
                <a className="btn btn-primary" href='#contact' > Let's Talk</a>
            </div>
        </dic>
    </section>
  )
}

export default About