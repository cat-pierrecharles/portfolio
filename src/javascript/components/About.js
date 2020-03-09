import React from 'react'
import '../../stylesheets/About.scss'

const About = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='pt-5 px-5'>
          <div className='mb-5'>
            <span className='about'>
            <img className='about-emoji' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/man-raising-hand-type-5_1f64b-1f3fe-200d-2642-fe0f.png'></img>
            A bit about me
          </span>
          </div>
          <p>
          Hello! I'm Pierre, a Computer Science student based in London, who enjoys building and designing apps. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. Before starting my third year at university, I spent a year working at Holiday Extras as a front end developer at Holiday Extras specialising in JavaScript and React where I worked on a wide variety of interesting and meaningful projects on a daily basis. Here are a few technologies I've been working with recently:
          </p>
          <ul className='pt-4'>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>HTML</li>
            <li>SCSS</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About