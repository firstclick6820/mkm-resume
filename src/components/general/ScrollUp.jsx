import React from 'react'

import '../../index.css';

//Import React Icons
import {TfiRocket} from 'react-icons/tfi'

const ScrollUp = () => {
  return (
    <div className='scrollup__container'>

        <a href="#home" className="scrollup__link">
            <TfiRocket className="scrollup__icon"/>
        </a>
    </div>
  )
}

export default ScrollUp