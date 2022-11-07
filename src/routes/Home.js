import React from 'react'
// import { useEffect, useState } from 'react'

import LoaderHome from '../components/LoaderHome.js'
import Navbar from '../components/Navbar.js'
import Hero from '../components/Hero.js'
import About from '../components/About.js'
import Modules from '../components/Modules.js'
import Team from '../components/Team.js'
import Contact from '../components/Contact.js'
import Footer from '../components/Footer.js'
import TopBtn from '../components/TopBtn.js'

import Lottie from 'react-lottie'
import animationData from '../assets/lottiexx.json'




export default function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  
  
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
      <section className='z-[100000] h-screen w-screen snap-center' id='lottie'>
        <Lottie
	        options={defaultOptions}
          height={800}
          width={800}
        />
      </section>
      <section className='snap-center' id='about'><About /></section>
      <section className='snap-start' id='modules'><Modules /></section>
      <section className='snap-center' id='about'><Team /></section>
      <section className='snap-center' id='contact'><Contact /></section>
      <section className='snap-center' id='footer'><Footer /></section>
      <section className='sticky bottom-5 cursor-pointer'><TopBtn /></section>
    </div>
  )
}
