import React from 'react'
import { DisplayOne, DisplayTwo, } from '@/exports'

const WorkDisplayMain = () => {
  return (
    <div className='flex flex-col sm:flex-row min-h-screen w-full'>
        <DisplayOne />
        <DisplayTwo />
    </div>
  )
}

export default WorkDisplayMain