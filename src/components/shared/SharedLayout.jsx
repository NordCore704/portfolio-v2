import React from 'react'
import { Navbar, Footer} from '@/exports'

const SharedLayout = ({ children }) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default SharedLayout