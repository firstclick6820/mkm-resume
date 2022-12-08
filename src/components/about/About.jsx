import React from 'react'
import './about.css';


// Import Images
import PROFILE1 from '../../assets/images/PROFILE1.png';
import PROFILE2 from '../../assets/images/PROFILE2.png';
import PROFILE3 from '../../assets/images/PROFILE3.png';
import PROFILE4 from '../../assets/images/PROFILE4.jpg'
// Import react Icons
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';



// Import Custom Components
import ANIMATION from '../../components/general/ANIMATION'

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
                Results-oriented and Energetic professional with 7 years of experience and proven knowledge of Cost Management, General Accountant, Business Administration, Production, and Business Operations.  Apart from my Professional career, I am a self-taught Python Developer, Web Developer, Digital Marketing specialist, and GUI designer.
                </p>

                {/* Link to the contact page */}
                <a className="btn glow-on-hover" href='#contact' > Let's Talk</a>
            </div>
        </dic>
    </section>
  )
}

export default About