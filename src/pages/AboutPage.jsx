import React, { useEffect } from 'react'
import MoreAboutMe from '../component/MoreAboutMe'
import Exp from '../component/Exp'
import Connent from '../component/Connent'
import AboutNav from '../component/AboutNav'

const AboutPage = () => {
  // to scroll to the top of rendering page
  useEffect(() => {
  window.scrollTo(0, 0);
}, [])
  return (
    <div className='py-3'>
      <AboutNav/>
      <MoreAboutMe/>
      <Exp/>
      <Connent/>
    </div>
  )
}

export default AboutPage
