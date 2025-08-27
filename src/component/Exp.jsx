import React from 'react'

const Exp = () => {
  return (
    <div className='border-y border-gray-500 py-10'>
      <div className='container w-11/12 m-auto flex flex-col md:flex-row gap-10'>
        <div className='md:w-full'>
            <h2 className='BebasNeue text-4xl md:text-5xl text-nowrap'>MY EXPERIENCE</h2>
        </div>

        <div className='flex flex-col gap-10 md:w-full'>
            <div className='flex flex-col gap-5'>
                <span className='space-y-1 md:flex items-center justify-between'>
                    <p className='font-semibold md:text-xl'>Freelance Developer</p>
                    <p className='text-sm text-[hsla(0,0%,78%,1)]'>Nov 2024 — Present </p>
                </span>

                <p className='text-sm md:text-lg text-[hsla(0,0%,78%,1)]'>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>

            {/*  f*/}
            <div className='flex flex-col gap-5 md:w-full'>
                <span className='flex flex-col md:flex-row md:justify-between w-full'>
                    <span className='w-full flex flex-col gap-1'>
                        <p className='font-semibold md:text-xl'>FullStack Intern</p>
                        <span className='text-[12px] hidden md:flex text-[hsla(72,72%,70%,1)]'><a href="">Tech Studio Academy</a></span>
                    </span>
                    <p className='text-sm md:text-end text-[hsla(0,0%,78%,1)] w-full'>August 2025 — Present </p>
                    <span><a href="https://techstudioacademy.com" className='text-[12px] md:hidden text-[hsla(72,72%,70%,1)] cursor-pointer hover:text-lg hover:text-[hsla(72,63%,78%,1.00)]'>Tech Studio Academy</a></span>
                </span>

                <p className='text-sm md:text-lg text-[hsla(0,0%,78%,1)]'>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Exp
