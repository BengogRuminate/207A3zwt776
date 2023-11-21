import React from 'react'
import CompanyDesc from './CompanyDesc'
import './css/About.css'
import InfoBar from './Infobar'
import AdoptForm from './Adoptform'


const About = () => {
  return (
    <>
    <InfoBar/>
    <div className='descriptionContainer'>
      <h2>About Us</h2>
      <CompanyDesc/>
      <h2><center>Our Motto</center></h2>
      <div id="motto1"><center>Your adoption, Our solution</center></div>
    </div>
    <div className='AFContainer'>
      <AdoptForm/>
    </div>
    </>
  )
}

export default About