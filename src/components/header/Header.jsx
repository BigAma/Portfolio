import React from 'react'

import './header.css'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import image from '../../assets/BigAma.png'
import imageBG from '../../assets/houndour.png'
import { Typewriter } from 'react-simple-typewriter'


const Header = () => {
    return (
        <div id='top' className="container container__header">
            <h5>Hello, I'm</h5>
            <h1>Amareh Ali Barreh</h1>
            <h5 className='text-light'>
                <Typewriter 
                    words={['Fullstack Developper', 'Designer', 'UI-UX Dev', 'Self-taught Programmer']}
                    loop='true'
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h5>
            <CTA />
            <HeaderSocials />
            <div className='img-header__container'>
                <img className="image-bg-profil" src={imageBG} alt="" />
                <img className="image-me-profil" src={image} alt='BigAma'></img>
            </div>
        </div>

    )
}

export default Header
