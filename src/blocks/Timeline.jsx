import React, { useState, useEffect, useRef } from 'react';
import { ClipboardList, Rocket, Code2, Bug, Trophy, Terminal } from 'lucide-react';

// --- Hacker Typewriter Hook ---
const HackerTypewriter = ({ text, start, speed = 40 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (start && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, start, speed]);

  return <span className="font-mono">{displayedText}{index < text.length && start && <span className="animate-pulse">_</span>}</span>;
};

function Timeline() {
  const timelineData = [
    { phase: "Planning the Blueprint", details: "REGISTRATIONS // TEAM_FORMATION", icon: ClipboardList, code: "0x001" },
    { phase: "Infiltration", details: "CODING_BEGINS // IDEATION_PROTOCOL", icon: Rocket, code: "0x002" },
    { phase: "Execution", details: "MID_POINT_CHECK // SYSTEM_DEV", icon: Code2, code: "0x003" },
    { phase: "Debugging", details: "REFINEMENT // FINAL_SUBMISSION", icon: Bug, code: "0x004" },
    { phase: "The Grand Finale", details: "WINNERS_ANNOUNCED // END_OF_LINE", icon: Trophy, code: "0x005" }
  ];

  return (
    <section className="bg-zinc-950 text-white px-6 sm:px-10 lg:px-20 py-24 relative overflow-hidden">
      {/* Background Matrix/Binary Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none font-mono text-[10px] leading-none overflow-hidden break-all select-none">
        {Array(20).fill("0101101001101010110100101101010110100101101").map((t, i) => <div key={i}>{t}</div>)}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-24 border-b border-white/10 pb-12">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 text-[#E10600] font-mono text-sm tracking-[0.3em] mb-4">
              <Terminal size={16} className="animate-pulse" />
              <span>OP_TIMELINE_V1.0</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              THE <span className="text-[#E10600]">MISSION</span> LOG
            </h2>
          </div>
          <div className="lg:w-2/3 flex items-end">
            <p className="text-gray-200 font-mono text-sm border-l-2 border-[#E10600] pl-6 max-w-xl">
              &gt; Tracking the evolution from initial handshake to final deployment. 
              Sequential execution of nodes is mandatory for system victory.
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Main Vertical Circuit Line */}
          <div className="absolute left-[23px] lg:left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#E10600] via-white/20 to-transparent" />

          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <TimelineNode key={index} item={item} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ item, index, isLeft }) {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);
  const Icon = item.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.5 });
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={nodeRef}
      className={`relative flex items-center justify-between w-full group ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Content Card */}
      <div className="w-full lg:w-[42%] ml-12 lg:ml-0">
        <div className="relative p-6 bg-zinc-900/50 border border-white/10 rounded-lg backdrop-blur-md group-hover:border-[#E10600]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(225,6,0,0.1)]">
          
          {/* Glitch Overlay for Number */}
          <div className="absolute -top-4 left-4 bg-black px-2 font-mono text-[#E10600] text-xs tracking-tighter border border-[#E10600]/30 group-hover:animate-skew">
             STATUS: {item.code}
          </div>

          <h3 className="text-xl md:text-2xl font-bold uppercase italic mb-2 group-hover:text-[#E10600] transition-colors">
            {item.phase}
          </h3>

          <div className="text-gray-500 text-xs tracking-widest uppercase">
            <HackerTypewriter text={item.details} start={isVisible} speed={25} />
          </div>

          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#E10600]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#E10600]" />
        </div>
      </div>

      {/* Central Node (The Dot) */}
      <div className="absolute left-0 lg:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
        <div className={`
          w-12 h-12 rounded-full bg-black border-2 border-[#E10600] flex items-center justify-center
          transition-all duration-700 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
          group-hover:shadow-[0_0_20px_#E10600] group-hover:bg-[#E10600]
        `}>
          <Icon className={`w-5 h-5 transition-colors ${isVisible ? 'text-[#E10600]' : 'text-white'} group-hover:text-black`} />
        </div>
        
        {/* Animated Scanning Circle */}
        {isVisible && (
          <div className="absolute w-16 h-16 border border-[#E10600]/30 rounded-full animate-ping" />
        )}
      </div>

      {/* Spacer for Desktop Grid */}
      <div className="hidden lg:block lg:w-[42%]" />
    </div>
  );
}

export default Timeline;