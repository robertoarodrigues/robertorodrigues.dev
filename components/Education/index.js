import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'GoStack',
    subject: 'Bootcamp',
    institution: 'Rocketseat'
  },
  {
    degree: 'Power Sites',
    subject: 'Premium Course',
    institution: 'DevPleno'
  },
  {
    degree: 'DevReactJS',
    subject: 'Premium Course',
    institution: 'DevPleno'
  },
  {
    degree: 'Fullstack Master',
    subject: 'Premium Course',
    institution: 'DevPleno'
  },
  {
    degree: 'Graduation´s Degree',
    subject: 'Information Systems',
    institution: 'FSMA - Faculdade Salesiana Maria Auxiliadora'
  }
]

const Education = () => {
  return(
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-green'>My Education</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree}  />
        ))}
      </div>
    </div>
  )
}
export default Education
