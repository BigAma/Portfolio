import React from 'react'

import './header.css'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import image from '../../assets/BigAma.png'


const Header = () => {
    return (
        <div id='top' className="container container__header">
            <h5>Hello, I'm</h5>
            <h1>Amareh Ali Barreh</h1>
            <h5 className='text-light'>Fullstack Developper</h5>
            <CTA />
            <HeaderSocials />
            <div className='img-header__container'>
                <img src={image} height="500px" alt='BigAma'></img>
            </div>
        </div>

    )
}

export default Header
