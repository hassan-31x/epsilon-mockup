import React from 'react'

import BackgroundCircle from './BackgroundCircle.js'
import Logo from '../assets/logo.png'

import { Cursor, Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="h-screen text-white flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
        <img src={Logo} alt="logo" className='relative w-64 object-cover' />
        <div className='z-20'>
          <h2 className="text-sm uppercase text-[#D398EA] pb-2 tracking-[10px]">Engage | Experiment | Excel</h2>
          <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
            <span className='mr-3'><Typewriter words={['3 Day Science Olympiad', '21, 22, 23 January 2023', '<Participate for Fun />']} loop={false} delaySpeed={2000} deleteSpeed={50} /></span>
            <Cursor cursorColor='#E0CA3C' />
          </h1>
          <div className='pt-5'>
            <button className='nav-button'><a href='#modules'>Modules</a></button>
            <button className='nav-button'><a href='#team'>Team</a></button>
            <button className='mx-1 px-6 py-2 border hover:border-none rounded-full uppercase text-sm tracking-widest hover:text-[#371C5A] transition-all border-[#E0CA3C] text-[#E0CA3C] hover:bg-white hover:font-bold'><a href='/register'>Register</a></button>
            <button className='nav-button'><a href='#about'>About</a></button>
            <button className='nav-button'><a href='#contact'>Contact</a></button>
            {/* <Link to={{pathname: '/courses'}}><button className='nav-button'>About</button></Link>
            <Link to={{pathname: '/courses'}}><button className='nav-button'>Experience</button></Link>
            <Link to={{pathname: '/courses'}}><button className='nav-button'>Skills</button></Link>
            <Link to={{pathname: '/courses'}}><button className='nav-button'>Projects</button></Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero