import React from 'react'

import {MyModal1, MyModal2} from './MyModal'

function Project(props) {
  return (
    <div className='portfolio__item'>
        <div>
            <img className="portfolio-project-img" src={props.img} height="300px" alt='Project Overview'></img>
        </div>
        <div className='portfolioitem-desc__container'>
            <h5>{props.projectName}</h5>
            <p>{props.projectDesc}</p>

            {props.projectName==="Hel" ? <MyModal1 /> : <MyModal2/> }
        </div>
    </div>
  )
}

export default Project