import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../../stylesheets/Navbar.scss'

export default function Navbar() {
  const [navActive, setNavActive] = useState(false)
  return (
    <div className='fluid-container menu py-1'>
      <nav>
        <div className='logo ml-5'>
          <code className='color-tertiary'>&lt;pierreCharles &#47;&gt;</code>
        </div>
        <div className='spacer' />
        <ul className={navActive ? 'nav-links nav-active' : 'nav-links p-3 m-3 mr-3'}>
          <Link onClick={() => { navActive ? setNavActive(!navActive) : null }} activeClass='active' to='home' spy={true} smooth={true} offset={0} duration={500}>Home</Link>
          <Link onClick={() => { navActive ? setNavActive(!navActive) : null }} activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500}>About</Link>
          <Link onClick={() => { navActive ? setNavActive(!navActive) : null }} activeClass='active' to='experience' spy={true} smooth={true} offset={0} duration={500}>Experience</Link>
          <Link onClick={() => { navActive ? setNavActive(!navActive) : null }} activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
          <Link onClick={() => { navActive ? setNavActive(!navActive) : null }} activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
        </ul>
        <div className={navActive ? 'mobile-menu toggle mr-3' : 'mobile-menu mr-3'} onClick={() => { setNavActive(!navActive) }}>
          <div className='top-bar'></div>
          <div className='middle-bar'></div>
          <div className='bottom-bar'></div>
        </div>
      </nav>
    </div>
  )
}