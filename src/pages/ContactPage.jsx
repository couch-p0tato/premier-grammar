import React from 'react'
import MinorHero from '../components/MinorHero'
import ContactForm from '../components/Contact/ContactForm'
import ContactInfo from '../components/Contact/ContactInfo'

const ContactPage = () => {
  return (
    <div>
      <MinorHero
        section="Contact" 
        title="Get In Touch With Us" 
        text="Whether you're a prospective student, parent, alumnus, or partner, we're happy to hear from you." 
      />
      <ContactForm />
      <ContactInfo />
    </div>
  )
}

export default ContactPage