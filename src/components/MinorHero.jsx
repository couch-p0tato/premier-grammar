import React from 'react'

const MinorHero = ({ section, title, text }) => {
  return (
    <div className="relative w-full overflow-hidden">

      <div className='gradient-bg gradient-bg-2 z-30'>
        {/* Fixed Text Overlay */}
        <div className="absolute inset-0 flex flex-col text-color items-center justify-center z-30 px-8">
          <div className='flex flex-col items-center gap-5 lg:gap-8'>
            <div className='flex flex-col items-center gap-3 md:gap-5 lg:gap-6'>
                <h5 className="bg-blue-100 text-blue-800 border border-blue-200 w-fit px-3 py-0.5 text-xs md:text-sm lg:text-base rounded-full font-semibold">{section}</h5>
                <h2 className='text-[2.6rem] md:text-6xl lg:text-7xl font-bold text-white text-center'>{title}</h2>
            </div>

            <p className='text-color-blue font-light text-center md:text-xl'>{text}</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default MinorHero