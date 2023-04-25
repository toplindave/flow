import React from 'react'
import Scroll from '../../components/scroll.js/Scroll'
import './contact.css'
import Contactform from './contactform/Contactform'

function Contact() {
  return (
    <div className='contact'>
       <section>
        <h1 className='dev' >
          GET IN TOUCH, WE'D LOVE TO HEAR FROM YOU!
        </h1>
        
        <p>
          If you're interested in working with us or would just like to discuss some of your ideas, please complete the form below, send us an email or give us a call. We will answer you as soon as possible.
        </p>
        <Scroll/>
      </section>
      <section>
        <Contactform/>
      </section>
    </div>
  )
}

export default Contact