import React from 'react'
import '../../stylesheets/Social.scss'

const Social = () => {
  return (
    <div className='pl-2'>
      <ul>
        <li><a href='https://github.com/Pierre-Charles' target='_blank'><i className='fab fa-github'/></a></li>
        <li><a href='https://www.linkedin.com/in/pcharles97/' target='_blank'><i className='fab fa-linkedin'/></a></li>
        <li><a href='https://www.instagram.com/_pierrecharles/' target='_blank'><i className='fab fa-instagram'/></a></li>
        <li><a href='https://twitter.com/PierreCharles97' target='_blank'><i className='fab fa-twitter'/></a></li>
        <li><a href='mailto:p.charles0501@gmail.com'><i className='fas fa-envelope'/></a></li>
      </ul>
    </div>
  )
}

export default Social