import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const About = () => {
  const terminalRef = useRef(null)

  useEffect(() => {
    const lines = terminalRef.current.querySelectorAll('.terminal-line')
    gsap.set(lines, { opacity: 0, x: -10 })
    
    gsap.to(lines, {
      opacity: 1,
      x: 0,
      stagger: 0.3,
      duration: 0.1,
      ease: "power1.in"
    })
  }, [])

  return (
    <div className="min-h-screen  bg-black text-red-600 font-mono p-4 sm:p-10 relative overflow-hidden">
      
      {/* Scanline Overlay Effect */}
      <div className="absolute inset-0   pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]"></div>

      {/* Header */}
      <div className="relative mt-20 mb-20">
        <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter italic text-red-700">
          <span className="relative inline-block hover:text-white transition-colors duration-300 cursor-crosshair">
            SYSTEM.BREACH()
            <span className="absolute top-0 left-0 -z-10 text-red-500 animate-pulse opacity-50 blur-sm">SYSTEM.BREACH()</span>
            <span className="absolute top-0 left-0 -z-20 text-red-900 opacity-80 translate-x-1 translate-y-1">SYSTEM.BREACH()</span>
          </span>
        </h2>
        <div className="h-[2px] w-full bg-red-600 opacity-40 mt-4 shadow-[0_0_20px_#ff0000]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Terminal - Dark Slate & Crimson */}
        <div ref={terminalRef} className="bg-[#0a0a0a] border border-red-900/50 p-6 rounded-sm shadow-[20px_20px_0px_rgba(153,0,0,0.1)] backdrop-blur-md">
          <div className="flex gap-2 mb-4 border-b border-red-900/30 pb-2 justify-between items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-900"></div>
              <div className="w-3 h-3 rounded-full bg-red-900/40"></div>
              <div className="w-3 h-3 rounded-full bg-red-900/10"></div>
            </div>
            <span className="text-[10px] text-red-900 uppercase tracking-widest">Auth: Root_Level</span>
          </div>
          
          <div className="space-y-3 text-sm sm:text-base leading-relaxed">
            <p className="terminal-line"><span className="text-red-500 font-bold">root@hackoclock:</span><span className="text-gray-500">~#</span> tail -f mission.log</p>
            <p className="terminal-line text-gray-400">{`> initializing_protocol... [OK]`}</p>
            <p className="terminal-line text-red-500/80">{`> We are the shadow in the codebase. The architects of the red-eye shift.`}</p>
            <p className="terminal-line text-red-500/80">{`> While the world sleeps, we commit.`}</p>
            <p className="terminal-line"><span className="text-red-500 font-bold">root@hackoclock:</span><span className="text-gray-500">~#</span> run manifest --v</p>
            <p className="terminal-line bg-red-900/20 text-red-200 px-1 inline-block">CRITICAL: ZERO DAY MENTALITY</p>
            <p className="terminal-line text-gray-500">{`> [01] NO BLOAT. ONLY POWER.`}</p>
            <p className="terminal-line text-gray-500">{`> [02] DESIGN AS A WEAPON.`}</p>
            <p className="terminal-line text-gray-500">{`> [03] BREAK THE LOOP.`}</p>
            <p className="terminal-line animate-pulse inline-block bg-red-600 w-2 h-5 align-middle ml-1"></p>
          </div>
        </div>

        {/* Info Grid - Minimalist Black/Red */}
        <div className="space-y-12">
          <div className="group border-r-4 border-red-700 pr-6 py-2 text-right hover:border-white transition-all duration-500">
            <h3 className="text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-red-600">ORIGIN_DATA</h3>
            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300">
              Forged in the void between 2 AM and sunrise. Hack O'Clock is not a service—it's a strike against the mundane. We build digital fortresses that look as sharp as they perform.
            </p>
          </div>

          <div className="group border-r-4 border-red-900 pr-6 py-2 text-right hover:border-red-600 transition-all duration-500">
            <h3 className="text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-red-600">EXECUTION</h3>
            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300">
              Our tech stack is a surgical blade. We prioritize raw speed and brutalist aesthetics. If a user doesn't feel the adrenaline, we haven't finished the job.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="fixed -bottom-10 -left-10 text-[15rem] font-black text-red-900/5 select-none -z-0 pointer-events-none">
        VOID
      </div>
    </div>
  )
}

export default About