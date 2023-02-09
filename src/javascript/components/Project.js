import React from 'react'
import '../../stylesheets/Project.scss'

export default function Project(props) {
  const params = props.params
  return (
    <div className='my-4'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <div>
            {params.web ?
              <a href={params.web} target='_blank'>
                <figure className='tint rounded'>
                  <img className='img-project img-fluid rounded' src={params.img} />
                </figure>
              </a> :
              <a href={params.git}>
                <figure className='tint rounded'>
                  <img className='img-project img-fluid rounded' src={params.img} />
                </figure>
              </a>
            }
          </div>
        </div>
        <div className='col-sm-12 col-md-6 py-2'>
          <h1 className='h4 color-secondary'>{params.name}</h1>
          <div className='my-3'>
            {params.git && <a className='h5 mr-3' href={params.git} target='_blank'><i className='fab fa-github' /></a>}
            {params.web && <a className='h5 mr-3' href={params.web} target='_blank'><i className='fas fa-external-link-alt' /></a>}
          </div>
          <p className='my-2'>{params.desc}</p>
          <div className='my-3 d-flex justify-content-start'>
            {params.tech.map(tech => (
              <small className='tech rounded py-2 px-3 mr-2 color-secondary' key={tech}>{tech}</small>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}