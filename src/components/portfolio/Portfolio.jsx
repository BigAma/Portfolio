import React from 'react'

import './portfolio.css'

import Project from './Project'

import Img from '../../assets/bg.jpg'


const Portfolio = () => {
  return (
    <div id='portfolio' className='container container__portfolio'>
        <h1>Portfolio</h1>
        <h2 className='portfolio__tilte'>Mes projets</h2>
        <div className='portfolio__wrapper'>
            <Project img={Img} projectName="Mon premier projet" projectDesc="ici je fais quelques chose de assez bien"/>
            <Project img={Img} projectName="Mon deuxieme projet" projectDesc="ici je fais quelques chose de plutot pas mal"/>
            <Project img={Img} projectName="Mon troisieme projet" projectDesc="et la je fais quelques chose d'incroyable'" />
        </div>
    </div>
  )
}

export default Portfolio