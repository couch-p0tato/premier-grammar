import React from 'react'
import { Award, Users, BookOpen, Star } from 'lucide-react';

const achievements = [
    {
        icon: <Award className='w-full h-full' />,
        title: "Celebrated 65 years in 2024",
        desc: "Six and a half decades of educational excellence",
    },
    {
        icon: <Users className='w-full h-full' />,
        title: "Active Alumni Network (PREGSOSA)",
        desc: "Strong community of successful graduates",
    },
    {
        icon: <BookOpen className='w-full h-full' />,
        title: "Infrastructure Upgrades",
        desc: "Science Lab, Admin Block, Hostels, Pavilion",
    },
    {
        icon: <Star className='w-full h-full' />,
        title: "Alumni Awarded for Leadership",
        desc: "Recognition for outstanding service to society",
    },
    
]

const Milestones = () => {
  return (
    <div className='flex flex-col items-center px-4 py-10 gap-6 lg:gap-14'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h5 className="bg-blue-100 text-blue-800 border border-blue-200 w-fit px-3 py-0.5 text-xs md:text-sm rounded-full font-semibold">Excellence</h5>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>65+ Years of Excellence</h2>
            </div>

            <p className='text-color-dark font-light text-center md:text-xl'>Decades of unwavering commitment to academic excellence and character development</p>
        </div>

        <div className='flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center gap-5'>
            {achievements.map((achievement, index) => (
                <div key={index} className='w-full md:h-full lg:min-h-[250px] flex flex-col items-center text-center gap-2 lg:gap-4 py-5 lg:py-0 lg:justify-center px-6 md:px-12 lg:px-4 text-color-dark rounded-xl border-2 border-blue-100 hover:shadow-lg transition-shadow duration-300'>
                    <div className='text-[#1E40AF] w-8 h-8'>{achievement.icon}</div>

                    <h5 className='font-bold text-xl'>{achievement.title}</h5>

                    <p className='font-light'>{achievement.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Milestones