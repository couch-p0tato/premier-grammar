import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'
import Admission from './pages/Admission'

const App = () => {
  return (
    <div className='main-font'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/admission' element={<Admission />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App