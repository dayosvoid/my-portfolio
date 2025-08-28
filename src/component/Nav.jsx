import React, { useState, useContext } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollContext } from '../context/Scroll';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Nav = () => {
    const { scrollToSection } = useContext(ScrollContext)
    // state to manage the dropdown Menu
    const [menu, setMenu] = useState(false)
    
    const handleNavClick = (section) => {
        scrollToSection(section);
        setMenu(false); // Close mobile menu after navigation
    }
    
    return (
        <div className='container mx-auto w-11/12 relative'>
            <nav className='flex justify-between items-center py-3'>
                {/* logo (left section) */}
                <div className='flex items-center '>
                    <span>
                        <Link to="/" className=''>
                            <p className='BebasNeue text-[hsla(0,0%,78%,1)] text-3xl md:text-5xl cursor-pointer hover:text-[hsla(72,72%,70%,1)]'>
                                ADEDAYO
                            </p>
                        </Link>
                    </span>
                </div>

                {/* menu (right section) */}
                <div className='flex items-center text-[hsla(0,0%,78%,1)]'>
                    <button 
                        className='text-gray-700 md:hidden' 
                        onClick={() => setMenu(!menu)}
                        aria-label={menu ? 'Close menu' : 'Open menu'}
                    >
                        {menu ? <X className='size-[30px] text-[hsla(0,0%,78%,1)] '/> : <HiOutlineMenuAlt4 className=' size-[30px] text-[hsla(0,0%,78%,1)]'/>}
                    </button>
                    
                    {/* Desktop navigation */}
                    <div className='space-x-3 font-semibold items-center hidden md:flex'>
                        <ul className='flex gap-5 md:text-lg font-regular manrope'>
                            <li 
                                onClick={() => handleNavClick('work')} 
                                className='onhover cursor-pointer md:text-xl hover:text-[hsla(72,72%,70%,1)] '
                            >
                                Work
                            </li>
                            <li 
                                onClick={() => handleNavClick('about')} 
                                className='onhover cursor-pointer md:text-xl hover:text-[hsla(72,72%,70%,1)] transition-colors'
                            >
                                About
                            </li>
                            <li 
                                onClick={() => handleNavClick('contact')} 
                                className='onhover cursor-pointer md:text-xl hover:text-[hsla(72,72%,70%,1)] transition-colors'
                            >
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile dropdown menu */}
            {menu && 
                <div className='flex flex-col gap-8 text-black font-semibold bg-[hsla(72,72%,70%,.50)] backdrop-blur text-center w-full py-8 px-5 absolute rounded-md md:hidden z-10'>
                    <ul className='space-y-5 text-lg font-bold'>
                        <li 
                            onClick={() => handleNavClick('work')} 
                            className=' cursor-pointer hover:text-white transition-colors'
                        >
                            Work
                        </li>
                        <li 
                            onClick={() => handleNavClick('about')} 
                            className='cursor-pointer hover:text-white transition-colors'
                        >
                            About
                        </li>
                        <li 
                            onClick={() => handleNavClick('contact')} 
                            className='cursor-pointer hover:text-white transition-colors'
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Nav

