import React from 'react'

const History = () => {
  return (
    <div id='about' className='flex flex-col gap-5 md:gap-10 lg:flex-row py-10 md:py-14 lg:py-20 px-4 md:px-10'>
        <div className='flex flex-col items-center lg:items-start lg:justify-center gap-5 lg:gap-8 lg:w-[50%] lg:mb-4'>
            <div className='flex flex-col items-center lg:items-start gap-3 md:gap-5'>
                <h5 className="bg-blue-100 text-blue-800 border border-blue-200 w-fit px-3 py-0.5 text-xs md:text-sm rounded-full font-semibold">History</h5>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark'>Our History</h2>
            </div>

            <div className='flex flex-col gap-2.5 lg:gap-4 md:text-lg items-center lg:items-start text-justify text-color-dark font-light lg:text-left'>
                <p>Established on January 29, 1959, Premier Grammar School has stood as a beacon of academic excellence and moral leadership in Ogun State. Founded by the government to serve both boys and girls, the school has grown into a vibrant co-educational institution offering junior and senior secondary education.</p>

                <p>With over six decades of service, it continues to shape future leaders through quality teaching and community values.</p>
            </div>
        </div>

        <div className='relative h-[500px] md:h-[600px] lg:h-[500px] lg:w-[50%] rounded-2xl overflow-hidden'>
            <div className='element h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col justify-end'>
                <div className='flex flex-col text-color-light gap-2 md:gap-4'>
                    <h4 className='text-2xl md:text-3xl font-bold'>Late Pa Jonathan Durojaiye Odebunmi</h4>
                    <p className='md:text-lg'>FOUNDER</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History