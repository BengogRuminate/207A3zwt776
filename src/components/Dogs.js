import React from 'react'
import ResourceDog from './ResourceDog'
import './css/animals.css'
import InfoBar from './Infobar'

const Dogs = () => {
  return (
    <>
    <InfoBar/>
    <h2 className='animalHeader'><center>Dogs</center></h2>
    <div className='imgContainer'>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
      <ResourceDog/>
    </div>
    
    </>
  )
}

export default Dogs