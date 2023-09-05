import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { hero } from '@/exports/image-exports'

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
    <motion.div className='w-full h-[40%] md:w-[40%] md:h-full p-10 flex items-center justify-center' variants={variants} animate='animate' initial='init' transition={{
      delay: 0,
      duration: 2,
      type: 'spring',
      ease: 'easeInOut'
    }}>
      <Image src={hero} className='rounded-full md:rounded-md grayscale'/>
    </motion.div>
  )
}

export default AboutImage