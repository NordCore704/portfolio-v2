import React from 'react'
import { Hero, HeroText, } from '@/exports'

const Intro = () => {
  return (
    <section className='p-5 lg:p-10 items-center flex flex-col md:flex-row w-full h-screen'>
     <Hero />
     <HeroText />
    </section>
  )
}

export default Intro