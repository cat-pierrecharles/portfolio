import React from 'react'

export default function Jobs(props) {
  return (
    <div>
      <h1 className='h4 color-septenary'>{props.role}</h1>
      <h2 className='h6'>{props.name}</h2>
      <p className='small'>{props.date}</p>
      <ul className='list-group'>
        {props.desc.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  )
}