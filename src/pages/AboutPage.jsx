import React from 'react'
import MoreAboutMe from '../component/MoreAboutMe'
import Nav from '../component/Nav'
import Exp from '../component/Exp'
import Connent from '../component/Connent'

const AboutPage = () => {
  return (
    <div className='py-3'>
      <Nav/>
      <MoreAboutMe/>
      <Exp/>
      <Connent/>
    </div>
  )
}

export default AboutPage
