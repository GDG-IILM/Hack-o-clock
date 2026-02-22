// import React, { useEffect, useRef, useState } from 'react';
// import { MoveRight, Activity, Users, Zap, Terminal } from 'lucide-react';

// function AboutSection() {
//     const containerRef = useRef(null);
//     const [scrollProgress, setScrollProgress] = useState(0);

//     const text = "Hack O'Clock 2.0 is a high-impact hackathon connecting academic learning with real-world tech challenges—bringing teams, mentors, judges, and sponsors together to build, innovate, and launch careers.";
//     const words = text.split(' ');

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!containerRef.current) return;
//             const rect = containerRef.current.getBoundingClientRect();
//             const windowHeight = window.innerHeight;
            
//             // Starts appearing when top of section hits 80% of screen
//             // Finishes when top of section hits 20% of screen
//             const start = rect.top - windowHeight * 0.8;
//             const range = windowHeight * 0.6;
//             const progress = Math.max(0, Math.min(1, -start / range));
//             setScrollProgress(progress);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <section
//             id="about"
//             ref={containerRef}
//             className="relative flex flex-col lg:flex-row px-6 sm:px-10 lg:px-20 py-24 justify-between bg-white overflow-hidden"
//         >
//             {/* 1. Subtle Engineering Grid Background */}
//             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
//                  style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

//             {/* 2. Sidebar Metadata */}
//             <div className="lg:w-[20%] flex flex-col gap-4 sticky top-24 self-start">
//                 <div className="flex items-center gap-2">
//                     <div className="w-1.5 h-1.5 bg-[#E10600] rounded-full animate-pulse" />
//                     <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
//                         Protocol_02 // About
//                     </span>
//                 </div>
//                 <div className="h-[1px] w-full bg-slate-100" />
//                 <div className="font-mono text-[9px] text-slate-300 leading-tight uppercase">
//                     Status: Initializing<br />
//                     Location: Global_Sync<br />
//                     Enc: AES-256
//                 </div>
//             </div>

//             {/* 3. Main Content Content */}
//             <div className="w-full lg:w-[75%] flex flex-col relative z-10">
//                 {/* Premium Word Reveal: 
//                    Words use a 'stipple' effect (combination of blur, scale, and opacity)
//                 */}
//                 <h1 className="mt-6 lg:mt-0 text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter uppercase italic">
//                     {words.map((word, index) => {
//                         const wordThreshold = index / words.length;
//                         const opacity = Math.max(0.1, Math.min(1, (scrollProgress - wordThreshold) * 10));
                        
//                         return (
//                             <span
//                                 key={index}
//                                 className="inline-block mr-[0.25em] transition-all duration-300 ease-out"
//                                 style={{
//                                     color: opacity > 0.5 ? '#0f172a' : '#cbd5e1',
//                                     filter: `blur(${opacity > 0.8 ? 0 : 4}px)`,
//                                     transform: `translateY(${opacity > 0.8 ? 0 : 10}px)`,
//                                 }}
//                             >
//                                 {word}
//                             </span>
//                         );
//                     })}
//                 </h1>

//                 <div className="mt-16 flex items-center gap-6">
//                     <button className="group flex items-center gap-3 font-mono text-xs font-bold text-[#E10600] uppercase tracking-widest border-b border-[#E10600]/20 pb-2 hover:border-[#E10600] transition-all">
//                         View System Specs <MoveRight className="group-hover:translate-x-2 transition-transform" size={16}/>
//                     </button>
//                 </div>

//                 {/* 4. HUD Stats Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100 mt-12 overflow-hidden shadow-2xl shadow-slate-200/50">
//                     <StatBox 
//                         icon={<Users size={16}/>} 
//                         number="100+" 
//                         label="Infiltration Teams" 
//                         desc="Expected deployment across all sectors." 
//                     />
//                     <StatBox 
//                         icon={<Zap size={16}/>} 
//                         number="80" 
//                         label="Selected Units" 
//                         desc="Advanced to final site-specific testing." 
//                     />
//                     <StatBox 
//                         icon={<Activity size={16}/>} 
//                         number="60" 
//                         label="Peak Capacity" 
//                         desc="24-hour non-stop execution protocol." 
//                     />
//                     <StatBox 
//                         icon={<Terminal size={16}/>} 
//                         number="3–4" 
//                         label="Core Members" 
//                         desc="Optimized developer units per cell." 
//                     />
//                 </div>

//                 {/* 5. Prize Pool: High-Contrast Reveal */}
//                 <div className="mt-12 group relative bg-black p-[1px] overflow-hidden">
//                     <div className="bg-white p-8 transition-colors group-hover:bg-slate-50">
//                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
//                             <div className="space-y-1">
//                                 <p className="font-mono text-[10px] text-[#E10600] font-bold uppercase tracking-widest">Target Reward</p>
//                                 <h3 className="text-5xl font-black tracking-tighter uppercase italic">
//                                     ₹30,000 <span className="text-slate-300 group-hover:text-[#E10600]/20 transition-colors">+ Perks</span>
//                                 </h3>
//                             </div>
//                             <div className="grid grid-cols-3 gap-8 border-l border-slate-100 pl-8">
//                                 <PrizeSlot rank="1ST" amt="15K" color="#E10600" />
//                                 <PrizeSlot rank="2ND" amt="10K" color="#0f172a" />
//                                 <PrizeSlot rank="3RD" amt="5K" color="#64748b" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// // Sub-components to keep the main JSX readable and "crafted"
// const StatBox = ({ icon, number, label, desc }) => (
//     <div className="bg-white p-8 group hover:bg-slate-50 transition-colors">
//         <div className="text-[#E10600] mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{icon}</div>
//         <div className="text-4xl font-black tracking-tighter mb-1">{number}</div>
//         <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900">{label}</div>
//         <div className="text-[10px] font-mono text-slate-400 uppercase mt-2 leading-relaxed">{desc}</div>
//     </div>
// );

// const PrizeSlot = ({ rank, amt, color }) => (
//     <div className="flex flex-col">
//         <span className="text-[9px] font-mono text-slate-400 mb-1">{rank}</span>
//         <span className="text-xl font-black italic" style={{ color }}>₹{amt}</span>
//     </div>
// );

// export default AboutSection;