import React from 'react'
import './app.css'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Education from './components/education/Education'

const App = () => {
  return (
    <>
      <div className="main_container">
          <Header />
          <Portfolio />
          <Education />
          <Nav />
          <Footer />
      </div>
    </>
  )
}

export default App