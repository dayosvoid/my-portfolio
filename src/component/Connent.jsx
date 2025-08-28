import { CheckCircle, Copyright, Instagram, XCircle } from 'lucide-react'
import React, { useEffect,useRef,useContext,useState } from 'react'
import linkin from '../assets/hero/linkin.png'
import github from '../assets/hero/github.png'
import twitter from '../assets/footer/twitter.png'
import {  ScrollContext } from '../context/Scroll'

const Connent = () => {


     const contactRef = useRef(null);
          const { registerSectionRef } = useContext(ScrollContext);
          
          useEffect(() => {
              registerSectionRef('contact', contactRef);
          }, [registerSectionRef]);
    


    const initialValue = {
        name:"",
        email:"",
        subject:"",
        message:""
    }
    const [formValue,setFormValue]=useState(initialValue)
    const [errors,setErrors]=useState({})
     const [isLoading,setIsLoading]=useState(false)
     const [status,setStatus]=useState(null)


    //  const [formValue,setFormValue]=useState(initialValue)
    const handleChange=(e)=>{
        const{name,value} = e.target
        setFormValue ({...formValue, [name]:value})

        if(errors[name]){
            setErrors({...errors, [name]: ""})
        }
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        setStatus(null)
        const validationErrors = validate(formValue)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form is valid, submitting...", formValue);
            setIsLoading(true)

            try {
                const res = await fetch('https://formspree.io/f/xzzabnyr', {
                    method:'POST',
                    headers:{
                        "content-Type":"application/json"
                    },
                    body: JSON.stringify({formValue})
                })
                if(res.ok){
                    setTimeout(()=>{
                        setFormValue(initialValue)
                        setStatus('success')
                    },2000)
                }
            } catch (error) {
                console.log(error)
                setStatus('failed');
                setIsLoading(false)
            }}
            setTimeout(()=>{
                setStatus('null')
            },4000)
            setIsLoading(false)
    }

    const validate = (value)=>{
          const error = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        const nameValue = value.name.trim()
        const emailValue = value.email.trim()
        const subjectValue = value.subject.trim()
        const messageValue = value.message.trim()

        if(!nameValue){
             error.name='name is required'}
        
        if(!emailValue){
           error.email='email is required'
        }else if(!regex.test(emailValue)){
           error.email='invalid Email'
        }

        if(!subjectValue){
          error.subject='please enter the subject'
        }

        if(!messageValue){
           error.message='please enter a message'
        }

        return error
    }

  return (
    <div className='container w-11/12 m-auto flex-col md:items-start '>
         <div className=' flex flex-col gap-5 md:flex-row py-10 md:py-10'>
            {/* let connent */}
            <div ref={contactRef} className='flex flex-col w-full gap-5  relative '>
                <span className='w-full'>
                    <h2 className='BebasNeue text-4xl md:text-5xl w-full'>
                      LET'S CONNECT
                    </h2>
                </span>

                <span className='text-sm md:text-lg'>
                    <p>Say hello at <span className='border-b-[2px] border-[hsla(72,72%,70%,1)] '>atimileyin911@gmail.com</span></p>
                    <p>For more info, here's my <span className='border-b-[2px] border-[hsla(72,72%,70%,1)]'>resume</span></p>
                </span>


                <div className='flex items-center gap-7 md:gap-10 pb-4'>
                    {/* linked in */}
                    <span className='cursor-pointer hover:border-b hover:border-[hsla(72,72%,70%,1)]'>
                        <a href="https://www.linkedin.com/in/adedayo-a-70443a36b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                            <img src={linkin} alt="" className='w-[30px] md:w-[38px]' />
                        </a>
                    </span>
                    {/* github */}
                    <span className='cursor-pointer hover:border-b hover:border-[hsla(72,72%,70%,1)]'>
                        <a href="https://github.com/dayosvoid">
                            <img src={github} alt="" className='w-[30px] md:size-[38px]' />
                        </a>
                    </span>
                    {/* x */}
                    <span className='cursor-pointer hover:border-b hover:border-[hsla(72,72%,70%,1)]'>
                        <a href="https://x.com/dayosvoid?t=q3P3c1m0g1o3IKfU-eUz0w&s=09">
                            <img src={twitter} alt="" className='w-[30px] md:size-[30px]'/>
                        </a>
                    </span>
                    {/* instagram */}
                    <span className='cursor-pointer hover:border-b hover:border-[hsla(72,72%,70%,1)]'>
                        <a href="https://www.instagram.com/dayosvoid?igsh=MWVsNXc2a3Y5dnUzbQ==">
                            <Instagram className='text-[hsla(72,72%,70%,1)] size-[30px] md:size-[35px] '/>
                        </a>
                    </span>
                </div>

                
                <span className='flex pt-5 text-sm items-center  absolute bottom-0 hidden md:flex'>
                    <Copyright className='w-[14px]'/>
                    <p > 2023 Adedayo A.</p>
                </span>


            </div>

            {/* form  */}
            <div className='w-full relative'>
                <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4 items-start md:text-lg w-full'>
                    <div className='w-full relative'>
                        <label htmlFor="">Name</label>
                        <input type="text" name='name' value={formValue.name} onChange={handleChange} className='bg-gray-900 px-2 py-1 md:py-2 w-full rounded-md px-2 focus:outline-none text-[16px]' />
                        {errors.name && <p className='text-red-500 text-[12px] absolute right-0 bottom-[-16px]'>{errors.name}</p>}
                    </div>

                     <div className='w-full relative'>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' value={formValue.email} onChange={handleChange} className='bg-gray-900 py-1 md:py-2 w-full rounded-md px-2 focus:outline-none text-[16px]' />
                        {errors.email && <p className='text-red-500 text-[12px] absolute right-0 bottom-[-16px]'>{errors.email}</p>}
                    </div>

                     <div className='w-full relative'>
                        <label htmlFor="">Subject</label>
                        <input type="text" name='subject' value={formValue.subject} onChange={handleChange} className='bg-gray-900 py-1 md:py-2 w-full rounded-md px-2 focus:outline-none text-[16px]' />
                        {errors.subject && <p className='text-red-500 text-[12px] absolute right-0 bottom-[-16px]'>{errors.subject}</p>}
                    </div>

                     <div className='w-full relative'>
                        <label htmlFor="">Message</label>
                        <textarea name="message" id="" value={formValue.message} onChange={handleChange}  className='bg-gray-900 pb-20 pt-2 w-full rounded-md px-2 focus:outline-none text-[16px]' ></textarea>
                        {errors.message && <p className='text-red-500 text-[12px] absolute right-0 bottom-[-10px]'>{errors.message}</p>}
                    </div>
                    

                    <button className=' bg-[hsla(72,72%,70%,1)] text-black md:text-lg px-4 py-2 rounded-full hover:font-semibold cursor-pointer'>
                        {
                            isLoading ? 'Submitting...' : 'submit'
                        }
                    </button>
                </form>

                {( status === 'success' &&
                    <div className="bg-green-500 text-white text-nowrap p-2 absolute right-0 bottom-0 rounded-lg shadow-md flex gap-2 items-center w-full md:w-full">
                        <CheckCircle className="w-6 h-6" />
                        <p>Thank you! message sent successfully.</p>
                    </div>
                )}


                 {status === 'failed' && (
                    <div className="bg-red-500 text-white text-nowrap p-2 absolute right-0 bottom-0 rounded-lg shadow-md flex gap-2 items-center w-full md:w-full">
                        <XCircle className="w-6 h-6 mr-2" />
                        <p>Oops! Something went wrong.</p>
                    </div>
                )}
            </div>

        </div>

        <span className='flex md:hidden pt-5 text-sm md:text-lg items-center'>
                <Copyright className='w-[14px]'/>
                <p > 2023 Robert Garcia</p>
         </span>
    </div>
  )
}

export default Connent
