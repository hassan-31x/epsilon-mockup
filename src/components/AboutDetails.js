import React from 'react'

import { motion } from 'framer-motion'

const AboutDetails = () => {
  return (
    <div>
        <motion.div
        initial={{
            x: 200,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        >
        <h2 className='text-3xl font-bold text-[#AC67D6] mb-[0.15rem]'>Creative Growth</h2>
        <p className='text-md mb-3 text-[#AC67D6]'>It is the ultimate battle of wits, you get an opportunity to sharpen your inventive skills and compete with the sharpest amongst your age group.</p>
        </motion.div>

        <motion.div
        initial={{
            x: 200,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 1,
            delay: 0.5
        }}
        >
        <h2 className='text-3xl font-bold text-[#AC67D6] mb-[0.15rem]'>Practical Approach</h2>
        <p className='text-md mb-3 text-[#AC67D6]'>An opportunity to learn more about your hobbies like coding and robotics. It is a vital chance to put use of your learned skills or discover a new passion.</p>
        </motion.div>

        <motion.div
        initial={{
            x: 200,
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
        <h2 className='text-3xl font-bold text-[#AC67D6] mb-[0.15rem]'>Evaluative Growth</h2>
        <p className='text-md mb-3 text-[#AC67D6]'>The practical layout of our modules brings out the critical thinking skills dormant in our participants.</p>
        </motion.div>
    </div>
  )
}

export default AboutDetails
