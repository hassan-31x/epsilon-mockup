import React from 'react'
// import { useEffect, useState } from 'react'

import LoaderHome from '../components/LoaderHome.js'
import Navbar from '../components/Navbar.js'
import Hero from '../components/Hero.js'
import About from '../components/About.js'
import Team from '../components/Team.js'
import Modules from '../components/Modules.js'
import TopBtn from '../components/TopBtn.js'




export default function Home() {
  
  // const [load, setload] = useState(false)

  // setTimeout(() => {
  //   useEffect(() => {
  //     setload(true)
  //   }, [])
  // }, 3000);

  return (
    <div className='bg-[#371C5A] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#E0CA3C]/70'>
      <LoaderHome />
      <Navbar />
      <section className='snap-start' id='hero'><Hero /></section>
      <section className='snap-center' id='about'><About /></section>
      <section className='snap-center' id='about'><Team /></section>
      <section className='snap-start' id='modules'><Modules /></section>
      <section className='sticky bottom-5 cursor-pointer'><TopBtn /></section>
    </div>
  )
}
