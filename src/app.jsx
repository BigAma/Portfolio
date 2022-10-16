import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <div className="main_container">
          <Header />
          <Portfolio />
          <Nav />
          <Footer />
      </div>
    </>
  )
}

export default App