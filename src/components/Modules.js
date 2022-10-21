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

      <div className='grid grid-cols-3 gap-5 md:gap-8 lg:mt-5 '>
        <Skill left="false" name="Autocode" />
        <Skill left="false" name="Euclid's Elements" />
        <Skill left="false" name="Sceptical Chemist" />
        <Skill left="true" name="Robosonic" />
        <Skill left="true" name="Carson's Conundrum" />
        <Skill left="true" name="Area 51" />
        <Skill left="false" name="Cicada 3301" />
        <Skill left="false" name="Cerebral Labyrinth" />
        <Skill left="false" name="Escharian Stairwells" />
      </div>
    </motion.div>
  )
}

export default Modules