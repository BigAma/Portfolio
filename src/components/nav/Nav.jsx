import React from 'react'
import './nav.css'
import { BsHouseFill } from 'react-icons/bs'
import { BsPersonPlusFill } from 'react-icons/bs'
import { BsFillLayersFill } from 'react-icons/bs'
import { BsFillPenFill } from 'react-icons/bs'

const Nav = () => {
  return (
    <div className="container__nav">
        <a href='#top'> <BsHouseFill /> </a>
        <a href='#portfolio'> <BsFillLayersFill /> </a>
        <a href='#education'> <BsFillPenFill /> </a>
        <a href='#contact'> <BsPersonPlusFill /> </a>
    </div>
  )
}

export default Nav