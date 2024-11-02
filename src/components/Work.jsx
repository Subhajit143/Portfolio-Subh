import React from 'react'
import "./work.css"
import Workslet from './Workslet'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Some of my work</span>
        <Workslet/>
    </section>
  )
}

export default Work