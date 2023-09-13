import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { globeBG } from '@/exports/image-exports'
import { Open_Sans, Poppins, Carrois_Gothic, UnifrakturCook } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '300',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700'
})

const unifraktur = UnifrakturCook({
  subsets: ['latin'],
  weight: '700'
})


const AboutImage = () => {
  const variants = {
    init: {
      opacity: 0,
      y: 100,
    }, 
    animate: {
      opacity: 1,
      y: 0,
    }
  }
  return (
    <motion.div className={`w-full h-[40%] md:w-[40%] md:h-full p-10 flex items-center justify-center md:justify-end md:items-end relative ${poppins.className}`} variants={variants} animate='animate' initial='init' transition={{
      delay: 0,
      duration: 2,
      type: 'spring',
      ease: 'easeInOut'
    }}>
      <div className="h-[50dvh] w-[50%] md:w-[60%] bg-gradient-to-b from-scheme-ash-blue to-scheme-yellow rounded-md self-center md:self-start flex items-start justify-center">
        <Image src={globeBG} className='w-full h-[60%] object-cover opacity-[0.2]'/>
      </div>
      <p className={`absolute bottom-16 left-[9%] sm:left-[15%] md:left-[17%] text-7xl lg:text-8xl font-bold  text-scheme-ash-blue-2 text-shadow -rotate-90 ${unifraktur.className}`}>About</p>
    </motion.div>
  )
}

export default AboutImage