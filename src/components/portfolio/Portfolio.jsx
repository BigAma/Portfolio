import React from 'react'

import './portfolio.css'

import Project from './Project'

import ImgProject1 from '../../assets/home-page.jpg'
import ImgProject2 from '../../assets/portfolio.jpg'
import ImgProject3 from '../../assets/deg-deg.jpg'
import ImgProject4 from '../../assets/lelionvert.jpg'

import {MyModal1, MyModal2} from './MyModal'

const Portfolio = () => {
  return (
    <div id='portfolio' className='container__portfolio'>
        <h1 className='title'>My Projects</h1>
        <div className='portfolio__wrapper'>
            <Project 
              img={ImgProject1}
              projectName="Hel"
              projectDesc="Platform for professional networking"
              modal={MyModal1}
            />
            <Project 
              img={ImgProject2}
              projectName="Portfolio"
              projectDesc="My Portfolio"
              modal={MyModal2} 
            />
        </div>
        <div className='portfolio__wrapper'>
            <Project 
              img={ImgProject3}
              projectName="DEG - DEG"
              projectDesc="E-commerce platform of sale and purchase"
            />
            <Project 
              img={ImgProject4}
              projectName="Le Lion Vert"
              projectDesc="Site of sale of natural food complement" 
            />
        </div>
    </div>
  )
}

export default Portfolio