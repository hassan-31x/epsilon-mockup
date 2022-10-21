import React from 'react'
import Rocket from '../assets/rocket.png'

const TopBtn = () => {
  return (
    <footer className=''>
        <a href="#hero">
            <div className="flex justify-center items-center"><img src={Rocket} alt="" className='h-[5rem] w-[4.8rem] rounded-full filter hover:grayscale grayscale-0 cursor-pointer -rotate-45'/></div>
        </a>
    </footer>
  )
}

export default TopBtn