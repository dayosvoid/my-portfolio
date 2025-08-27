import React, { useState } from 'react'
import menunav from "../assets/nav/menu.svg"
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Nav = () => {
    // state to manage the dropdown Menu
    const [menu,setMenu]=useState(false)
    console.log(menu);
    
  return (
    <div className='container mx-auto w-11/12 relative'>
        <nav className='flex justify-between py-3'>
            {/* logo (left section) */}
            <div className='flex items-center gap-5'>
                <span>
                    <Link to="/" className=''><p className='BebasNeue text-[hsla(0,0%,78%,1)] text-3xl md:text-5xl cursor-pointer hover:text-[hsla(72,72%,70%,1)]'>
                        Dv
                    </p></Link>
                </span>


            </div>

            {/* menu (right section)(login/ sign up) */}
            <div className='flex items-center'>
                <button className='text-gray-700  md:hidden' onClick={()=>setMenu(!menu)}>{menu?<X className=''/>: <img src={menunav} alt="" className='w-[20px]'/> }</button>
                
                {/*(login/ sign up)  */}
                <div className='space-x-3 font-semibold hidden  md:flex'>
                    <ul className='flex gap-5 md:text-lg font-regular manrope'>
                        <li className='cursor-pointer hover:text-[hsla(72,72%,70%,1)]'>
                            <a href="">Work</a>
                        </li>
                        <li className='cursor-pointer hover:text-[hsla(72,72%,70%,1)]'>
                            <a href="">About</a>
                        </li>
                        <li className='cursor-pointer hover:text-[hsla(72,72%,70%,1)]'>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
        {
            menu && 
            <div className='flex flex-col gap-8 text-black font-semibold bg-[hsla(72,72%,70%,1)] text-semibold text-center w-full py-10 px-5 absolute rouneded-r- rounded-md md:hidden z-2'>
                <ul className='space-y-4' >
                    <li>Work</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
               {/* the thin horizontal line  in the dropdown menu 
               <div className='w-full border border-gray-600 '></div>
               <div className='flex flex-col gap-4 '>
                <button disabled className='text-gray-400 hover:text-black cursor-pointer cursor-not-allowed' >Login</button>
                <button  disabled={true} className='bg-[hsl(180,66%,49%)] py-2 rounded-full cursor-not-allowed'>Sign up</button>
               </div> */}
            </div>
        }
    </div>
  )
}

export default Nav
