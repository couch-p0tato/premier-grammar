import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const AdmissionFly = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className='flex flex-col items-center px-4 py-10 lg:py-14 gap-8 md:gap-14'>
        <div className='w-[90%] md:w-[70%]'>
            <img src={assets.admiss} alt="Admission Flyer" className='w-full h-full' />
        </div>

        <Link to="/contact" onClick={scrollToTop} className="border border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white bg-transparent px-6 py-2 rounded cursor-pointer">
            Get In Touch
        </Link>
    </div>
  )
}

export default AdmissionFly