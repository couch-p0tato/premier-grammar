import React, { useState } from 'react'
import { ZoomIn, X, Calendar } from 'lucide-react'
import { memorableEvents } from '../../assets/assets'

const GalleryHighlights = () => {

    const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className='flex flex-col items-center px-4 py-10 gap-8 md:gap-14'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>Highlights & Celebrations</h2>
            </div>

            <p className='text-color-dark font-light text-center md:text-xl'>Capturing the moments that define our community and celebrate out achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memorableEvents.map((event, index) => (
            <div key={index} className="border-2 border-blue-100 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(event.image)}>
                <div className="relative h-64 overflow-hidden">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="object-cover group-hover:scale-105 transition-transform duration-300"/>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-4 w-4 text-blue-600" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-1">{event.title}</h3>

                    <div className="flex items-center text-sm text-blue-200">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                  </div>
                </div>

                <div className="p-4 group-hover:bg-blue-50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{event.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                </div>
            </div>
            ))}
        </div>

        <button className="border border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white bg-transparent px-6 py-2 rounded cursor-pointer">
            Load More Photos
        </button>

        {/* Simple Lightbox Modal */}
        {selectedImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                <div className="relative max-w-4xl max-h-full">
                    <img src={selectedImage || "/placeholder.svg"} alt="Gallery Image" width={800} height={600} className="object-contain max-h-[80vh] rounded-lg"/>

                    <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors cursor-pointer">
                        <X className="h-6 w-6 text-gray-800" />
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default GalleryHighlights