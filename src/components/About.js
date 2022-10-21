import React from 'react'
import Meaning from './Meaning.js'

const About = () => {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#AC67D6] text-2xl'>
        About
      </h3>
      <div className='flex flex-col lg:flex-row w-full max-w-6xl'>
        <div className="lg:w-[70%]">
          <Meaning />
        </div>
        <div className="lg:w-[30%] text-6xl font-bold italic">Images Card</div>
      </div>
    </div>
  )
}

export default About