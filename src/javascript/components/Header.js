import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../../stylesheets/Header.scss'

export default function Header() {
  return (
    <div className='fluid-container menu mb-5'>
      <nav>
        <ul className='nav-links p-0 m-0'>
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={0} duration={500}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500}>About</Link>
          <Link activeClass='active' to='experience' spy={true} smooth={true} offset={0} duration={500}>Experience</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
        </ul>
      </nav>
    </div>
  )

}