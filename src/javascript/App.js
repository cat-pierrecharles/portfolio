import React, { Component } from 'react'
import Home from './components/Home'
import Particle from './components/Particle'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Particle />
      <Home />
      <About />
    </div>
  )
}

export default App