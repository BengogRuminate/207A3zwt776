import React from 'react'
import ResourceCat from './ResourceCat.js'
import './css/animals.css'
import InfoBar from './Infobar.js'

const Cats = () => {
  return (
    <>
    <InfoBar/>
    <h2 className='animalHeader'><center>Cats</center></h2>
    <div className='imgContainer'>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
      <ResourceCat/>
    </div>
    </>
  )
}

export default Cats