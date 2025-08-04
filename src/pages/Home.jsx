import React from 'react'
import Hero from '../components/Home/Hero'
import History from '../components/Home/History'
import Vision from '../components/Home/Vision'
import Milestones from '../components/Home/Milestones'
import Leader from '../components/Home/Leader'
import Testimonials from '../components/Home/Testimonials'
import Gallery from '../components/Home/Gallery'

const Home = () => {
  return (
    <div>
        <Hero />
        <History />
        <Vision />
        <Milestones />
        <Leader />
        <Testimonials />
        <Gallery />
    </div>
  )
}

export default Home