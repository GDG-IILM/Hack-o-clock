import { useState, useEffect } from 'react'
import './App.css'
import Home from './blocks/Home'


function App() {

  return (
  <div className='hero h-[100vh] w-full text-white px-6 sm:px-12 lg:px-20 py-10 flex flex-col justify-between'>
    <div className='flex justify-center'>
      <nav className='flex gap-8 text-sm font-medium'>
        <a href="#" className='hover:text-gray-300 transition-colors'>Home</a>
        <a href="#" className='hover:text-gray-300 transition-colors'>About</a>
        <a href="#" className='hover:text-gray-300 transition-colors'>Features</a>
        <a href="#" className='hover:text-gray-300 transition-colors'>Signup</a>
      </nav>
    </div>
    
    <div className='flex flex-col justify-end pb-20'>
      <p className='text-[#E10600] text-sm font-bold mb-4 tracking-wider fade-in-up'>GDG IILM</p>
      <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 fade-in-delay-1'>HACK O' CLOCK</h1>
      <div className='flex items-center gap-4 text-sm mb-8 fade-in-delay-2'>
        <span>2025</span>
        <span>•</span>
        <span>Interactive Experience</span>
        <span>•</span>
        <span>Experimental</span>
      </div>
      <p className='max-w-xl text-base leading-relaxed mb-8 fade-in-delay-3'>
        Explore an immersive scroll-paragraphd interactive experience. Discover dynamic animations, smooth transitions, and innovative design techniques that push the boundaries of web experiences.
      </p>
      <div className='flex gap-4 fade-in-delay-4'>
        <button className='px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors flex items-center gap-2'>
          <span>▶</span> Play
        </button>
        <button className='px-6 py-3 bg-transparent border border-white font-semibold rounded hover:bg-white/10 transition-colors'>
          More Info
        </button>
      </div>
    </div>
  </div>
)
}

export default App
