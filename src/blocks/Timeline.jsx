import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, Rocket, Code2, Bug, Trophy, Shield, Cpu, Activity } from 'lucide-react';

const timelineData = [
  { phase: "Planning", details: "REGISTRATIONS // TEAM_FORMATION", icon: ClipboardList, code: "NODE_01", time: "09:00", status: "STABLE" },
  { phase: "Infiltration", details: "CODING_BEGINS // IDEATION_PROTOCOL", icon: Rocket, code: "NODE_02", time: "11:00", status: "ACTIVE" },
  { phase: "Execution", details: "MID_POINT_CHECK // SYSTEM_DEV", icon: Code2, code: "NODE_03", time: "22:00", status: "PENDING" },
  { phase: "Debugging", details: "REFINEMENT // FINAL_SUBMISSION", icon: Bug, code: "NODE_04", time: "08:00", status: "ENCRYPTED" },
  { phase: "Grand Finale", details: "WINNERS_ANNOUNCED // END_OF_LINE", icon: Trophy, code: "NODE_05", time: "12:00", status: "LOCKED" }
];

function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white py-32 px-6 font-mono overflow-hidden relative min-h-screen flex items-center">
      {/* Background: Digital Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top HUD Bar */}
        <div className="flex justify-between items-end mb-20 border-b border-red-900/30 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-red-600 text-[10px] font-black tracking-[0.4em]">
              <Shield size={12} /> SYSTEM: GDG_IILM_OS_V2.6
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              MISSION <span className="text-red-600">LOG</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Active_Session_Node</div>
            <div className="text-xl font-bold text-red-500 tabular-nums">0{activeIndex + 1} // 05</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Tactical Selection Vertical List */}
          <div className="lg:col-span-4 space-y-3">
            {timelineData.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`w-full relative group flex items-center justify-between p-4 border-l-2 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-red-600/20 to-transparent border-red-600' 
                    : 'border-zinc-800 hover:border-red-900/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-black ${activeIndex === index ? 'text-red-500' : 'text-zinc-600'}`}>
                    [{item.code}]
                  </span>
                  <span className={`text-lg font-bold uppercase ${activeIndex === index ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                    {item.phase}
                  </span>
                </div>
                {activeIndex === index && (
                  <Activity size={16} className="text-red-600 animate-pulse" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right: The Floating Command Interface */}
          <div className="lg:col-span-8 perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, rotateY: 15, x: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, rotateY: 0, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, rotateY: -15, x: -50, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                {/* Main Glass Card */}
                <div className="bg-zinc-950/80 border-2 border-red-600/40 p-10 backdrop-blur-md shadow-[20px_20px_60px_rgba(220,38,38,0.1)] relative overflow-hidden">
                  
                  {/* Decorative Scanline */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(220,38,38,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan pointer-events-none" />

                  {/* Top Details */}
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-5 border-2 border-red-600 bg-red-600/10 text-red-600">
                      {React.createElement(timelineData[activeIndex].icon, { size: 40 })}
                    </div>
                    <div className="text-right uppercase tracking-[0.2em] space-y-2">
                      <div className="text-[10px] text-zinc-500">Node_Status</div>
                      <div className="text-sm font-black text-red-500 animate-pulse">{timelineData[activeIndex].status}</div>
                      <div className="text-[10px] text-zinc-500 pt-4">Timestamp</div>
                      <div className="text-sm font-bold text-white italic">{timelineData[activeIndex].time} HRS</div>
                    </div>
                  </div>

                  {/* Phase Title */}
                  <h3 className="text-5xl font-black italic uppercase text-white mb-6 tracking-tighter">
                    {timelineData[activeIndex].phase}
                  </h3>

                  {/* Terminal Output */}
                  <div className="bg-black/50 border border-zinc-800 p-6 font-mono text-xs md:text-sm leading-relaxed text-zinc-400">
                    <div className="flex items-center gap-2 mb-3 text-red-600/50 text-[10px]">
                       <Cpu size={12} /> CORE_PROCESS_EXECUTING...
                    </div>
                    <p className="text-white mb-2"><span className="text-red-600 font-bold">$</span> RUN ./protocols/mission_init.sh</p>
                    <p className="">&gt; {timelineData[activeIndex].details}</p>
                    <p className="opacity-50 mt-2">&gt; Integrity: Verified_OK</p>
                    <p className="opacity-50">&gt; Logs: Encrypted_AES_256</p>
                  </div>

                  {/* Static Corner Accents */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-600/20" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-600/20" />
                </div>

                {/* Floating Meta Boxes */}
                <div className="absolute -bottom-6 -right-6 bg-red-600 text-black px-4 py-2 font-black italic text-sm tracking-widest shadow-xl">
                  GDG_IILM_2026
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes scan {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }
        .animate-scan { animation: scan 10s linear infinite; }
      `}</style>
    </section>
  );
}

export default Timeline;