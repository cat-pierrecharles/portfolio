import React, { useEffect } from 'react'
import sr from '../ScrollReveal'
import '../../stylesheets/About.scss'
import profilePicture from '../../assets/profile_picture.jpg'
import Tilt from 'react-tilt'

export default function About() {
  useEffect(() => {
    sr.func.reveal('.about', sr.config)
  })

  return (
    <div className='about height'>
      <h1 className='heading pb-5'>A little bit about me</h1>
      <div className='row'>
        <div className='col-lg-5 col-md-12 col-sm-12'>
          <div className='text-center img-bg'>
            <Tilt className='Tilt mb-5' options={{ max: '25', transition: true, scale: 1 }}>
              <div className='Tilt-inner'>
                <a className='git' href='http://www.github.com/Pierre-Charles/' target='_blank'><img className='profile-picture' src={profilePicture}></img></a>
              </div>
            </Tilt>
          </div>
        </div>
        <div className='col-lg-7 col-md-12 col-sm-12 text-justify'>
          <p>Hello there! I'm Pierre, a third year Computer Science with a Year in Industry student at the <a href='https://www.kent.ac.uk/' target='_blank'>University of Kent</a> based in Canterbury. I enjoy building and designing apps with a strong focus in UX and UI.</p>
          <p>Before starting my third year at university, I spent a year working at <a href='https://www.holidayextras.co.uk/' target='_blank'>Holiday Extras</a> as a Front End Developer specialising in JavaScript and React where I worked on a wide variety of interesting projects.</p>
          <p>Here are a few of the technical skills I gained when working on projects:</p>
          <div>
            <ul className='skills pt-4'>
              <li><i className='fas fa-feather-alt pr-2'></i>JavaScript</li>
              <li><i className='fas fa-feather-alt pr-2'></i>React</li>
              <li><i className='fas fa-feather-alt pr-2'></i>Express</li>
              <li><i className='fas fa-feather-alt pr-2'></i>Node.js</li>
              <li><i className='fas fa-feather-alt pr-2'></i>HTML</li>
              <li><i className='fas fa-feather-alt pr-2'></i>CSS</li>
              <li><i className='fas fa-feather-alt pr-2'></i>Git</li>
              <li><i className='fas fa-feather-alt pr-2'></i>UNIX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}