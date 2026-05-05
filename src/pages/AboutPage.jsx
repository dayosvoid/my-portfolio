import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import MoreAboutMe from '../component/MoreAboutMe'
import Exp from '../component/Exp'
import Connent from '../component/Connent'
import AboutNav from '../component/AboutNav'

const AboutPage = () => {
  // to scroll to the top of rendering page
  useEffect(() => {
  window.scrollTo(0, 0);
}, [])

const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div id={theme} className='py-3'>
      <AboutNav/>
      <MoreAboutMe/>
      <Exp/>
      <Connent/>
    </div>
  )
}

export default AboutPage
