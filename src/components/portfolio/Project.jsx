import React from 'react'

import { BsAspectRatioFill } from 'react-icons/bs'

function Project(props) {
  return (
    <div className='portfolio__item'>
        <div>
            <img className="portfolio-project-img" src={props.img} height="300px" alt='Project Overview'></img>
        </div>
        <div className='portfolioitem-desc__container'>
            <h5>{props.projectName}</h5>
            <p>{props.projectDesc}</p>
            <a className="btn btn-primary btn-portfolioitem" href='#quelquepart'><BsAspectRatioFill /></a>
        </div>
    </div>
  )
}

export default Project