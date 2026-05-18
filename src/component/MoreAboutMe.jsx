import React, { useContext, useEffect, useRef } from 'react'
import download from "../assets/about/download.png"
import thorfinn from "../assets/about/about.jpeg"
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
       {code:'CSS'},{code:'ACCESIBILITY'},{code:'JAVASCRIPT'},{code:'NODEJS'},{code:'SOCKET.IO'},{code:'TYPESCRIPT'}
    ]
    const EXP2 = [ {code:'TAILWIND CSS'},{code:'HTML'},{code:'GITHUB'},{code:'REACT'},{code:'REDIS'},{code:'MONGO DB'},]
  return (
    <div className='container w-11/12 mx-auto py-5'>
        <div className='space-y-10'>
            <div ref={about2Ref}  className=' flex flex-col gap-10 md:gap-0 md:flex-row pb-5 md:py-10 items-center md:items-start ' > 
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
                            Beyond writing clean, efficient code,
                        </p>
                        {/* what i do */}
                        <span>
                            <p className='text-[16px] text-[hsla(0,0%,78%,1)] font-light manrope  md:min-w-full'>
                                 I bring an invaluable administrative edge to my work. With a proven track record of managing educational office operations, I excel at scheduling, meticulous recordkeeping, high-level event coordination, and strategic stakeholder communication. This background instills a deep commitment to detail, structure, and organizational efficiency. By combining technical architecture with administrative precision, I don't just build software—I build sustainable digital ecosystems tailored to meet exact operational needs.
                            </p>
                        </span>
                        {/* btn/links */}
                        <span className='flex gap-3 py-5 items-center w-full'>
                            <a 
                                href="/Aboderin_Timileyin_CV.docx" // Path points directly to the public folder root
                                download="Aboderin_Timileyin_CV.docx" // Forces browser to download instead of opening it
                                className='bg-[hsla(72,72%,70%,1)] hover:bg-[hsla(72,100%,94%,1)] text-black font-semibold text-sm md:text-lg text-nowrap manrope cursor-pointer px-4 py-3 md:px-6 md:py-3 rounded-full inline-flex gap-3 items-center justify-center transition-colors duration-200 decoration-none'
                                >
                                <span>DOWNLOAD RESUME</span>
                                <span className='p-1.5 bg-black rounded-full flex items-center justify-center shrink-0'> 
                                    <img 
                                    src={download} 
                                    alt="Download Icon" 
                                    className='w-3 h-3 md:w-4 md:h-4 object-contain brightness-0 invert'
                                    />
                                </span>
                                </a>
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
                    <img src={thorfinn} alt="" className='rounded-md min-w-full '/>
                </span>
            </div>
        </div>



        {/* MY CAPABILITIES */}
        <div className='flex flex-col md:flex-row gap-5 md:py-10'>
            <div ref={work2Ref} className='w-full '>
                <h2 className='BebasNeue text-4xl md:text-5xl '>MY CAPABILITIES</h2>
            </div>

            <div className='w-full flex flex-col gap-5'>
                <p className='text-[16px] text-[hsla(0,0%,78%,1)] font-light'>
                   I am always looking for ways to improve, optimize, and expand my skillset to tackle more complex challenges. By combining technical architecture, administrative precision, and a relentless pursuit of learning, I don't just build software—I build sustainable, future-proof digital ecosystems tailored to meet exact operational needs.
                </p>

                <div className='flex flex-col md:flex-col-reverse gap-2 text-[16px]'>
                    <div className='grid grid-cols-[70px_minmax(100px,1fr)_1fr] md:grid-cols-3  gap-1 text-nowrap'>
                    {
                        EXP.map((xp)=>(
                            <div className='py-1 px-1 rounded-full border-[2px] w-auto border-gray-800 text-center'><p>{xp.code}</p></div>
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
