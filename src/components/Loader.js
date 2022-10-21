import React from 'react'
import { useEffect } from 'react';
import { gsap } from "gsap";

const Loader = (props) => {

    let tl = gsap.timeline({
        ease: 'power1.out'
    })

    
    useEffect(() => {
        tl.to('.text', {y: '0%', duration: 1, stagger: 0.25})
        tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5})
        tl.to('.screen', {y: '-100%', duration: 0.6}, "-=0.95")
    }, []);

  return (
        <div className='screen fixed top-0 left-0 h-screen w-screen bg-black flex flex-col justify-center items-center z-[1000000]'>
            <div className='bg-black  text-7xl leading-[80px] tracking-wide overflow-hidden'>
                <h2 className='text-9xl text-white font-bold overflow-hidden'><span className='text inline-block translate-y-full'>{props.title}</span></h2>
                <h2 className='text-white font-bold overflow-hidden'><span className='text inline-block translate-y-full'>{props.subtitle}</span></h2>
            </div>
            <div className='slider fixed top-0 left-0 h-full w-full bg-[#AC67D6] translate-y-full'></div>
        </div>
  )
}

export default Loader