import './App.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const heroRef = useRef(null)
  const buildingRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const building = buildingRef.current
    const title = titleRef.current

    if (!hero || !building || !title) return

    // Set transform origin to center
    gsap.set(building, { transformOrigin: 'center center' })

    // Hide navbar during zoom
    const navbar = document.querySelector('.fixed')
    
    // Create timeline for scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '+=200%',
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        markers: false, // Set to true for debugging
        onUpdate: (self) => {
          // Hide navbar when scrolling starts
          if (navbar) {
            if (self.progress > 0.05) {
              navbar.style.opacity = '0'
              navbar.style.pointerEvents = 'none'
            } else {
              navbar.style.opacity = '1'
              navbar.style.pointerEvents = 'auto'
            }
          }
        },
        onLeave: () => {
          // Show navbar when animation completes
          if (navbar) {
            navbar.style.opacity = '1'
            navbar.style.pointerEvents = 'auto'
          }
        },
        onEnterBack: () => {
          // Hide navbar when scrolling back
          if (navbar) {
            navbar.style.opacity = '0'
            navbar.style.pointerEvents = 'none'
          }
        }
      }
    })

    // Animate building zoom and title fade
    tl.to(building, {
      scale: 5,
      duration: 0.6,
      ease: 'power1.inOut',
    }, 0)
    .to(title, {
      opacity: 0,
      y: -50,
      duration: 0.3,
      ease: 'power1.out',
    }, 0)
    .to(hero, {
      opacity: 0,
      duration: 0.4,
      ease: 'power1.in',
    }, 0.6)

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      // Reset navbar visibility
      if (navbar) {
        navbar.style.opacity = '1'
        navbar.style.pointerEvents = 'auto'
      }
    }
  }, [])

  return (
    <div ref={heroRef} className='hero h-[100vh] w-full text-white flex flex-col items-center justify-center overflow-hidden relative px-4'>
      {/* Title */}
      <h1 ref={titleRef} className='hero-title text-4xl sm:text-6xl lg:text-8xl font-bold tracking-wider mb-6 sm:mb-8 fade-in-up relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4'>
        <span className='text-gray-300'>HACK</span>
        <span className='bg-[#E10600] text-gray-300 px-2 sm:px-3 lg:px-4 py-1 rounded-md'>O'</span>
        <span className='text-gray-300'>CLOCK</span>
      </h1>

      {/* Building Image */}
      <div className='w-full max-w-md sm:max-w-2xl lg:max-w-6xl xl:max-w-7xl fade-in-delay-1 relative z-20'>
        <img
          ref={buildingRef}
          src="/building.svg"
          alt="Building"
          className='w-full h-auto object-contain'
        />
      </div>
    </div>
  )
}

export default App
