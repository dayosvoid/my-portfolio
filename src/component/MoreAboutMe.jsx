import React, { useContext, useEffect, useRef } from 'react'
import download from "../assets/about/download.png"
import thorfinn from "../assets/hero/me.jpg"
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {  ScrollContext } from '../context/Scroll'


const MoreAboutMe = () => {

     const about2Ref = useRef(null);
     
              const { registerSectionRef } = useContext(ScrollContext);
              useEffect(() => {
                  registerSectionRef('about2', about2Ref);
              }, [registerSectionRef]);


    const work2Ref = useRef(null);   
              useEffect(() => {
                  registerSectionRef('work2', work2Ref);
              }, [registerSectionRef]);


    const EXP = [
       {code:'CSS'},{code:'ACCESIBILITY'},{code:'JAVASCRIPT'}
    ]
    const EXP2 = [ {code:'TAILWIND CSS'},{code:'HTML'},{code:'GITHUB'},{code:'REACT'}]
  return (
    <div className='container w-11/12 mx-auto py-5'>
        <div className='space-y-10'>
            <div ref={about2Ref}  className=' flex flex-col gap-10 md:gap-0 md:flex-row pb-5 md:py-10 md:items-center md:items-start ' > 
                    <div className='w-full  '>
                        <h2 className='BebasNeue hidden md:flex text-6xl '>ABOUT ME</h2>
                    </div>
                    {/* all text and button */}
                    <div className='flex flex-col gap-4 w-full'>
                        {/* name */}
                        <span>
                            <p className='BebasNeue md:hidden text-4xl '>ABOUT ME</p>
                        </span>
                        {/* priorty of what i do */}
                        <p className='text-xl md:text-2xl md:font-semibold md:min-w-full'>
                                I am a Fullstack developer based in Nigeria looking for exciting opportunities. Has a Political science and Education background.
                        </p>
                        {/* what i do */}
                        <span>
                            <p className='text-[16px] font-light manrope  md:min-w-full'>
                                I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility and data structure when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Nodejs and a bit of Designing. While I am not programming, I enjoy playing football, chess and making art. Learning more to improve skill.
                            </p>
                        </span>
                        {/* btn/links */}
                        <span className='flex gap-3 py-5 items-center w-full'>
                            <button className='bg-[hsla(72,72%,70%,1)] px-3 py-1.5 md:py-3 md:font-semibold md:text-lg flex gap-3 items-center rounded-full text-black text-[12px] font-semibold  text-sm text-nowrap  manrope cursor-pointer hover:bg-[hsla(72,100%,94%,1.00)]'>DOWNLOAD RESUME
                                <span className='p-2 md:p-1 bg-black rounded-full text-black'> <img src={download} alt="" className='w-[12px] text-white md:hidden'/></span>
                            </button>
                            {/* link in */}
                            <span className='bg-[hsla(0,0%,13%,1)] p-3 flex rounded-full cursor-pointer hover:bg-[hsla(72,63%,78%,.50)]'>
                                <a href="https://www.linkedin.com/in/adedayo-a-70443a36b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                    <FaLinkedinIn className='size-[20px] md:size-[30px] text-[hsla(72,72%,70%,1)]'/>
                                </a>
                            </span>
                            {/* gitHub */}
                            <span className='bg-[hsla(0,0%,13%,1)] p-3 flex rounded-full cursor-pointer hover:bg-[hsla(72,63%,78%,.50)]'>
                                <a href="https://github.com/dayosvoid">
                                    <FaGithub className='size-[20px] md:size-[30px] text-[hsla(72,72%,70%,1)]'/>
                                </a>
                            </span>
                        </span>
                        
                    </div>
                    {/* img */}
                    <div>
                        <span className='rounded-md md:hidden'>
                            <img src={thorfinn} alt="" className='rounded-md'/>
                        </span>
                    </div>
                </div>
                <div>
                <span className='rounded-md hidden md:flex py-5 '>
                    <img src={thorfinn} alt="" className='rounded-md min-w-full h-180'/>
                </span>
            </div>
        </div>



        {/* MY CAPABILITIES */}
        <div className='flex flex-col md:flex-row gap-5 md:py-10'>
            <div ref={work2Ref} className='w-full '>
                <h2 className='BebasNeue text-4xl md:text-5xl '>MY CAPABILITIES</h2>
            </div>

            <div className='w-full flex flex-col gap-5'>
                <p className='text-[16px] font-light'>
                    I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. 
                </p>

                <div className='flex flex-col md:flex-col-reverse gap-2 text-[16px]'>
                    <div className='grid grid-cols-[70px_minmax(100px,1fr)_1fr] md:grid-cols-3  gap-1 text-nowrap'>
                    {
                        EXP.map((xp)=>(
                            <span className='py-1 px-1 rounded-full border-[2px] w-auto border-gray-800 text-center'>{xp.code}</span>
                        ))
                    }
                    </div>

                    <div className='grid text-[16px] grid-cols-[minmax(150px,1fr)_minmax(100px,1fr)] md:grid-cols-[1fr_60px_80px_80px]  gap-2 text-nowrap'>
                        {
                        EXP2.map((xp)=>(
                            <span className=' py-1 px-1 md: rounded-full border-[2px] w-auto border-gray-800 text-center'>{xp.code}</span>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MoreAboutMe
