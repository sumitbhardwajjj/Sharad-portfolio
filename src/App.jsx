import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contacts from './components/contact'
import { Element } from 'react-scroll'
import Animation from './components/animation'

const App = () => {
  return (
    <div className='app'>
    <Element name='Home'  className='element'><Home/></Element>
    <Element name='About' className='element'><About/></Element>
    <Animation/>
    <Element name='Portfolio' className='element'><Portfolio/></Element>
    <Element name='Skills' className='element'><Skills/></Element>
    <Element id='Contacts' className='element'><Contacts/></Element>
    </div>
  )
}

export default App
