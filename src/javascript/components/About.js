import React from 'react'
import '../../stylesheets/About.scss'

const About = () => {
  return (
    <div className='container pt-5 px-5'>
          <div className='mb-5'>
            <h1 className='about'>A bit about me</h1>
          </div>
          <p>
          Hello! I'm Pierre, a Computer Science student based in London, who enjoys building and designing apps. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. Before starting my third year at university, I spent a year working at Holiday Extras as a front end developer specialising in JavaScript and React where I worked on a wide variety of interesting and meaningful projects on a daily basis. Here are a few technologies I've been working with recently:
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
  )
}

export default About