import React from 'react'
import multiple from '../assets/multiplePizzas.jpeg'
import './styles/About.css';
const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage : `url(${multiple})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Our story began with a passion for creating the perfect slice of pizza. We believe that great pizza starts with the finest ingredients, a dash of creativity, and a whole lot of love. </p>
        </div>
    </div>
  )
}

export default About