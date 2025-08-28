import React, { useContext,useEffect,useRef } from 'react'
import betahouse from '../assets/featured/betahouse.png'
import url from '../assets/featured/url.png'
import { ArrowUpRight, Github } from 'lucide-react'
import github from '../assets/hero/github.png'
import {  ScrollContext } from '../context/Scroll'

const FeaturedProject = () => {
     const workRef = useRef(null);
    const { registerSectionRef } = useContext(ScrollContext);
    
    useEffect(() => {
        registerSectionRef('work', workRef);
    }, [registerSectionRef]);

    const projects =[
        {
            image:betahouse,
            title:'Promotional landing page for our favorite show',
            description:'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
            year:'2023',
            role:'fullstack-dev',
            liveLink:'https://frontend-beta-house-vb16.vercel.app/',
            gitLink:'https://github.com/dayosvoid/frontend-beta-house',
        },{
            image:url,
            title:'A url-shortener',
            description:'made this during my internship, its a website that dynamically fetch a data(shorten links) based of user input and stores the fetch data(shorten link) in the local storage.',
            year:'2025',
            role:'fullstack-dev',
            liveLink:'https://uri-shorten-api.vercel.app/',
            gitLink:'https://github.com/dayosvoid/URI-shorten-api-',
        },{
            image:betahouse,
            title:'Promotional landing page for our favorite show',
            description:'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
            year:'2024',
            role:'fullstack-dev',
            liveLink:'https://frontend-beta-house-vb16.vercel.app/',
            gitLink:'https://github.com/dayosvoid/frontend-beta-house',
        }
    ]

    const {targetRef}=useContext(ScrollContext)
  return (
    <div className='border-t border-gray-500'>   
        <div className='container w-11/12 mx-auto py-10'>
            <div  ref={workRef}>
                <span ref={targetRef} className='space-y-4 '>
                    <h2 className='BebasNeue text-4xl md:text-6xl'>Featured Projects</h2>
                    <p className='manrope text-sm md:text-lg font-light md:w-[50%]'>Here are some of the selected projects that showcase my passion for front-end development.</p>
                </span>
                {/* FIRST PROJECT */}
               {
                projects.map((project)=>(
                    <div key={project.year} className='py-10 w-full gap-5 md:flex '>
                        {/* projext */}
                        <div  className='w-full bg-gray-800 p-5 pb-0 flex justify-center rounded-md relative'>
                            <a href={project.liveLink}>
                                <img src={project.image} alt="" className='size-[80%] absolute buttom-0 left-1/2 -translate-x-1/2 ' />
                            </a>
                        </div>
                        {/* about ptojecy */}
                        <div className='flex flex-col gap-3 w-full'>
                        <h2 className='font-regular text-3xl text-start'>
                                {project.title}
                            </h2> 
                        <p className='manrope md:text-lg text-sm font-light'>
                            {project.description}
                        </p>

                        <span className='flex flex-col gap-3 py-2'>
                            <p className='font-semibold'>Project Info</p>
                            <span className='flex pt-2 text-sm md:text-lg justify-between w-full border-t border-gray-600'>
                                <p>Year</p>
                                <p>{project.year}</p>
                            </span>
                            <span className='flex border-b border-[hsla(72,72%,70%,1)]  py-2 text-sm md:text-lg justify-between items-center w-full border-b border-t border-gray-600'>
                                <p>Role</p>
                                <p>{project.role}</p>
                            </span>

                            <div className='
                            flex gap-10 text-[12px] text-start  py-3 text-[hsla(72,72%,70%,1)] '>
                                <div className='flex justify-start py-1  gap-1 border-b-[2px] border-[hsla(72,72%,70%,1)] text-nowrap'><a href={project.liveLink}>LIVE DEMO </a><ArrowUpRight className='size-[18px]'/></div>

                                <div className='border-b-[2px] border-[hsla(72,72%,70%,1)] text-nowrap flex py-1 gap-1 items-center '>
                                    <a href={project.gitLink}>SEE ON GITHUB</a>
                                     <img src={github} alt="" className='size-[15px]' />
                                </div>
                                 
                            </div>
                        </span>
                    </div>
                </div>
                ))
               }
            </div>
        </div>
    </div> 
  )
}

export default FeaturedProject
