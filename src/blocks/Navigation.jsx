import React from 'react'

function Navigation() {
    return (
        /* The container now uses a subtle drop shadow and perfect centering */
        <div className='fixed left-1/2 top-6 -translate-x-1/2 w-fit z-[100] group'>
            {/* Outer Glow/Border - Removed pt-4 for perfect centering */}
            <div className='relative flex justify-center items-center p-[2px] rounded-full bg-gradient-to-r from-red-900/50 via-red-600 to-red-900/50 shadow-[0_0_20px_rgba(220,38,38,0.3)]'>
                
                {/* Main Nav Body */}
                <div className='flex justify-between items-center rounded-full px-6 py-2 gap-12 font-mono bg-black/90 backdrop-blur-xl border border-white/5'>
                    
                    {/* Brand/Logo with Glitch Effect on Hover */}
                    <a href="/" className='text-white font-black tracking-tighter text-xl italic group-hover:text-red-500 transition-colors duration-300'>
                        GDG<span className='text-red-600 font-inter'>.</span>
                    </a>

                    {/* Navigation Links */}
                    <ul className='flex justify-center items-center gap-1 font-medium text-xs tracking-widest uppercase'>
                        <a href="/about" className='hidden sm:block text-white/60 hover:text-red-500 hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300'>
                            About
                        </a>
                        <a href="#sponsors" className='hidden sm:block text-white/60 hover:text-red-500 hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300'>
                            Sponsors
                        </a>
                        <a href="/contact" className='hidden sm:block text-white/60 hover:text-red-500 hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300'>
                            Contact
                        </a>
                        
                        {/* High-Contrast Register Button */}
                        <a 
                            href="https://unstop.com/o/FR4u6KJ?lb=ui8PNdgS&utm_medium=Share&utm_source=somilwor24919&utm_campaign=Online_coding_challenge" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='ml-4 bg-red-600 text-white font-black px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(220,38,38,0.5)] active:scale-95'
                        >
                            REGISTER
                        </a>
                    </ul>
                </div>

                {/* Decorative "Scanning" Line */}
                <div className='absolute inset-0 w-full h-full rounded-full pointer-events-none overflow-hidden'>
                    <div className='absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[45deg] animate-[shimmer_3s_infinite]' />
                </div>
            </div>
        </div>
    )
}

export default Navigation