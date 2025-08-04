import React from 'react'
import { Building, Clock, Mail, MapPin, Phone } from 'lucide-react'

const ContactInfo = () => {
  return (
    <div className='flex flex-col items-center px-4 py-10 gap-8 md:gap-14 minor-bg'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-3 md:gap-5'>
                <h5 className="bg-blue-100 text-blue-800 border border-blue-200 w-fit px-3 py-0.5 text-xs md:text-sm rounded-full font-semibold">Contact Info.</h5>
                <h2 className='text-3xl md:text-4xl font-bold text-color-dark text-center'>School Contact Information</h2>
            </div>

            <p className='text-color-dark font-light text-center md:text-xl'>Visit us, call us, or reach out through any of the following channels</p>
        </div>

        <div className='w-full flex flex-col gap-10 md:flex-row md:justify-between md:gap-0'>
            <div className='flex flex-col gap-6 w-full md:w-[48%] lg:w-[49%]'>
                <div className='border border-blue-100 shadow-lg bg-white p-4 rounded w-full flex gap-3 side-style'>
                    <div className='rounded-full bg-blue-100 h-fit p-2'>
                        <MapPin className='h-5 w-5 text-blue-600' />
                    </div>

                    <div className='flex flex-col gap-2 text-color-dark'>
                        <h4 className='font-semibold text-base'>School Address</h4>
                        
                        <div className='text-sm font-light flex flex-col gap-1'>
                            <p>Premier Grammar School</p>
                            <p>Lafenwa, Abeokuta</p>
                            <p>Oyo State, Nigeria</p>
                        </div>
                    </div>
                </div>
                
                <div className='border border-blue-100 shadow-lg bg-white p-4 rounded w-full flex gap-3 side-style'>
                    <div className='rounded-full bg-blue-100 h-fit p-2'>
                        <Phone className='h-5 w-5 text-blue-600' />
                    </div>

                    <div className='flex flex-col gap-2 text-color-dark'>
                        <h4 className='font-semibold text-base'>Phone Numbers</h4>
                        
                        <div className='text-sm font-light flex flex-col gap-1'>
                            <p>Main Office: +234 XXX XXX XXXX</p>
                            <p>Admissions: +234 XXX XXX XXXX</p>
                            <p>Principal's Office: +234 XXX XXX XXXX</p>
                        </div>
                    </div>
                </div>

                <div className='border border-blue-100 shadow-lg bg-white p-4 rounded w-full flex gap-3 side-style'>
                    <div className='rounded-full bg-blue-100 h-fit p-2'>
                        <Mail className='h-5 w-5 text-blue-600' />
                    </div>

                    <div className='flex flex-col gap-2 text-color-dark'>
                        <h4 className='font-semibold text-base'>Email Address</h4>
                        
                        <div className='text-sm font-light flex flex-col gap-1'>
                            <p>General Inquiries: info@premiergrammar.edu.ng</p>
                            <p>Admissions: admissions@premiergrammar.edu.ng</p>
                            <p>Principal: principal@premiergrammar.edu.ng</p>
                        </div>
                    </div>
                </div>

                <div className='border border-blue-100 shadow-lg bg-white p-4 rounded w-full flex gap-3 side-style'>
                    <div className='rounded-full bg-blue-100 h-fit p-2'>
                        <Clock className='h-5 w-5 text-blue-600' />
                    </div>

                    <div className='flex flex-col gap-2 text-color-dark'>
                        <h4 className='font-semibold text-base'>Office Hours</h4>
                        
                        <div className='text-sm font-light flex flex-col gap-1'>
                            <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                            <p>Saturday: 9:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:w-[48%] lg:w-[49%] flex flex-col gap-4 border border-blue-100 shadow-lg bg-white h-full p-5'>
                <div className='flex gap-2 items-center text-color-dark'>
                    <Building />
                    <h4 className='font-semibold text-base'>School Location</h4>
                </div>

                <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                    {/* Placeholder for map - you can replace with actual map embed */}
                    {/* <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.666676197393!2d3.3102324999999997!3d7.1644777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4d7935bc4009%3A0x413efac8dd202871!2sPremier%20Grammar%20school!5e0!3m2!1sen!2sng!4v1753976079656!5m2!1sen!2sng" width="600" height="450" loading="lazy" /> */}

                    <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                      <div className="text-center flex flex-col items-center gap-2">
                            <MapPin className="h-16 w-16 text-blue-600 mb-2" />

                            <h4 className="text-lg font-semibold text-blue-900">Premier Grammar School</h4>

                            <p className="text-gray-600">Lafenwa, Abeokuta, Ogun State</p>

                            <button onClick={() => window.open('https://maps.app.goo.gl/8xhFECbW7CVVPV6R6')} className="border border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white bg-transparent px-6 py-2 rounded cursor-pointer mt-3" >
                                View on Google Maps
                            </button>
                      </div>
                    </div>
                </div>

                <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex flex-col gap-2 p-4'>
                    <h4 className='font-semibold text-base text-color-dark'>Getting Here</h4>

                    <p>The school is easily accessible by public transport and private vehicles. Landmark references include the Lafenwa Market and major bus stops in the area.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo