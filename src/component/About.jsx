import React, { useEffect,useRef,useContext } from 'react'
import thorfinn from '../assets/hero/thorfinn.jpg'
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
      <div ref={aboutRef} className='container w-11/12 mx-auto flex flex-col md:flex-row-reverse gap-5 md:py-10 md:pb-50 pb-3'>
        <div className='flex flex-col  gap-5 md:w-[50%]'>

            <h1 className='hidden md:flex text-2xl '>
                I am a front-end developer based in Sydney. Has Mechanical Engineering background. 
            </h1>
            {/* moblie */}
            <p className=' text-sm font-light md:hidden'>
                I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing.    
            </p>
            {/* desktop */}
            <p className=' text-sm md:text-lg font-light md:flex hidden'>
                I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
            </p>

            <span className='text-[hsla(72,72%,70%,1)]  text-[12px] md:text-lg '>
                <Link to='/about'><p className=' text-nowrap border-b-[2px] border-[hsla(72,72%,70%,1)] w-[20%]'>MORE ABOUT ME</p></Link> 
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
