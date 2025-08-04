import React from 'react'
import { Send } from 'lucide-react'

const ContactForm = () => {
  return (
    <div className='flex flex-col items-center px-4 py-10 lg:py-14 gap-8 md:gap-14'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h5 className="bg-blue-100 text-blue-800 border border-blue-200 w-fit px-3 py-0.5 text-xs md:text-sm rounded-full font-semibold">Get In Touch</h5>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>Send Us a Message</h2>
            </div>

            <p className='text-color-dark font-light text-center md:text-xl'>Fill out the form below and we'll get back to you as soon as possible</p>
        </div>

        <div className="border-2 border-blue-100 shadow-md md:shadow-xl p-8 rounded-lg w-full md:w-[90%] lg:w-[80%]">
            <form className="space-y-6 flex flex-col items-center">
                <div className="grid md:grid-cols-2 gap-6 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="text-color-dark font-medium">
                            Full Name *
                        </label>
                        <input id="fullName" name="fullName" type="text" required className="border border-blue-200 focus:border-blue-400 outline-none p-2 rounded-md text-light text-color-dark" placeholder="Enter your full name" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-color-dark font-medium">
                            Email Address *
                        </label>
                        <input id="email" name="email" type="email" required className="border border-blue-200 focus:border-blue-400 outline-none p-2 rounded-md" placeholder="Enter your email address" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-color-dark font-medium">
                            Phone Number (Optional)
                        </label>
                        <input id="phone" name="phone" type="tel" className="border border-blue-200 focus:border-blue-400 outline-none p-2 rounded-md" placeholder="Enter your phone number" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-color-dark font-medium">
                            Subject *
                        </label>
                        <input id="subject" name="subject" type="text" required className="border border-blue-200 focus:border-blue-400 outline-none p-2 rounded-md" placeholder="What is this regarding?"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="message" className="text-color-dark font-medium">
                        Message *
                    </label>

                    <textarea id="message" name="message" required className="border border-blue-200 focus:border-blue-400 outline-none min-h-[120px] p-2 rounded-md" placeholder="Please provide details about your inquiry..." />
                </div>

                
                <button type="submit" size="lg" className="bg-[#1E40AF] hover:bg-blue-600 text-white mt-5 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-3 cursor-pointer" >
                    <Send className="h-5 w-5" />
                    Send Message
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm