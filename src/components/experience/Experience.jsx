
// Import CSS File
import './experience.css';

// Import React components
import { useEffect, useState } from 'react';


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
        <h5 className="animate-charcter">Working History</h5>
        <h2 className="animationClass">Professional Working Traks</h2>


        <div className="container working__Expereience__wrapper">

              <article className="single__work_container">
                  <div className="work__details">
                      <small>August_2022 - June_2022 </small>
                      <h2>Purchase Manager</h2>
                      <p>Diamond Packing & Filling Factory</p>
                      <p>Dubai, UAE.</p>
                  </div>

                  <div className="work__responsibilites">
                  <h2>Summary</h2>

                  <p>Manage all accounting transactions
                    Prepare budget forecasts
                    Publish financial statements in time
                    Handle monthly, quarterly and annual closings
                    Reconcile accounts payable and receivable
                    Ensure timely bank payments
                    Compute taxes and prepare tax returns
                    Manage balance sheets and profit/loss statements
                    Report on the company’s financial health and liquidity
                    Audit financial transactions and documents
                    Reinforce financial data confidentiality and conduct database backups when necessary
                    Comply with financial policies and regulations
                    </p>

                  </div>
              </article>

              <article className="single__work_container">
                  <div className="work__details">
                      <small>August_2022 - June_2022 </small>
                      <h2>Purchase Manager</h2>
                      <p>Diamond Packing & Filling Factory</p>
                      <p>Dubai, UAE.</p>
                  </div>

                  <div className="work__responsibilites">
                  <h2>Summary</h2>

                  <p>Manage all accounting transactions
                    Prepare budget forecasts
                    Publish financial statements in time
                    Handle monthly, quarterly and annual closings
                    Reconcile accounts payable and receivable
                    Ensure timely bank payments
                    Compute taxes and prepare tax returns
                    Manage balance sheets and profit/loss statements
                    Report on the company’s financial health and liquidity
                    Audit financial transactions and documents
                    Reinforce financial data confidentiality and conduct database backups when necessary
                    Comply with financial policies and regulations
                    </p>
                    
                  </div>
              </article>


              <article className="single__work_container">
                  <div className="work__details">
                      <small>August_2022 - June_2022 </small>
                      <h2>Purchase Manager</h2>
                      <p>Diamond Packing & Filling Factory</p>
                      <p>Dubai, UAE.</p>
                  </div>

                  <div className="work__responsibilites">
                  <h2>Summary</h2>

                  <p>Manage all accounting transactions
                    Prepare budget forecasts
                    Publish financial statements in time
                    Handle monthly, quarterly and annual closings
                    Reconcile accounts payable and receivable
                    Ensure timely bank payments
                    Compute taxes and prepare tax returns
                    Manage balance sheets and profit/loss statements
                    Report on the company’s financial health and liquidity
                    Audit financial transactions and documents
                    Reinforce financial data confidentiality and conduct database backups when necessary
                    Comply with financial policies and regulations
                    </p>
                    
                  </div>
              </article>

              <article className="single__work_container">
                  <div className="work__details">
                      <small>August_2022 - June_2022 </small>
                      <h2>Purchase Manager</h2>
                      <p>Diamond Packing & Filling Factory</p>
                      <p>Dubai, UAE.</p>
                  </div>

                  <div className="work__responsibilites">
                  <h2>Summary</h2>

                  <p>Manage all accounting transactions
                    Prepare budget forecasts
                    Publish financial statements in time
                    Handle monthly, quarterly and annual closings
                    Reconcile accounts payable and receivable
                    Ensure timely bank payments
                    Compute taxes and prepare tax returns
                    Manage balance sheets and profit/loss statements
                    Report on the company’s financial health and liquidity
                    Audit financial transactions and documents
                    Reinforce financial data confidentiality and conduct database backups when necessary
                    Comply with financial policies and regulations
                    </p>
                    
                  </div>
              </article>
        </div>
          

       
    </section>
    </>
  )
}

export default Experience