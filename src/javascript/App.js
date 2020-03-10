import React, { Component } from 'react'
import Home from './components/Home'
import Particle from './components/Particle'
import About from './components/About'
import Experience from './components/Experience'

const App = () => {
  return (
    <div>
      <Particle />
      <Home />
      <About />
      {/* <Experience /> */}
    </div>
  )
}

export default App