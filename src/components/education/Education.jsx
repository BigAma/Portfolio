import React, { useState } from 'react'

import './education.css'

const Education = () => {
  let resume = <h1>Hounoudr</h1>
  let skills = "Mes skills"

  const [Text, setText ] = useState(resume)

  return (
    <div id='education' className='container container__education'>
        <h1 className='title'>Education</h1>
        <div className='resume-wrapper'>
          <div className='resume-left-menu'>
            <div className='resume-action-btn-div'><button onClick={() => setText(resume)} className='resume-action-btn resumebtn1'>Resume</button></div>
            <div className='resume-action-btn-div'><button onClick={() => setText(skills)} className='resume-action-btn resumebtn2'>Skills</button></div>
          </div>
          <div className='resume-right-info'>
            <p>{Text}</p>
          </div>
        </div>
    </div>
  )
}

export default Education