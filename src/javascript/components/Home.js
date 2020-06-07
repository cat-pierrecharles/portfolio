import React, { useEffect } from 'react'
import '../../stylesheets/Home.scss'
import cv from '../../assets/cv.pdf'
import sr from '../ScrollReveal'

export default function Home() {
  useEffect(() => {
    sr.func.reveal('.home', sr.config)
  })

  return (
    <div className='home container full-height mt-0'>
      <div className='main'>
        <h1 className='title'>Pierre Charles</h1>
        <h2 className='short-bio mr-5'>I build <span className='typer changing-span' id='main' data-words=' creative, innovative, stylish' data-delay='50'></span> <br />applications for the web</h2>
        <div>
          <p className='description mt-5'>
            I am a front-end developer from London currently working as an IT Consultant at the Kent IT Consultancy. Outside of work, I am finishing my final year in Computer Science at the University of Kent in Canterbury.
          </p>
        </div>
        <a className='cv' href={cv} target='_blank'>View my CV</a>
      </div>
    </div>
  )
}