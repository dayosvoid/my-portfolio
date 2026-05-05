import React, { useContext } from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import FeaturedProject from '../component/FeaturedProject'
import About from '../component/About'
import Connent from '../component/Connent'
import { IoSunnySharp } from 'react-icons/io5'
import { ThemeContext } from '../context/ThemeContext'
import { FaMoon } from 'react-icons/fa'



const HomePage = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div id={theme} className='py-3 relative'>
        <Nav/>
        <Hero/>
        <FeaturedProject/>
        <About/>
          <button onClick={()=>toggleTheme()} className='fixed text-white bottom-4 right-4 bg-black p-2 rounded-full'>{theme == "light" ? <FaMoon size={24} color='white'/> : <IoSunnySharp size={24}/>}</button>
        <Connent/>
    </div>
  )
}

export default HomePage
