import React from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import FeaturedProject from '../component/FeaturedProject'
import About from '../component/About'
import Connent from '../component/Connent'


const HomePage = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <FeaturedProject/>
        <About/>
        <Connent/>
    </div>
  )
}

export default HomePage
