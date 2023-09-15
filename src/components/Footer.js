import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./styles/Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'> <InstagramIcon/> <LinkedInIcon/> <TwitterIcon/> </div>
        <p>
            &copy; 2023 PizzaSteeve.cpm
        </p>
    </div>
  )
}

export default Footer