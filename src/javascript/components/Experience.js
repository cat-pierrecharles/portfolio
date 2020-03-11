import React from 'react'
import '../../stylesheets/Experience.scss'
import Tabs from './Tabs'
import Pane from './Pane'

const Experience = () => {
  return (
    <div className='container pt-5 px-5'>
      <h1 className='about mb-5'>Place I have worked in</h1>
      <div className='row'>
        <div className='col-lg-7 col-md-6 col-sm-12'>
          <Tabs>
            <Pane label='tab1'>
              <div>Content for tab 1</div>
            </Pane>
            <Pane label='tab2'>
              <div>Content for tab 2</div>
            </Pane>
            <Pane label='tab3'>
              <div>Content for tab 3</div>
            </Pane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Experience