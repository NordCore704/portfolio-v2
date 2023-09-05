import React from 'react'
import { WorkOne, WorkTwo, } from '@/exports'

const Work = () => {
  return (
    <div className='flex md:flex-row flex-col w-full min-h-screen'>
      <WorkOne />
      <WorkTwo />
    </div>
  )
}

export default Work