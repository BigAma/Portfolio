import React from 'react'

import './education.css'

const Education = () => {
  return (
    <div id='education' className='container container__education'>
        <h1>Education</h1>
        <div className='resume-wrapper'>
          <div className='resume-left-menu'>
            <div className='resume-action-btn'><button>Resume</button></div>
            <div className='resume-action-btn'><button>Skills</button></div>
          </div>
          <div className='resume-right-info'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus voluptatem aut exercitationem amet! Dolores cupiditate sequi dolorum sunt, alias error atque voluptas in sint. Asperiores </p>
          </div>
        </div>
    </div>
  )
}

export default Education