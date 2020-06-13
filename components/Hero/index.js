import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
  return (
    <div className='md:grid lg:grid-cols-2 lg:pt-16 leading-none'>
      <div className='pt-16 lg:pt-32'>
        <h1 className='text-3xl uppercase pl-16'>Hi, I´m Roberto Rodrigues</h1>
        <h2 className='text-4xl font-bold lg:text-3xl uppercase pl-16'>Fullstack Developer</h2>
        <ContactMe />
      </div>
      <div><img src='/images/roberto-rodrigues.png'/></div>
    </div>
  )
}
export default Hero
