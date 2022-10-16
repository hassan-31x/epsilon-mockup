import React, { useState } from 'react'

import Navbar from '../components/Navbar.js'
import Carousel from '../components/Carousel.js'

import titleimg from '../assets/testimg.png'
import { BsChevronDown } from 'react-icons/bs'

const Modules = () => {

    const [toggle, settoggle] = useState(false)
    
    const toggleBtn = (document.querySelector('.toggle-btn'))
    const subtext = (document.querySelector('.title-subtext'))
    const text = (document.querySelector('.title-text'))
     window.onscroll = function () { window.scrollTo(0, 0); };

    const handleClick = () => {
        settoggle(!toggle)
        console.log(toggle)
      }
  return (
    <div className="h-screen overflow-hidden" style={{background: 'linear-gradient(180deg, rgba(70,45,102,1) 0%, rgba(76,48,111,1) 22%, rgba(63,35,99,1) 35%, rgba(64,35,101,1) 80%, rgba(55,28,90,1) 90%, rgba(50,25,82,1) 100%)'}}>
        <Navbar className='sticky' />
        <div className={`w-screen flex justify-center absolute top-6 pr-1 duration-700 ${toggle ? 'translate-y-[90rem]' : null}`}>
            <img src={titleimg} alt="superhero" className='h-[43rem] max-h-screen animate-[wiggle_5s_ease-in-out_infinite]' />
        </div>
        <div className={`h screen w-screen ${toggle ? "z-[1000] absolute top-0 left-0" : ""}`}>

            <div className={`w-screen h-screen absolute flex flex-col justify-center items-center mt-8 cursor-pointer ${toggle ? 'z-[100000]' : 'z-10'}`} onClick={toggle ? handleClick : null }>
                <div className={`z-[999999] title-subtext text-[#af9e30] uppercase leading-none text-center duration-700 ${toggle ? '-translate-y-[27rem] -translate-x-2 scale-[1] tracking-[6px]' : 'tracking-[20px] text-3xl'}`} style={ toggle ? {wordSpacing: '9px'} : {wordSpacing: '28px'}} >Epsilon III</div>
                <div className={`z-[999999] title-text text-[#E0CA3C] uppercase leading-none font-bold text-center tracking-wide pr-3 duration-700 ${toggle ? "-translate-y-[26rem] scale-[1.90]" : "text-[5rem]"}`}>Modules</div>
            </div>
            <div className="w-screen h-screen flex justify-center items-end z-100 absolute bottom-16">
                <button onClick={!toggle ? handleClick : null} className='toggle-btn z-50'><BsChevronDown className='text-white text-2xl animate-pulse' /></button>
            </div>
            
        </div>
        <div className={`h-[90vh] duration-[1250ms] absolute top-[130px] left-0 z-[1000] ${toggle ? 'translate-x-0' : 'translate-x-[3000px]'}`}>
            <Carousel />
        </div>
    </div>
  )
}

export default Modules
