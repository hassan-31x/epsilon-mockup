import React from 'react'

import { motion } from 'framer-motion'

const Meaning = () => {
  return (
    <div>
        <motion.div
        initial={{
            y: 300,
            opacity: 0
        }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        >
            <h2 className='text-8xl font-bold text-center lg:text-left'>Epsilon</h2>
        </motion.div>
        <motion.div
        initial={{
            y: 150,
            opacity: 0
        }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
        transition={{
            duration: 1,
            delay: 0.3
        }}
        >
            <h3 className='text-4xl font-semibold text-slate-400 mb-6 text-center lg:text-left'>[ep<span className='font-bold mx-1'>·</span>suh<span className='font-bold mx-1'>·</span>lon] <span className='italic'>noun</span></h3>
        </motion.div>
        <motion.div
        initial={{
            x: -500,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 1,
            delay: 1
        }}
        >
            <p className='text-2xl leading-[0.8rem] text-slate-400 mb-6 font-semibold'><span className='font-thin italic'>Language: </span>greek alphabet</p>
        </motion.div>
        <motion.div
        initial={{
            x: -500,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 1,
            delay: 1.3
        }}
        >
            <p className='text-2xl leading-[0.8rem] text-slate-400 mb-6 font-semibold'><span className='font-thin italic'>Astronomy: </span>star in a constellation</p>
        </motion.div>
        <motion.div
        initial={{
            x: -500,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 2.5,
            delay: 1.6
        }}
        >
            <p className='font-thin text-2xl leading-[0.8rem] text-[#E0CA3C]'><span className='italic'>Science: </span>best inter-school <span className='font-semibold'>science olympiad</span></p>
        </motion.div>
    </div>
  )
}

export default Meaning