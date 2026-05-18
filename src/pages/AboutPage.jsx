import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import MoreAboutMe from '../component/MoreAboutMe'
import Exp from '../component/Exp'
import Connent from '../component/Connent'
import AboutNav from '../component/AboutNav'
import { FaMoon } from 'react-icons/fa'
import { IoSunnySharp } from 'react-icons/io5'

const AboutPage = () => {
  // to scroll to the top of rendering page
  const {theme,setTheme} = useContext(ThemeContext)
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  useEffect(() => {
  window.scrollTo(0, 0);
}, [])

  return (
    <div id={theme} className='py-3'>
      <AboutNav/>
      <MoreAboutMe/>
      <Exp/>
      <Connent/>
      <button onClick={()=>toggleTheme()} className='fixed text-white bottom-4 right-4 bg-black p-2 rounded-full'>{theme == "light" ? <FaMoon size={24} color='white'/> : <IoSunnySharp size={24}/>}</button>
    </div>
  )
}

export default AboutPage
