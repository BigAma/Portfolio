import React from 'react'

import {MyModal1, MyModal2, MyModal3, MyModal4} from './MyModal'

function Project(props) {

  const getModal = () => {
    if (props.projectName === "Hel"){
      console.log(props.projectName)
      return <MyModal1/>}
    
    if (props.projectName === "Portfolio"){
      console.log(props.projectName)
      return <MyModal2/>}

    if (props.projectName === "DEG - DEG"){
      console.log(props.projectName)
      return <MyModal3/>}
    
    if (props.projectName === "Le Lion Vert"){
      console.log(props.projectName)
      return <MyModal4/>}
  }

  return (
    <div className='portfolio__item'>
        <div>
            <img className="portfolio-project-img" src={props.img} height="300px" alt='Project Overview'></img>
        </div>
        <div className='portfolioitem-desc__container'>
            <h5>{props.projectName}</h5>
            <p>{props.projectDesc}</p>
            {getModal()}
        </div>
    </div>
  )
}

export default Project