import React from 'react'
import { motion } from 'framer-motion'
import facebooks from '../assets/facebooks.png'
import autocode from '../assets/autocode.jpg'

const Module = (props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
         initial={{
            x: props.left == "true" ? -200 : 200,
            opacity: 0
         }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x:0 }}
         src={autocode}
         className='rounded-full border border- object-cover w-[6.5rem] h-[6.5rem] xl:w-[8rem] xl:h-[8rem] filter group-hover:grayscale transition duration-300 ease-in-out'
         />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[6.5rem] h-[6.5rem] xl:w-[8rem] xl:h-[8rem] rounded-full z-0'>
          <div className="flex items-center justify-center h-full"><p className="text-xl font-bold text-[#AC67D6] opacity-100 text-center">{props.name}</p></div>
        </div>
    </div>
  )
}

export default Module