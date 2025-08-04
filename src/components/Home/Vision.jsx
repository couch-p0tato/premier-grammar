import React from 'react'

const Vision = () => {
  return (
    <div className='vis-bg py-12 md:py-16 lg:py-24 px-8 flex flex-col items-center'>
        <div className='flex flex-col gap-6 md:gap-10 lg:gap-6 w-full md:w-[80%] lg:w-[78%]'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h5 className="bg-blue-100 text-blue-800 border border-blue-200 w-fit px-3 py-0.5 text-xs md:text-sm rounded-full font-semibold">Vision</h5>
                <h2 className='text-3xl md:text-4xl font-bold text-color-light'>Our Vision</h2>
            </div>

            <div className='text-color-blue md:text-lg text-center leading-loose'>
                <p>To nurture well-rounded individuals equipped with knowledge, character, and creativity—ready to contribute meaningfully to society. We aim to blend tradition with innovation, ensuring our students thrive in a rapidly changing world.</p>
            </div>
        </div>
    </div>
  )
}

export default Vision