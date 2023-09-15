import React from 'react'
import { Link } from 'react-router-dom'
import  BannerImage from '../../assets/pizza.jpeg';
import '../styles/Home.css';
const Home = () => {
  return (
    <div className='home' style={{backgroundImage : `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1> Pizza House </h1>
        <p> Pizza to fit all tastes </p>
        <Link to='/menu'>
          <button> Order New</button>   
        </Link>
      </div>
    </div>
  )
}

export default Home