import React from 'react';
import './services.css'


// Import React Icons
import {BiCheck} from 'react-icons/bi';
import ANIMATION from '../general/ANIMATION';

const Services = () => {

    return (
        <section id='services'>
                <h5 className='animate-charcter'>What I Offer</h5>
                <h2 className="animationClass">Services</h2>

                <div className="container services__container">
                    {/* First Article  */}
                    <article className="service">
                        <div className="service__head">
                            <h3>UI/UX Design</h3>
                        </div>

                        <ul className="service__list">
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>Creating Awesome Web Apps, Mobile Apps and GUI Apps.</p>
                            </li>
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>Creative Apps Design Using Vue Js, Angular Js, React Js, React Native and Vanila Javascript</p>
                            </li>
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>Fronted Design Using Bootsrap, Tailwind, Material UI, Bulma and CSS3</p>
                            </li>
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>GUI APPs Desing Using PyQt5 and Tkinter</p>
                            </li>
                           
                          
                        </ul>
                    </article>
                    {/* End of the Article 1*/}

                    {/* Second Article */}
                    <article className="service">
                        <div className="service__head">
                            <h3>Design Creation</h3>
                        </div>

                        <ul className="service__list">
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>LOGO Design, Banner Design, Image Edit, Video Design, Sound Edit.</p>
                            </li>
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>Using Newest Technologies Such as Adobe Photoshop, Adobe Premire, Adobe After Effect, Adobe InDesign, Adobe Audition.</p>
                            </li>
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>Creating Awesome Design Using Online Tools and Technologies</p>
                            </li>
                          
                        </ul>
                    </article>
                    {/* End of the Article 2*/}


                    {/* Third Article  */}
                    <article className="service">
                        <div className="service__head">
                            <h3>Web Development</h3>
                        </div>

                        <ul className="service__list">
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>Fronted Web Development using Newest Technologies.</p>
                            </li>
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>Backend Web Development Using PHP, Laravel, Python, Django and Flask.</p>
                            </li>
                            <li>
                                <BiCheck  className="service__list__icon"/>
                                <p>API Development Using Node Js, Express Js and Django.</p>
                            </li> 
                           
                          
                        </ul>
                    </article>
                    {/* End of the Article  3*/}
                </div>
        </section>
    )
    
}

export default Services;

