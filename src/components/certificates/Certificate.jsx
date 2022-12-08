// Import React Components
import React from 'react';

// Import Css Styles
import './certificate.css'



const Certificate = () => {
  return (
    <section id="certificate">

      <h5 className='animate-charcter'>What I Achived</h5>
      <h2 className="animationClass">Certificates</h2>

        <div className="container certificate__box">


          <div className="certificate__card">
            
              <div className="contentBx">
                <h2>Python Crash Course</h2>

                <div className="size">
                  <h3>By: LinkedIn</h3>
                </div>

                <div className="color">
                  <h3>Issued Date:</h3>
                  <span>August 2022</span>
                </div>

                <div className="color">
                  <h3>Expiry Date:</h3>
                  <span>August 2022</span>
                </div>
              
              </div>

          </div>

          <div className="certificate__card">
            
              <div className="contentBx">
                <h2>Python Crash Course</h2>

                <div className="size">
                  <h3>By: LinkedIn</h3>
                </div>

                <div className="color">
                  <h3>Issued Date:</h3>
                  <span>August 2022</span>
                </div>

                <div className="color">
                  <h3>Expiry Date:</h3>
                  <span>August 2022</span>
                </div>
              
              </div>

          </div>

          <div className="certificate__card">
            
            <div className="contentBx">
              <h2>Python Crash Course</h2>

              <div className="size">
                <h3>By: LinkedIn</h3>
              </div>

              <div className="color">
                <h3>Issued Date:</h3>
                <span>August 2022</span>
              </div>

              <div className="color">
                <h3>Expiry Date:</h3>
                <span>August 2022</span>
              </div>
            
            </div>

        </div>

        </div>
    </section>
  )
}

export default Certificate;