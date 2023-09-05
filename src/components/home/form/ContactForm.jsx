import React from 'react'
import { Form, FormText, } from '@/exports'

const ContactForm = () => {
  return (
    <div className='w-full flex flex-col mb-10 md:flex-row gap-5'>
        <FormText />
        <Form />
    </div>
  )
}

export default ContactForm