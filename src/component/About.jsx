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

            <h1 className='hidden md:flex text-2xl '>
                I am a Fullstack developer based in nigeria. Has a Political science and Education background  . 
            </h1>
            {/* moblie */}
            <p className=' text-[16px] md:hidden'>
                I am a Fullstack developer based in Nigeria looking for exciting opportunities. Has a Political science and Education background . Likes to focus on accessibility and data structure when developing .    
            </p>
            {/* desktop */}
            <p className=' md:text-lg font-light md:flex hidden'>
                I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility and data structure when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Nodejs and a bit of Designing. While I am not programming, I enjoy playing football, chess and making art. Learning more to improve skill.
            </p>

            <span className='text-[hsla(72,72%,70%,1)] font-bold hover:text-[18px] text-[18px] md:text-lg '>
                <Link to='/about'><p className=' text-nowrap border-b-[2px] border-[hsla(72,72%,70%,1)] hover:text-[20px] transition-all duration-500 ease-out delay-200 w-[140px] md:w-[150px]'>MORE ABOUT ME</p></Link> 
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
