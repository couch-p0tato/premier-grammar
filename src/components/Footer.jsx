import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className='footer-bg py-10 lg:py-14 px-4 lg:px-10 gap-6 lg:gap-10 flex flex-col items-start'>
        <div className='flex flex-col lg:flex-row lg:w-[95%] lg:justify-between gap-8 lg:gap-0'>
            <div className='flex flex-col gap-3'>
                <Link to="/" className='flex flex-row items-center gap-2' onClick={scrollToTop}>
                    <img src={assets.logo} alt="School Logo" className='w-[40px] md:w-[50px] lg:w-[60px]' />
                    
                    <h4 className='font-bold text-color-light text-xl'>Premier Grammar School</h4>
                </Link>

                <p className='text-sm italic text-color-blue'>Inspiring Excellence Since 1959</p>
            </div>

            <div className='flex flex-col items-start gap-5'>
                <h4 className='font-bold text-color-light text-xl'>Contact Information</h4>

                <div className='text-color-blue flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <MapPin />
                        Lafenwa, Abeokuta, Ogun State
                    </div>

                    <div className='flex gap-2 items-center'>
                        <Phone />
                        +234 XXXX XXXX XXXX
                    </div>

                    <div className='flex gap-2 items-center'>
                        <Mail />
                        info@premiergrammarmail.edu.ng
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='font-bold text-color-light text-xl'>Quick Links</h4>

                <div className='flex flex-col gap-3 text-color-blue'>
                    <Link to="">About Us</Link>
                    <Link to="">Admissions</Link>
                    <Link to="">Gallery</Link>
                    <Link to="">Events</Link>
                </div>
            </div>
        </div>

        <hr className='text-[#1E3A8A] w-full' />

        <div className='flex flex-col lg:flex-row w-full lg:justify-between items-center gap-6 lg:gap-0 text-color-blue'> 
            <div>
                <p>© 2025 Premier Grammar School, Lafenwa Abeokuta. All rights reserved</p>
            </div>

            <button className="bg-[#1E40AF] text-white hover:bg-blue-600 text-lg px-8 py-3 rounded-xl font-semibold shadow-lg cursor-pointer">
                <a href="#" className='w-full'>Get In Touch</a>
            </button>
        </div>
    </div>
  )
}

export default Footer