import { MousePointerClick, NotebookPen, Ribbon, Terminal } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

// --- Typewriter Hook for that 'Hacker' feel ---
const TypewriterText = ({ text, delay = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, delay]);

  return <span>{displayedText}</span>;
};

function HowItWorks() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Background Matrix-like Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(225,6,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(225,6,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="text-[#E10600] animate-pulse" size={24} />
          <p className="font-mono font-bold text-[#E10600] uppercase tracking-[0.3em]">
            &gt; system_workflow_init...
          </p>
        </div>

        {/* The Connection Line (Hidden on Mobile) */}
        <div className="hidden lg:block absolute top-[60%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#E10600]/50 to-transparent z-0" />

        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 w-full">
          
          {/* Step 01 */}
          <HackerCard 
            step="01"
            icon={<NotebookPen className="text-[#E10600]" />}
            title="Registration"
            description="Students register in teams of 3–4 and submit basic project interests."
          />

          {/* Step 02 */}
          <HackerCard 
            step="02"
            icon={<MousePointerClick className="text-[#E10600]" />}
            title="Shortlisting"
            description="Top 80 teams are shortlisted based on project viability and technical intent."
          />

          {/* Step 03 */}
          <HackerCard 
            step="03"
            icon={<Ribbon className="text-[#E10600]" />}
            title="Final Hackathon"
            description="60 teams compete in a 24-hour intense on-campus hackathon battle."
            isFinal
          />

        </div>
      </div>
    </section>
  );
}

function HackerCard({ step, icon, title, description, isFinal }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-zinc-950/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl w-full lg:max-w-[30%] min-h-[320px] flex flex-col gap-4 transition-all duration-500 hover:border-[#E10600] hover:shadow-[0_0_30px_rgba(225,6,0,0.2)]"
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E10600] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E10600] opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header Info */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#E10600]/50 transition-colors">
            {icon}
          </div>
          <span className="font-mono text-sm text-[#E10600] tracking-tighter">NODE_{step}</span>
        </div>
        <div className="text-white/20 font-mono text-xs">STATUS: STABLE</div>
      </div>

      <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-[#E10600] transition-colors">
        {title}
      </h3>

      <div className="text-gray-400 font-mono text-sm leading-relaxed min-h-[80px]">
        {isVisible && (
          <TypewriterText text={description} />
        )}
      </div>

      <div className="mt-auto pt-6">
        {isFinal ? (
          <div className="bg-[#E10600]/10 border border-[#E10600]/30 p-3 rounded text-[10px] font-mono text-[#E10600] animate-pulse text-center uppercase tracking-widest">
            Critical Objective: Final Presentation
          </div>
        ) : (
          <div className="w-full bg-white/5 h-[2px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[#E10600] w-1/3 group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
          </div>
        )}
      </div>
    </div>
  );
}

export default HowItWorks;