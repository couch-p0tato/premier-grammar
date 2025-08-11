import React from 'react'
import MinorHero from '../components/MinorHero'
import AdmissionFly from '../components/AdmissionFly'

const Admission = () => {
  return (
    <div>
      <MinorHero
        section="Admission" 
        title="Shape Your Future With Us" 
        text="Be part of a school with over 65 years of proven excellence in education and character building." 
      />

      <AdmissionFly />
    </div>
  )
}

export default Admission