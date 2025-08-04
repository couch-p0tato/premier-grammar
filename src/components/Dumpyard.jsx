// import React from 'react'

// const Dumpyard = () => {
//   return (
//     <div>
//         <div className="absolute inset-0 flex flex-col text-color items-center justify-center z-30">
//           <div className='flex flex-col items-center w-full gap-8 lg:gap-10 mb-6'>
//             <div className="bg-white/20 text-color-light border border-white/30  px-5 py-2 rounded-full cursor-pointer">
//               <h3>Flagship School Status</h3>
//             </div>

//             <div className='flex flex-col items-center gap-5 w-[70%]'>
//               <h1 className="text-[2.6rem] md:text-6xl lg:text-7xl font-bold text-center leading-normal lg:leading-22 text-color-light">
//                 Premier Grammar School, <br /> <span className='text-color-blue'>Lafenwa Abeokuta</span>
//               </h1>

//               <p className='italic text-sm  text-color-blue'>"Inspiring Excellence Since 1959"</p>
//             </div>

//             <button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-2 rounded-full font-semibold shadow-lg cursor-pointer">
//                 <a href="#" className='w-full'>Explore Our Legacy</a>
//             </button>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Dumpyard



// Previous GalleryLeader

// import React, { useState } from 'react'
// import { leaderCardData } from '../assets/assets';

// const GalleryLeader = () => {

//     const [stopScroll, setStopScroll] = React.useState(false);

//     const cardData = [
//         {
//             title: "Unlock Your Creative Flow",
//             image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
//         },
//         {
//             title: "Design Your Digital Future",
//             image: "https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60",
//         },
//         {
//             title: "Build with Passion, Ship with Pride",
//             image: "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
//         },
//         {
//             title: "Think Big, Code Smart",
//             image: "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60",
//         },
//     ];

//   return (
//     <div className='flex flex-col items-center px-4 py-10 gap-8 md:gap-14'>
//         <div className='w-full flex flex-col gap-10'>
//             <div className='flex flex-col items-center lg:items-start gap-5'>
//                 <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>School Leaders and Icons</h2>
//             </div>

//             {/* Swiper */}
//             <div className="overflow-hidden w-[98%] relative mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
//                 <div className="hidden lg:block absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

//                 <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
//                     <div className="flex">
//                         {[...leaderCardData, ...leaderCardData].map((card, index) => (
//                             <div key={index} className="w-[22rem] mx-4 h-[25rem] relative group hover:scale-90 rounded-2xl transition-all duration-300">
//                                 <img src={card.image} alt="card" className="w-full h-full object-cover" />
//                                 <div className="flex flex-col gap-4 text-center items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
//                                     <h3 className='font-bold text-xl text-white'>{card.name}</h3>
//                                     <p className="text-color-blue text-lg font-semibold text-center">{card.title}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
                
//                 <div className="hidden lg:block absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default GalleryLeader

// ================================================================================================================