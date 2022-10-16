import React from 'react'

import About from '../components/About.js'
import Hero from '../components/Hero.js'
import Navbar from '../components/Navbar.js'

export default function Home() {
  return (
    <div className='bg-[#371C5A] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Navbar />
      <section className='snap-start'><Hero /></section>
      <section className='snap-center'><About /></section>
    </div>
  )
}
