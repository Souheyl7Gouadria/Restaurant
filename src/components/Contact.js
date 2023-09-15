import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import './styles/Contact.css';
const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage : `url(${PizzaLeft})`}}>

        </div>
        <div className='rightSide'>
          <h1>contact us</h1>
          <form id='contact-form' method='POST'>
            <label htmlFor='name'>Full Name : </label>
            <input name='name' placeholder='Enter your Full Name' type='text'/>
            <label htmlFor='email'>Email : </label>
            <input name='email' placeholder='Enter your Email' type='email'/>
            <label htmlFor='message'>Message</label>
            <textarea placeholder='Enter ...' rows='6'name='message'>  </textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
    </div>
  )
}

export default Contact;