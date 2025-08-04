import React from 'react'
import { Facebook } from 'lucide-react'

const GalleryAside = () => {
  return (
    <div className='bg-two flex flex-col items-center px-4 py-10 gap-8 md:gap-10'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>Follow Our Journey</h2>
            </div>

            <p className='text-color-dark font-light text-center md:text-xl'>Stay connected with Premier Grammar School through our social media channels</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 ">
            <button onClick={() => window.open('https://www.google.com/', '_blank')} className="border border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white bg-transparent px-6 py-2 rounded cursor-pointer flex items-center gap-1.5">
              <Facebook className="h-5 w-5" />
              National Facebook Page
            </button>

            <button onClick={() => window.open('https://www.google.com/', '_blank')} className="border border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white bg-transparent px-6 py-2 rounded cursor-pointer flex items-center gap-1.5">
              <Facebook className="h-5 w-5" />
              76/81 Set Facebook Page
            </button>
          </div>
    </div>
  )
}

export default GalleryAside