import React from 'react'
import Skill from './Module.js'
import { motion } from 'framer-motion'

const Modules = () => {
  return (
    <motion.div className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#AC67D6] text-2xl'>
        Modules
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-[#AC67D6] text-sm'>Hover over a module to learn more about it</h3>

      <div className='grid grid-cols-3 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}

export default Modules