import React, {useRef} from 'react'
import './contact.css';

import emailjs from 'emailjs-com';

// Import React Icons
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a3udpha', 'template_j7freao', form.current, 'W7nDObKvKP2OODXLn')


      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

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
            <h5>firstclick6820@gmail.com</h5>
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

        <form className="" ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Fullname...' required/>
              <input type='email' name='email' placeholder='Email...' required/>
              <textarea name='message' rows="7" placeholder='Message' required></textarea>

              <button type="sumbit" className="btn btn-primary">Send</button>
        </form>
      </div>

      <div className="space_bottom"></div>
      <div className="space_bottom"></div>
      <div className="space_bottom"></div>
    </section>
  )
}

export default Contact