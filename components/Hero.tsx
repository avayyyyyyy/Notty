import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-12 h-screen mx-20'>
      <div className='col-span-8 border-r flex justify-center h-full'>Main</div>
      <div className='col-span-4 flex justify-center h-full'>Submain</div>
    </div>
  )
}

export default Hero
