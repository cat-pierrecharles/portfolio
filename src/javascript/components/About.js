import React from 'react'
import '../../stylesheets/About.scss'
import profilePicture from '../../assets/profilePicture.jpg'

const About = () => {
  return (
    <div className='container pt-5 px-5'>
      <h1 className='about mb-5'>A bit about me</h1>
      <div className='row'>
        <div className='col-md-7'>
          <p>Hello there! I'm Pierre, a third year Computer Science student based in Canterbury, Kent. I enjoy building and designing apps with a strong focus in UX and UI.</p>
          <p>Before starting my third year at university, I spent a year working at Holiday Extras as a front end developer specialising in JavaScript and React where I worked on a wide variety of interesting projects.</p>
          <ul className='pt-4'>
            <li>JavaScript</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Express</li>
          </ul>
        </div>
        <div className='col-md-5'>
          <img src={profilePicture}></img>
        </div>
      </div>
    </div>
    )
  }
  
  export default About