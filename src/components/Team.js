import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

import Man from '../assets/man.png'

const Team = () => {

  const options = {
    tiltMaxAngleX: 30,
    tiltMaxAngleY: 30,
    transitionSpeed: 400,
    glareEnable: true,
    glareMaxOpacity: 0.7,
    glarePosition: 'all',
    glareColor: '#000',
    scale: 1.2
  }

  const test = {
    max: 30,
    speed: 1000,
    glare: true,
    "max-glare": 1
  }

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#AC67D6] text-2xl'>
        Team
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-[#AC67D6] text-sm mb-6'>Check out our team for Epsilon</h3>

      <div className='flex gap-10 w-full justify-center h-[60vh] items-center'>

        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.06} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.6} glarePosition={'all'} glareBorderRadius={'9999px'}>
        <motion.div 
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            delay: 0.9
          }}
          className="relative h-[37rem] w-48 bg-[#99E1D9] items-end justify-center rounded-full">
          <img src={Man} alt="" className='absolute bottom-0 h-[30rem] w-96 object-cover rounded-full'/>
        </motion.div>
        </Tilt>
        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.06} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.6} glarePosition={'all'} glareBorderRadius={'9999px'}>
        <motion.div 
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            delay: 0.7
          }}
          className="relative h-[36rem] w-48 bg-[#E0DDCF] items-end justify-center rounded-full">
          <img src={Man} alt="" className='absolute bottom-0 h-[30rem] w-96 object-cover rounded-full'/>
        </motion.div>
        </Tilt>
        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.06} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.6} glarePosition={'all'} glareBorderRadius={'500px'}>
        <motion.div 
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            delay: 0.5
          }}
          className="relative h-[35rem] w-48 bg-[#EA7AF4] items-end justify-center rounded-full">
          <img src={Man} alt="" className='absolute bottom-0 h-[30rem] w-96 object-cover rounded-full'/>
        </motion.div>
        </Tilt>
        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.06} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.6} glarePosition={'all'} glareBorderRadius={'9999px'}>
        <motion.div 
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            delay: 0.3
          }}
          className="relative h-[34rem] w-48 bg-[#757780] items-end justify-center rounded-full">
          <img src={Man} alt="" className='absolute bottom-0 h-[30rem] w-96 object-cover rounded-full'/>
        </motion.div>
        </Tilt>
        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.06} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.6} glarePosition={'all'} glareBorderRadius={'9999px'}>
        <motion.div 
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            delay: 0.5
          }}
          className="relative h-[35rem] w-48 bg-[#7F96FF] items-end justify-center rounded-full">
          <img src={Man} alt="" className='absolute bottom-0 h-[30rem] w-96 object-cover rounded-full'/>
        </motion.div>
        </Tilt>
        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.06} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.6} glarePosition={'all'} glareBorderRadius={'9999px'}>
        <motion.div 
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            delay: 0.7
          }}
          className="relative h-[36rem] w-48 bg-[#E0DDCF] items-end justify-center rounded-full">
          <img src={Man} alt="" className='absolute bottom-0 h-[30rem] w-96 object-cover rounded-full'/>
        </motion.div>
        </Tilt>
        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.06} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.6} glarePosition={'all'} glareBorderRadius={'9999px'}>
        <motion.div 
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            delay: 0.9
          }}
          className="relative h-[37rem] w-48 bg-[#99E1D9] items-end justify-center rounded-full">
          <img src={Man} alt="" className='absolute bottom-0 h-[30rem] w-96 object-cover rounded-full'/>
        </motion.div>
        </Tilt>
      </div>
    </div>
  )
}

export default Team