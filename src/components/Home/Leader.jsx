import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Leader = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className='flex flex-col items-center px-4 py-10 gap-8 md:gap-14 minor-bg'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h5 className="bg-blue-100 text-blue-800 border border-blue-200 w-fit px-3 py-0.5 text-xs md:text-sm rounded-full font-semibold">Leadership</h5>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>School Leaders and Icons</h2>
            </div>

            <p className='text-color-dark font-light text-center md:text-xl'>Honoring those who have shaped our institution's legacy</p>
        </div>

        {/* Leaders */}
        <div className='flex flex-col lg:flex-row lg:justify-around gap-8 lg:gap-0 w-full md:w-[80%] lg:w-[92%]'>
            <div className='flex flex-col items-center gap-5 pb-5 rounded-xl lg:w-[28%] border border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden'>
                <div className='h-[350px] md:h-[450px] lg:h-[380px] w-full'>
                    <img src={assets.founder} alt="Founder Image" className='h-full w-full rounded-t-xl' />
                </div>

                <div className='flex flex-col items-center text-center text-color-dark gap-2 px-4 lg:w-[90%] md:my-5'>
                    <h3 className='font-bold text-xl'>Late Pa Jonathan Durojaiye Odebunmi</h3>
                    <p className='text-[#1E40AF] font-semibold'>Founder</p>
                </div>
            </div>
            
            <div className='flex flex-col items-center gap-5 pb-5 rounded-xl lg:w-[28%] border border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden'>
                <div className='h-[350px] md:h-[450px] lg:h-[380px] w-full'>
                    <img src={assets.presalum} alt="Founder Image" className='h-full w-full rounded-t-xl' />
                </div>

                <div className='flex flex-col items-center text-center text-color-dark gap-2 px-4 lg:w-[90%] md:my-5'>
                    <h3 className='font-bold text-xl'>Alhaji Kabir Omosanya</h3>
                    <p className='text-[#1E40AF] font-semibold'>National President, PREGSOSA</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-5 pb-5 rounded-xl lg:w-[28%] border border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden'>
                <div className='h-[350px] md:h-[450px] lg:h-[380px] w-full'>
                    <img src={assets.bot_1} alt="Founder Image" className='h-full w-full rounded-t-xl' />
                </div>

                <div className='flex flex-col items-center text-center text-color-dark gap-2 px-4 lg:w-[90%] md:my-5'>
                    <h3 className='font-bold text-xl'>Dr. Paul Abiodun</h3>
                    <p className='text-[#1E40AF] font-semibold lg:w-[50%]'>Chairman BOT, PREGSOSA</p>
                </div>
            </div>
        </div>

        <Link to="/gallery" onClick={scrollToTop} className="border border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white bg-transparent px-6 py-2 rounded cursor-pointer">
            See More
        </Link>
    </div>
  )
}

export default Leader