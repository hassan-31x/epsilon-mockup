import React from 'react'
import AboutDetails from './AboutDetails.js'
import Meaning from './Meaning.js'
import Timer from './Timer.js'

const About = () => {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#AC67D6] text-2xl'>
        About
      </h3>

      <div className='flex flex-col lg:flex-row w-full max-w-6xl'>
        <div className="mx-auto lg:mx-0 lg:mt-10" style={{flex: '2'}}>
          <Meaning />
        </div>
        <div className="text-center lg:text-left mx-auto lg:mx-0 mt-10 lg:mt-0" style={{flex: '1'}}>
          <AboutDetails />
        </div>
      </div>

      <div className="absolute bottom-[140px] w-full max-w-4xl">
        <Timer />
      </div>

    </div>
  )
}

export default About