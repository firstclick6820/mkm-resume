import React from 'react'
import './portfolio.css'





// Import dummy data
import portfolio from "../../assets/data/PORTFOLIO"



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className='animate-charcter'>My Recent Works</h5>
      <h2 className="animationClass">Portfolio</h2>


      <div className="container portfolio__container">

            {portfolio.map(item => (
                <article className="portfolio__item" key={item.title}>
                  <div className="portfolio__item__image">
                      <img src={item.image} alt="Portfolio" />
                  </div>
                  <h3>{item.title}</h3>
                  

                  <div className="portfolio__item__cta">
                    <a href={item.github} className='btn'>Github</a>
                    <a href={item.demo} className='btn btn-primary'>Live Demo</a>
                  </div>

                </article>
            ))}

          
      </div>
    </section>
  )
}

export default Portfolio