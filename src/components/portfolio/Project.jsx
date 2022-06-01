import React from 'react'

import { AiOutlineEye } from 'react-icons/ai'

function Project(props) {
  return (
    <div className='portfolio__item'>
        <div>
            <img src={props.img} height="300px" alt='Project Overview'></img>
        </div>
        <div>
            <h5>{props.projectName}</h5>
            <p>{props.projectDesc}</p>
            <a href='#quelquepart'><AiOutlineEye /></a>
        </div>
    </div>
  )
}

export default Project