import React from 'react'
import { Link } from 'react-scroll'
import '../../stylesheets/Navbar.scss'

export default function Navbar() {
  return (
    <div className='fluid-container menu'>
      <nav>
        <div className='logo'>
          <h4>pierre charles</h4>
        </div>
        <ul className='nav-links p-3 m-3'>
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={0} duration={500}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500}>About</Link>
          <Link activeClass='active' to='experience' spy={true} smooth={true} offset={0} duration={500}>Experience</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
        </ul>
      </nav>
    </div>
  )
}