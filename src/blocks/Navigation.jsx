import React from 'react'

function Navigation() {
    return (
        <div className='flex fixed justify-center items-center w-full pt-4 z-50'>
            <div className='h-fit w-fit flex justify-stretch items-center shadow-md gap-20 px-8 py-2 font-p bg-black backdrop-blur-lg rounded-lg'>
                <a href="/" className='text-white font-bold text-h6'>
                    GDG
                </a>
                <ul className='flex justify-center items-center gap-2 font-normal text-white/50'>
                    <a href="#about" className='sm:block hover:text-white hover:font-medium transition-all duration-300 hover:scale-105 py-2 px-3 rounded-full hidden'>About</a>
                    <a href="#sponsors" className='sm:block hover:text-white hover:font-medium transition-all duration-300 hover:scale-105 py-2 px-3 rounded-full hidden'>Sponsors</a>
                    <a href="#contact" className='sm:block hover:text-white hover:font-medium transition-all duration-300 hover:scale-105 py-2 px-3 rounded-full hidden'>Contact</a>
                    <a href="https://unstop.com/o/FR4u6KJ?lb=ui8PNdgS&utm_medium=Share&utm_source=somilwor24919&utm_campaign=Online_coding_challenge" target="_blank" rel="noopener noreferrer" className='font-medium text-black transition-all duration-300 hover:scale-105 bg-white py-2 px-3 rounded-full'>Register</a>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
