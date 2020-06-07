import React, { useState, useEffect } from 'react'
import workExperience from '../workExperience'
import Job from './Jobs'
import sr from '../ScrollReveal'
import '../../stylesheets/Experience.scss'

export default function Experience() {
  const jobName = Object.keys(workExperience)
  const [job, setJob] = useState(jobName[0])

  useEffect(() => {
    sr.func.reveal('.experience', sr.config)
  })

  return (
    <div className='experience full-height'>
      <h1 className='heading py-5'>Places I've worked in</h1>
      <div className='row'>
        <div className='col-sm-12 col-md-3'>
          <ul className='list-group'>
            {jobName.map(name => {
              return (
                <li key={name} className='d-flex flex-column color-senary mr-3 link' onClick={() => { setJob(name) }}>{name}</li>
              )
            })}
          </ul>
        </div>
        <div className='col-sm-12 col-md-9'>
          {job === jobName[0] && <Job name={workExperience[job].name} role={workExperience[job].role} date={workExperience[job].date} desc={workExperience[job].desc} />}
          {job === jobName[1] && <Job name={workExperience[job].name} role={workExperience[job].role} date={workExperience[job].date} desc={workExperience[job].desc} />}
          {job === jobName[2] && <Job name={workExperience[job].name} role={workExperience[job].role} date={workExperience[job].date} desc={workExperience[job].desc} />}
        </div>
      </div>
    </div>
  )
}

