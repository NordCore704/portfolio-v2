import React from 'react'

const Success = ({ setShowSuccess }) => {
    const handleClick = () => {
        setShowSuccess(false)
        document.body.classList.remove('overflow-hidden')
    }
  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-scheme-ash-blue opacity-85 z-30 gap-5 top-0 left-0 w-[100dvw] h-[100dvh]'>
        <div className="bg-scheme-gray p-3 opacity-95 rounded-md shadow-lg" >
    <p className=''>Message sent successfully</p>
        </div>
        <button className="bg-scheme-yellow p-2 opacity-100 text-white rounded-md" onClick={handleClick}>Go Back</button>
    </div>
  )
}

export default Success