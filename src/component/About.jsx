import React, { useEffect,useRef,useContext } from 'react'
import thorfinn from '../assets/hero/normal.jpg'
import { Link } from 'react-router-dom'
import {  ScrollContext } from '../context/Scroll'

const About = () => {
   const aboutRef = useRef(null);
      const { registerSectionRef } = useContext(ScrollContext);
      
      useEffect(() => {
          registerSectionRef('about', aboutRef);
      }, [registerSectionRef]);
  return (
    <div  className='border-y border-gray-700  '>
      <div ref={aboutRef} className='container w-11/12 mx-auto flex flex-col md:flex-row-reverse gap-14 md:py-10 md:pb-50 pb-3'>
        <div className='flex flex-col  gap-5 md:w-[50%]'>

            <h1 className='hidden md:flex text-3xl '>
                I am a Fullstack developer based in nigeria. Has a Political science and Education background  . 
            </h1>
            {/* moblie */}
            <p className=' text-[16px] text-[hsla(0,0%,78%,1)] md:hidden'>
                I am a Fullstack developer based in Nigeria looking for exciting opportunities. Has a Political science and Education background . Likes to focus on accessibility and data structure when developing .    
            </p>
            {/* desktop */}
            <p className=' md:text-lg  text-[hsla(0,0%,78%,1)] font-light md:flex hidden'>
                I am a front-end developer based in Nigeria looking for exciting opportunities. Has a Political science and Education background background. On the technical front, I craft robust, scalable, and responsive web applications from the ground up. Utilizing MongoDB, Express.js, React, and Node.js, alongside tools like TypeScript, Tailwind CSS, Redux Toolkit, and Redis, I design digital experiences that are as performant as they are user-centric.
            </p>

            <span className='text-[hsla(72,72%,70%,1)] border-b-4 w-full font-bold md:text-lg '>
                <Link to='/about'><p className=' text-nowrap border-[hsla(72,72%,70%,1)]  md:text-[25px] hover:text-[40px] transition-all duration-400 ease-in-out delay-100 w-[140px] md:w-[150px]'>VIEW MORE ABOUT ME...</p></Link> 
            </span>
            
        </div>

        <div className='md:w-[50%] text-8xl'>
            <img src={thorfinn} alt="" className='md:hidden rounded-md' />
            <h2 className='BebasNeue hidden md:flex'>ABOUT ME</h2>
        </div>

      </div>
    </div>
  )
}

export default About
