import React from 'react'
import '../../stylesheets/Experience.scss'

const Experience = () => {
  return (
    <div className='container pt-5 px-5'>
      <h1 className='about mb-5'>Places I have worked in</h1>
      <div className='row'>
        <div className='col-12'>
        <p>Hello there! I'm Pierre, a third year Computer Science with a Year in Industry student at the <a href='https://www.kent.ac.uk/'>University of Kent</a> based in Canterbury. I enjoy building and designing apps with a strong focus in UX and UI.</p>
          <p>Before starting my third year at university, I spent a year working at <a href='https://www.holidayextras.co.uk/'>Holiday Extras</a> as a Front End Developer specialising in JavaScript and React where I worked on a wide variety of interesting projects.</p>
          <p>Here are a few of the technical skills I gained when working on projects:</p>
          <ul className='pt-4 fa-ul'>
            <li><span className='fa-li'><i className='fa fa-egg'></i></span>JavaScript</li>
            <li><span className='fa-li'><i className='fa fa-egg'></i></span>React</li>
            <li><span className='fa-li'><i className='fa fa-egg'></i></span>Express</li>
            <li><span className='fa-li'><i className='fa fa-egg'></i></span>NodeJS</li>
            <li><span className='fa-li'><i className='fa fa-egg'></i></span>HTML</li>
            <li><span className='fa-li'><i className='fa fa-egg'></i></span>CSS</li>
            <li><span className='fa-li'><i className='fa fa-egg'></i></span>Git</li>
            <li><span className='fa-li'><i className='fa fa-egg'></i></span>UNIX</li>
          </ul>
          
        </div>
      </div>
    </div>
    
  )
}

export default Experience