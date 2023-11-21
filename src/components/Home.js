import React from 'react'
import './css/Home.css'
import Aselection from './Aselection.js'

const Home = () => {
  return (
    <>
      <div id="welcomeMsg"><center>Welcome to Pet Heaven Society!</center></div>
      <div className="bodyContainer">
        <Aselection/>
        
      </div>
    </>
  )
}

export default Home