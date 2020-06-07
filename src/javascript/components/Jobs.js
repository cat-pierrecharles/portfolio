import React from 'react'

export default function Jobs(props) {
  return (
    <div>
      <h1 className='h5 color-primary font-weight-bold'>{props.role}</h1>
      <h2 className='h6 color-tertiary'>{props.name}</h2>
      <p className='small'>{props.date}</p>
      <div className='px-3'>
        <ul className='list-group'>
          {props.desc.map(e => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}