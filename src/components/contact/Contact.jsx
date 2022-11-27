import React from 'react'
import './contact.css';



// Import React Icons
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs';
import ANIMATION from '../general/ANIMATION';

const Contact = () => {
  return (
    <section id='contact'>

      <h5 className='animate-charcter'>Get In Touch</h5>
      <h2 className="animationClass">Contact ME</h2>

      <div className="container contact__container">

          {/* Contact Options Section */}
        <div className="contact__options">

          {/* Email */}
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>mkm@gmail.com</h5>
            <a href="mailto:mohammadkhalidmomand@gmail.com">Send an email</a>
          </article>


          {/* Messanger */}
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option__icon"/>
            <h4>Messanger</h4>
            <h5>Facebook</h5>
            <a href="http://m.me/mohkhalidmomand">Chat me</a>
          </article>


          {/* WhatsApp */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>WhatsApp</h4>
            <h5>+971-527546685</h5>
            <a href="https://api.whatsapp.com/send?phone+971527546685">WhatsApp me</a>
          </article>


        </div>

        <form className="">
              <input type='text' name='name' placeholder='Fullname...' required/>
              <input type='email' name='email' placeholder='Email...' required/>
              <textarea name='message' rows="7" placeholder='Message' required></textarea>

              <button type="sumbit" className="btn btn-primary">Send</button>
        </form>
      </div>

      <div className="space_bottom"></div>
    </section>
  )
}

export default Contact