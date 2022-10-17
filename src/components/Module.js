import React from 'react'
import { motion } from 'framer-motion'
import facebooks from '../assets/facebooks.png'

const Module = (props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
         initial={{
            x: props.left ? -200 : 200,
            opacity: 0
         }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x:0 }}
         src={facebooks}
         className='rounded-full border border- object-cover w-24 h-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
         />
    </div>
  )
}

export default Module