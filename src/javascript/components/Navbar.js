import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../../stylesheets/Navbar.scss'

export default function Navbar() {
	const [navActive, setNavActive] = useState(false)
	return (
		<div>
			<nav className={`nav ${navActive ? 'active' : ''}`}>
				<div
					className={`hamburger ${navActive ? 'toggle' : ''}`}
					onClick={() => {
						setNavActive(!navActive)
					}}
				>
					<div className='top-bar'></div>
					<div className='middle-bar'></div>
					<div className='bottom-bar'></div>
				</div>
				<ul className={`nav-ul ${navActive ? 'active' : ''}`}>
					<li
						onClick={() => {
							navActive && setNavActive(!navActive)
						}}
					>
						<Link
							activeClass='active'
							to='home'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							Home
						</Link>
					</li>
					<li
						onClick={() => {
							navActive && setNavActive(!navActive)
						}}
					>
						<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							About
						</Link>
					</li>
					<li
						onClick={() => {
							navActive && setNavActive(!navActive)
						}}
					>
						<Link
							onClick={() => {
								navActive ? setNavActive(!navActive) : null
							}}
							activeClass='active'
							to='experience'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							Experience
						</Link>
					</li>
					<li
						onClick={() => {
							navActive && setNavActive(!navActive)
						}}
					>
						<Link
							onClick={() => {
								navActive ? setNavActive(!navActive) : null
							}}
							activeClass='active'
							to='projects'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							Projects
						</Link>
					</li>
				</ul>
			</nav>
		</div>

		// <div className='fluid-container menu py-1'>
		//   <nav>
		//     <div className='logo ml-5'>
		//       <code className='color-tertiary'>&lt;pierreCharles &#47;&gt;</code>
		//     </div>
		//     <div className='spacer' />
		//     <ul className={navActive ? 'nav-links nav-active' : 'nav-links p-3 m-3 mr-5'}>
		//       <Link onClick={() => { navActive ? setNavActive(!navActive) : null }} activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500}>About</Link>
		//       <Link onClick={() => { navActive ? setNavActive(!navActive) : null }} activeClass='active' to='experience' spy={true} smooth={true} offset={0} duration={500}>Experience</Link>
		//       <Link onClick={() => { navActive ? setNavActive(!navActive) : null }} activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
		//       {/* <Link onClick={() => { navActive ? setNavActive(!navActive) : null }} activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={500}>Contact</Link> */}
		//     </ul>
		//     <div className={navActive ? 'mobile-menu toggle mr-3' : 'mobile-menu mr-3'} onClick={() => { setNavActive(!navActive) }}>
		//       <div className='top-bar'></div>
		//       <div className='middle-bar'></div>
		//       <div className='bottom-bar'></div>
		//     </div>
		//   </nav>
		// </div>
	)
}
