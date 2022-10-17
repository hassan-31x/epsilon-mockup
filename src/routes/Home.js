import React from 'react'

import Navbar from '../components/Navbar.js'
import Hero from '../components/Hero.js'
import About from '../components/About.js'
import Team from '../components/Team.js'
import Modules from '../components/Modules.js'

export default function Home() {
  return (
    <div className='bg-[#371C5A] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Navbar />
      <section className='snap-start' id='hero'><Hero /></section>
      <section className='snap-center' id='about'><About /></section>
      <section className='snap-center' id='about'><Team /></section>
      <section className='snap-start' id='modules'><Modules /></section>
    </div>
  )
}
