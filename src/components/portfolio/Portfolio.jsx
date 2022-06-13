import React from 'react'

import './portfolio.css'

import Project from './Project'

import ImgProject1 from '../../assets/home-page.jpg'
import ImgProject2 from '../../assets/portfolio.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className='container__portfolio'>
        <h1 className='title'>My Projects</h1>
        <div className='portfolio__wrapper row'>
            <Project 
              img={ImgProject1}
              projectName="Hel"
              projectDesc="Platform for professional networking"
            />
            <Project 
              img={ImgProject2}
              projectName="Portfolio"
              projectDesc="My Portfolio" 
            />
        </div>
    </div>
  )
}

export default Portfolio