import React from 'react'
import { CardOne, CardTwo, CardThree, } from '@/exports'

const CardMain = () => {
  return (
    <div className='w-full flex sm:h-[60dvh] flex-col md:flex-row md:gap-16 gap-5 items-center justify-center bg-scheme-ash-blue-2 relative'>
        <div className="top-0 sm:absolute sm:-top-8 flex flex-col sm:flex-row sm:gap-5 py-5 sm:py-2 md:py-0 w-full md:gap-16 gap-5 px-5 justify-center items-center">
        <CardOne />
        <CardTwo />
        <CardThree />
        </div>
       
    </div>
  )
}

export default CardMain