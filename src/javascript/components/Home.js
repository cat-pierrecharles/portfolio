import React from 'react'
import '../../stylesheets/Home.scss'
import cv from '../../assets/cv.pdf'

const Home = () => {
  return (
    <div className='container pt-5 px-5'>
      <div className='main'>
        <h1 className='title'>Pierre Charles</h1>
        <h2 className='short-bio mr-5'>I build <span className='typer changing-span' id='main' data-words=' creative, innovative, stylish' data-delay='150'></span> <br />applications for the web</h2>
        <div>
          <p className='description mt-5'>
            I am a front-end developer from London currently working as an IT Consultant at the Kent IT Consultancy. Outside of work, I am finishing my final year in Computer Science at the University of Kent in Canterbury.
            </p>
        </div>
          <a href={cv}>Download my CV</a>
      </div>
    </div>
  )
}

export default Home