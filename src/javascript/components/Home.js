import React from 'react'
import '../../stylesheets/Home.scss'

const Home = () => {
  return (
    <div className='container'>
      <h1 className='intro mb-4'>Hi, my name is</h1>
      <h2 className='title'>Pierre Charles</h2>
      <h3 className='short-bio mr-5'>I build <span className='typer' id='main' data-words=' creative, innovative, stylish' data-delay='150' data-delay='150'></span> applications for the web</h3>
      <div>
        <p className='description mt-5'>
          I am a front-end developer from London currently working as an IT Consultant at the Kent IT Consultancy. Outside of work, I am finishing my final year in Computer Science at the University of Kent in Canterbury.
        </p>
      </div>
    </div>
  )
}

export default Home