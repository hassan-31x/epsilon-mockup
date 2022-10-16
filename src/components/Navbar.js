import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { HiCursorClick } from "react-icons/hi";

const Navbar = () => {

    // render social icons using key
    const socialIcons = [
        {
            name: 'facebook',
            url: 'www.facebook.com'
        },
        {
            name: 'instagram',
            url: 'www.instagram.com'
        },
        {
            name: 'youtube',
            url: 'www.youtube.com'
        },
        {
            name: 'snapchat',
            url: 'www.snapchat.com'
        }
    ]

  return (
    <header className='sticky top-8 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className="flex items-center">
            <SocialIcon
                url='https://www.facebook.com'
                fgColor='#AC67D6'
                bgColor='transparent'
            />
            <SocialIcon
                url='https://www.youtube.com'
                fgColor='#AC67D6'
                bgColor='transparent'
            />
            <SocialIcon
                url='https://www.instagram.com'
                fgColor='#AC67D6'
                bgColor='transparent'
            />
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='#AC67D6'
                bgColor='transparent'
            />
        </motion.div>
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className="flex items-center text-grey-300 cursor-pointer">
            <HiCursorClick className='text-2xl mr-2 text-[#AC67D6]' />
            <p className='uppercase hidden md:inline-flex text-sm text-[rgb(172,103,214)]'>Register Now</p>
        </motion.div>
    </header>
  )
}

export default Navbar