import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useEffect } from 'react'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        }
    }, [location]);


    return (
        <nav className="sticky top-0 w-full z-50 text-color-dark flex items-center justify-between px-3 md:px-6 lg:px-8 py-2 border-b border-gray-300 lg:border-none bg-white/90 backdrop-blur-sm transition-all">

            <Link to="/" className='flex flex-row items-center gap-2 md:gap-4'>
                <img src={assets.logo} alt="School Logo" className='w-[40px] md:w-[50px] lg:w-[60px]' />
                
                <h4 className='font-bold text-lg md:text-xl'>Premier Grammar School</h4>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 text-color-dark">
                <NavLink to="/"  className="under-style" onClick={scrollToTop}>Home</NavLink>
                <NavLink to="/#about" className="under-style">About Us</NavLink>
                <NavLink to="/gallery" className="under-style" onClick={scrollToTop}>Gallery</NavLink>
                <NavLink to="/events" className="under-style" onClick={scrollToTop}>Events</NavLink>
                <NavLink to="/contact" className="under-style" onClick={scrollToTop}>Contact Us</NavLink>
                <NavLink to="/#testimonials" className="under-style">Testimonials</NavLink>
            </div>

            {/* Mobile Menu */}
            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="lg:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#1E293B" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#1E293B" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#1E293B" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[55px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 md:px-8 text-sm lg:hidden`}>
                <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to="/#about" onClick={() => setOpen(false)}>About Us</NavLink>
                <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
                <NavLink to="/events" onClick={() => setOpen(false)}>Events</NavLink>
                <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
                <NavLink to="/#testimonials" onClick={() => setOpen(false)}>Admission</NavLink>
            </div>

        </nav>
    )
}

export default Navbar