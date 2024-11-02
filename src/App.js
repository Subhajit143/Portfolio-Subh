import React from 'react'
import "./App.css"
import Header from "../src/components/Header.jsx"
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Services from './components/Services.jsx'
import Qualification from './components/Qualification.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
  <>
  <Header/>
  <main className='main'>
      <Home />
      <About />
      <Skills/> 
      <Services/>
      <Qualification/>
      <Work/>
      <Contact/>
      <Footer/>
      

  </main>
  </>
  )
}

export default App