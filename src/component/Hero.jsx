import React from 'react'
import linkin from '../assets/hero/linkin.png'
import github from '../assets/hero/github.png'
import { ArrowUpRight } from 'lucide-react'
import thorfinn from "../assets/hero/thorfinn.jpg"

const Hero = () => {
  return (
    <div className='container w-11/12 mx-auto '>
      <div className=' flex flex-col gap-10 md:flex-row py-5 md:items-center ' > 
        {/* all text and button */}
        <div className='flex flex-col gap-4'>
            {/* name */}
            <span>
                <p className='BebasNeue text-4xl md:text-6xl'>HI, I AM <br />ADEDAYO ABODERIN.</p>
            </span>
            {/* what i do */}
            <span className='md:w-[70%]'>
                <p className='text-sm md:text-lg font-light manrope'>
                    A Nigerian based  developer passionate about building accessible and user friendly websites.
                </p>
            </span>
            {/* btn/links */}
            <span className='flex gap-3 items-center'>
                <button className='bg-[hsla(72,72%,70%,1)] px-2 py-1 flex gap-3 items-center rounded-full text-black text-sm manrope'>CONTACT ME
                    <span className='p-2 bg-black rounded-full text-black'><ArrowUpRight className='size-[20px] text-white'/></span>
                </button>
                {/* link in */}
                <span className='bg-[hsla(0,0%,13%,1)] p-2.5 rounded-full'>
                    <a href="https://www.linkedin.com/in/adedayo-a-70443a36b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                        <img src={linkin} alt="" className='size-[20px]'/>
                    </a>
                </span>
                {/* gitHub */}
                <span className='bg-[hsla(0,0%,13%,1)] p-2.5 rounded-full'>
                    <a href="https://www.linkedin.com/in/adedayo-a-70443a36b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                        <img src={github} alt="" className='size-[24px]'/>
                    </a>
                </span>
            </span>
            
        </div>
        {/* img */}
        <div>
            <span className='rounded-md'>
                <img src={thorfinn} alt="" className='rounded-md'/>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
