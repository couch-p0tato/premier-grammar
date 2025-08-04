import React, { useState } from 'react'
import { ZoomIn, X } from 'lucide-react'
import { assets, boardMembers } from '../../assets/assets'

const GalleryBot = () => {

    const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className='minor-bg flex flex-col items-center px-4 py-10 gap-8 md:gap-14'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>Board of Trustees</h2>
            </div>

            <p className='text-color-dark font-light text-center md:text-xl'>Distinguished members providing strategic guidance and governance</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* Card */}
            {boardMembers.map((member, index) => (
            <div key={index} className="border-2 border-blue-100 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(member.image)}>
                <div className="relative h-90 lg:h-80 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <ZoomIn className="h-4 w-4 text-blue-600" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-color-dark mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.caption}</p>
                  <p className="text-[#1E40AF] font-semibold mb-3">{member.title}</p>
                </div>
            </div>
            ))}
        </div>

        <div>
            <img src={assets.bot_members} alt="" />
        </div>

        {/* Simple Lightbox Modal */}
        {selectedImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                <div className="relative h-[60vh] md:h-[65vh] lg:h-[70vh] w-[80%] lg:w-[40%]">
                    <img src={selectedImage || "/placeholder.svg"} alt="Gallery Image" className="h-full w-full rounded-lg" />

                    <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors cursor-pointer">
                        <X className="h-6 w-6 text-gray-800" />
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default GalleryBot