import React, { useState, useEffect } from 'react';
import { Plus, Terminal, ShieldQuestion, Activity, Cpu } from 'lucide-react';

// --- Hacker Decryption Hook ---
const DecryptText = ({ text, start }) => {
  const [display, setDisplay] = useState("");
  const chars = "!@#$%^&*()_+[]{};:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (!start) {
      setDisplay("");
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(text.split("")
        .map((char, index) => {
          if (index < iterations) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("")
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 8);

    return () => clearInterval(interval);
  }, [start, text]);

  return <span className="font-mono">{display}</span>;
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'What is Hack O\'Clock 2.0?', answer: 'A high-impact hackathon designed to bridge academic theory and real-world infrastructure. Terminal access granted to innovative creators.' },
    { question: 'Rules and Engagement Guidelines?', answer: 'Original source code only. Zero-day exploits on ethical standards are prohibited. Multi-disciplinary collaboration is mandatory.' },
    { question: 'Prize Distribution Model?', answer: 'Tier-1 recognition, venture capital exposure, and hardware rewards for the top architects of the system.' },
    { question: 'Deployment Timeline?', answer: 'Hybrid execution. Online infiltration followed by a 24-hour on-campus final sprint. 60 teams. One winner.' },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-10 lg:px-20 py-24 relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#E10600 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with System Specs */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-[30%]">
            <div className="flex items-center gap-2 text-[#E10600] font-mono text-xs mb-4 tracking-[0.3em]">
              <Activity size={14} className="animate-pulse" />
              <span>KNOWLEDGE_BASE_V2</span>
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">
              ANY <span className="text-[#E10600]">QUERIES?</span>
            </h2>
          </div>
          <div className="lg:w-[70%] border-l border-white/10 pl-8 flex items-center">
            <p className="text-gray-400 font-mono text-sm max-w-xl">
              &gt; ACCESSING ENCRYPTED FREQUENTLY ASKED QUESTIONS... <br />
              &gt; SELECT A DATA PACKET TO DECRYPT THE CONTENT.
            </p>
          </div>
        </div>

        {/* FAQ Grid Interface */}
        <div className="space-y-4 lg:w-[75%] lg:ml-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between gap-6 p-6 transition-all duration-300 border-l-2 ${
                  openIndex === index 
                  ? 'bg-[#E10600]/10 border-[#E10600] shadow-[0_0_30px_rgba(225,6,0,0.1)]' 
                  : 'bg-zinc-900/40 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-xs ${openIndex === index ? 'text-[#E10600]' : 'text-gray-500'}`}>
                    [0{index + 1}]
                  </span>
                  <span className={`text-lg font-bold tracking-tight uppercase italic ${openIndex === index ? 'text-white' : 'text-gray-400'}`}>
                    {faq.question}
                  </span>
                </div>
                
                <div className={`p-1 border transition-all duration-500 ${openIndex === index ? 'rotate-45 border-[#E10600] text-[#E10600]' : 'border-white/20 text-white'}`}>
                  <Plus size={16} />
                </div>
              </button>

              {/* Dynamic Answer Reveal */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-8 bg-zinc-900/60 border-x border-b border-white/10 relative">
                  {/* Hacker Scanning Line Animation */}
                  {openIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E10600]/5 to-transparent h-20 w-full animate-scan" />
                  )}
                  
                  <div className="flex gap-4">
                    <Terminal size={18} className="text-[#E10600] mt-1 shrink-0" />
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      <DecryptText text={faq.answer} start={openIndex === index} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech-Brutalist CTA */}
        <div className='flex flex-wrap gap-4 lg:w-[75%] lg:ml-auto mt-12'>
          <a href="#" className="group relative overflow-hidden bg-white px-8 py-3 rounded-full">
            <span className="relative z-10 text-black font-black uppercase text-xs tracking-widest">
              Initiate Contact
            </span>
            <div className="absolute inset-0 bg-[#E10600] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a href="#" className="flex items-center gap-3 px-8 py-3 border  rounded-full border-white/20 font-mono text-xs uppercase tracking-tighter hover:bg-white/5 transition-colors">
            <Cpu size={14} className="text-[#E10600]" />
            Request_Manual_Support
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(200%); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default FAQ;