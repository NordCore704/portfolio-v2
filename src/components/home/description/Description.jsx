import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { DescriptionText, CardMain } from '@/exports'
const Description = () => {


  return (
    <div className='min-h-screen bg-scheme-dark-blue flex flex-col'>
       <DescriptionText />
        <CardMain />
    </div>
  )
}

export default Description