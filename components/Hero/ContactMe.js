import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactMe = () => {
  return (

    <div className='mx-8 px-8 relative border-orange border rounded-tl-full rounded-br-full md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
      <h3 className='absolute bg-orange text-black py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact me</h3>
      <p className='text-center md:text-left'>
        <a href='https://www.linkedin.com/in/robertorodriguesazevedo/' title='LinkedIn Profile'>
          <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://github.com/robertoarodrigues' title='GitHub Profile'>
          <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <br />
        <span className='inline-block mt-4'>or drop a line: robertoazevedorodrigues@gmail.com</span>
      </p>
    </div>
  )
}
export default ContactMe
