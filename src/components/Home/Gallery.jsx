import React from 'react'
import { assets, galleryData } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Gallery = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className='flex flex-col items-center px-4 py-10 gap-10 lg:gap-14'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h5 className="bg-blue-100 text-blue-800 border border-blue-200 w-fit px-3 py-0.5 text-xs md:text-sm rounded-full font-semibold">Gallery</h5>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>A Glimpse into Our Journey</h2>
            </div>

            <p className='text-color-dark font-light text-center md:text-xl'>Capturing moments of excellence and growth</p>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:w-[98%]'>
            {galleryData.map((data, index) => (
                <div key={index} className='h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <img src={data.img} alt="" className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
            ))}
        </div>

        <Link to="/gallery" onClick={scrollToTop} className="border border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white bg-transparent px-6 py-2 rounded cursor-pointer">
            Load More Photos
        </Link>
    </div>
  )
}

export default Gallery