import React from 'react'
import { ContactText, ContactImages } from '@/exports'

const Contact = () => {
  return (
    <div className=' gap-5 w-full flex justify-center md:flex-row flex-col'>
      <ContactText />
      <ContactImages />
    </div>
  )
}

export default Contact