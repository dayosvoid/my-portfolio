import React from 'react'
import linkin from '../assets/hero/linkin.png'
import github from '../assets/hero/github.png'
import download from "../assets/about/download.png"
import thorfinn from "../assets/hero/thorfinn.jpg"


const MoreAboutMe = () => {
    const EXP = [
       {code:'CSS'},{code:'ACCESIBILITY'},{code:'JAVASCRIPT'}
    ]
    const EXP2 = [ {code:'TAILWIND CSS'},{code:'HTML'},{code:'GITHUB'},{code:'REACT'}]
  return (
    <div className='container w-11/12 mx-auto py-10'>
        <div className='space-y-10'>
            <div className=' flex flex-col gap-10 md:gap-0 md:flex-row py-5 md:py-15 md:items-center md:items-start ' > 
                    <div className='w-full '>
                        <h2 className='BebasNeue hidden md:flex text-6xl '>ABOUT ME</h2>
                    </div>
                    {/* all text and button */}
                    <div className='flex flex-col gap-4 w-full'>
                        {/* name */}
                        <span>
                            <p className='BebasNeue md:hidden text-4xl '>ABOUT ME</p>
                        </span>
                        {/* priorty of what i do */}
                        <p className='text-xl md:text-2xl md:min-w-full'>
                                I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background.
                        </p>
                        {/* what i do */}
                        <span>
                            <p className='text-sm font-light manrope  md:min-w-full'>
                                I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill
                            </p>
                        </span>
                        {/* btn/links */}
                        <span className='flex gap-3 items-center'>
                            <button className='bg-[hsla(72,72%,70%,1)] px-2 py-1 flex gap-3 items-center rounded-full text-black text-[12px]  md:text-sm text-nowrap  manrope cursor-pointer hover:bg-[hsla(72,63%,78%,1.00)]'>DOWNLOAD RESUME
                                <span className='p-2 bg-black rounded-full text-black'> <img src={download} alt="" className='size-[20px] text-white'/></span>
                            </button>
                            {/* link in */}
                            <span className='bg-[hsla(0,0%,13%,1)] p-2.5 rounded-full cursor-pointer hover:bg-[hsla(72,63%,78%,.50)]'>
                                <a href="#">
                                    <img src={linkin} alt="" className='max-size-[12px] md:size-[20px]'/>
                                </a>
                            </span>
                            {/* gitHub */}
                            <span className='bg-[hsla(0,0%,13%,1)] p-2.5 rounded-full cursor-pointer hover:bg-[hsla(72,63%,78%,.50)]'>
                                <a href="#">
                                    <img src={github} alt="" className='size-[12px] md:size-[20px]'/>
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
            <div className='w-full'>
                <h2 className='BebasNeue text-4xl md:text-5xl '>MY CAPABILITIES</h2>
            </div>

            <div className='w-full flex flex-col gap-5'>
                <p className='text-sm font-light'>
                    I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. 
                </p>

                <div className='flex flex-col md:flex-col-reverse gap-2 text-sm'>
                    <div className='grid grid-cols-[70px_minmax(100px,1fr)_1fr] md:grid-cols-3  gap-1 text-nowrap'>
                    {
                        EXP.map((xp)=>(
                            <span className='py-1 px-1 rounded-full border-[2px] w-auto border-gray-800 text-center'>{xp.code}</span>
                        ))
                    }
                    </div>

                    <div className='grid grid-cols-[minmax(150px,1fr)_minmax(100px,1fr)] md:grid-cols-[1fr_60px_80px_80px]  gap-2 text-nowrap'>
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
