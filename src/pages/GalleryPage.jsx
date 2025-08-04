import React from 'react'
import MinorHero from '../components/MinorHero'
import GalleryLeader from '../components/Gallery/GalleryLeader'
import GalleryBot from '../components/Gallery/GalleryBot'
import GalleryHighlights from '../components/Gallery/GalleryHighlights'
import GalleryAside from '../components/Gallery/GalleryAside'

const GalleryPage = () => {
  return (
    <div>
        <MinorHero
            section="Gallery" 
            title="A Glimpse into Our Journey" 
            text="Capturing moments of excellence and growth" 
        />
        <GalleryLeader />
        <GalleryBot />
        <GalleryHighlights />
        <GalleryAside />
    </div>
  )
}

export default GalleryPage