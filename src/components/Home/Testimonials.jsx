import React, { useRef } from 'react'
import { Quote } from 'lucide-react';
import { testimonialCards } from '../../assets/assets';


const Testimonials = () => {

    const mobileRef = useRef(null);
    
    const pauseAnimation = (ref) => {
        if (ref.current) ref.current.style.animationPlayState = "paused";
    };

    const resumeAnimation = (ref) => {
        if (ref.current) ref.current.style.animationPlayState = "running";
    };

  return (
    <div id='testimonials' className='bg-two flex flex-col items-center px-4 py-10 gap-8 md:gap-14'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h5 className="bg-blue-100 text-blue-800 border border-blue-200 w-fit px-3 py-0.5 text-xs md:text-sm rounded-full font-semibold">Testimonials</h5>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>What Our Alumni Say</h2>
            </div>

            <p className='text-color-dark font-light text-center md:text-xl'>Voices from our distinguished graduates</p>
        </div>

        {/* Cards Start */}

        <div className='w-full py-12 overflow-hidden'>
            {/* Large screens */}
            <div className='hidden sm:flex flex-col gap-10'>
                {/* Top */}
                <div className='w-full'>
                    <div className='flex scroll-left w-max'>
                        {testimonialCards.map((test, i) => (
                            <div key={`top-${i}`} className='max-w-[400px] mx-4 bg-white p-6 text-color-dark rounded-xl flex flex-col justify-between gap-5 border-2 border-blue-100 hover:shadow-lg transition-shadow duration-300 side-style'>
                                <Quote className='text-[#1E40AF] w-8 h-8' />

                                <div className='italic font-light'>
                                    <p>"{test.text}"</p>
                                </div>

                                <div className='flex items-center gap-5'>
                                    <div className='bg-[#1E40AF] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold'>
                                        {test.icon}
                                    </div>

                                    <div className='flex flex-col text-xs'>
                                        <h5 className='font-semibold'>{test.name}</h5>
                                        <p className='text-gray-600'>Class of {test.year}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile screen */}
            <div
                className='sm:hidden w-full'
                onTouchStart={() => pauseAnimation(mobileRef)}
                onTouchEnd={() => resumeAnimation(mobileRef)}
            >
                <div ref={mobileRef} className='flex scroll-left w-max'>
                    {testimonialCards.map((test, i) => (
                        <div key={`top-${i}`} className='max-w-[400px] mx-4 bg-white p-6 text-color-dark rounded-xl flex flex-col gap-5 border-2 border-blue-100 hover:shadow-lg transition-shadow duration-300 side-style'>
                            <Quote className='text-[#1E40AF] w-8 h-8' />

                            <div className='italic font-light'>
                                <p>"{test.text}"</p>
                            </div>

                            <div className='flex items-center gap-5'>
                                <div className='bg-[#1E40AF] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold'>
                                    {test.icon}
                                </div>

                                <div className='flex flex-col text-xs'>
                                    <h5 className='font-semibold'>{test.name}</h5>
                                    <p className='text-gray-600'>Class of {test.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Cards End */}
    </div>
  )
}

export default Testimonials