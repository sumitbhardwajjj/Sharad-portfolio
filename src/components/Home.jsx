import React from 'react'
import '../styles/Home.css'
import Navbar from './Navbar'

 

const Home = () => {


  return (
   <div>
     <Navbar/>
   <div className='home'>
   <div className='header'>
    <h2>Video Editor <b>Sharad Rai</b><br /><span> Contact no. +91 9136360356 </span></h2>
    <div className='icons-name'>
      <img src="after-effects.png" alt="" />
      <img src="illustrator.png" alt="" />
      <img src="youtube.png" alt="" />
      <img src="photoshop.png" alt="" />
    </div>
    <button className='contact' onClick={()=>{document.getElementById('Contacts').scrollIntoView({behavior:'smooth'})}}>Contact Me</button>
    <button className='download'>Download CV</button>
  </div>
    <div className='head'>
      <img src="im.jpg" alt="" />
      </div>
    </div>
   
   </div>
  )
}

export default Home
