import React from 'react'
import { AboutImage, AboutText } from '@/exports'

const About = () => {
  return (
    <div className='min-h-screen w-full flex flex-col-reverse md:flex-row-reverse justify-center items-center'>
      <AboutText />
      <AboutImage />
    </div>
  )
}

export default About