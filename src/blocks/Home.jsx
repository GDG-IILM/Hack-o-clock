import React, { useEffect, useRef, useState } from 'react';
import App from '../App.jsx';
import { MoveRight, Terminal, Cpu, Users, ShieldAlert } from 'lucide-react';
import HowItWorks from './HowItWorks.jsx';
import Timeline from './Timeline.jsx';
import Judges from './Judges.jsx';
import FAQ from './faq.jsx';
import Sponsors from './Sponsors.jsx';

function Home() {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const text = "Hack O'Clock 2.0 is a high-impact hackathon connecting academic learning with real-world tech challenges—bringing teams, mentors, judges, and sponsors together to build, innovate, and launch careers.";
    const words = text.split(' ');

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const start = rect.top - windowHeight + 100;
            const end = rect.bottom - windowHeight / 1.5;
            const total = end - start;
            const current = -start;
            const progress = Math.max(0, Math.min(1, current / total));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-[#000000] text-white font-mono selection:bg-[#E10600] selection:text-white">
            {/* CRT Scanline Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            
            <App />

            {/* SPACER */}
            <div className="h-[10vh]" />

            {/* ABOUT SECTION */}
            <section
                id="about"
                ref={containerRef}
                className="relative flex flex-col lg:flex-row gap-12 px-6 sm:px-12 lg:px-24 py-24 border-y border-[#E10600]/30"
            >
                {/* Side Label */}
                <div className="lg:w-1/5">
                    <div className="sticky top-28 flex items-center gap-2 text-[#E10600] text-sm font-bold tracking-[0.2em] uppercase">
                        <span className="w-8 h-[1px] bg-[#E10600]"></span>
                        System.About
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full lg:w-4/5">
                    {/* Progressive Text Reveal */}
                    <h1 className="text-3xl sm:text-5xl font-bold leading-[1.2] mb-16 tracking-tight">
                        {words.map((word, index) => {
                            const wordProgress = scrollProgress * words.length - index;
                            const opacity = Math.max(0.1, Math.min(1, wordProgress));
                            return (
                                <span
                                    key={index}
                                    style={{
                                        color: opacity > 0.8 ? 'white' : `rgba(225, 6, 0, ${opacity})`,
                                        transition: 'all 0.3s ease-out',
                                    }}
                                >
                                    {word}{' '}
                                </span>
                            );
                        })}
                    </h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E10600]/20 border border-[#E10600]/20">
                        <StatBox icon={<Users size={20}/>} title="100+ TEAMS" subtitle="EXPECTED ENROLLMENT" />
                        <StatBox icon={<ShieldAlert size={20}/>} title="80 TEAMS" subtitle="QUALIFIED SHORTLIST" />
                        <StatBox icon={<Terminal size={20}/>} title="24 HOURS" subtitle="NON-STOP CODING" />
                        <StatBox icon={<Cpu size={20}/>} title="3-4 DEVS" subtitle="TEAM STRUCTURE" />
                    </div>

                    {/* Prize Section - Terminal Style */}
                    <div className="mt-16 border border-[#E10600] bg-black">
                        <div className="bg-[#E10600] text-black px-4 py-2 flex justify-between items-center font-black text-sm">
                            <span className="flex items-center gap-2">
                                <Terminal size={14}/> LOAD_PRIZE_MODULE.SH
                            </span>
                            <span>v2.0</span>
                        </div>
                        
                        <div className="p-8 md:p-12 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
                            <div className="order-2 sm:order-1 opacity-70">
                                <p className="text-[#E10600] text-xs mb-2">RUNNER_UP_01</p>
                                <p className="text-3xl font-bold">₹10,000</p>
                            </div>
                            <div className="order-1 sm:order-2 border-x-0 sm:border-x border-[#E10600]/30 px-4 scale-110">
                                <p className="text-[#E10600] text-xs mb-2">GRAND_CHAMPION</p>
                                <p className="text-5xl font-black drop-shadow-[0_0_10px_rgba(225,6,0,0.5)]">₹15,000</p>
                            </div>
                            <div className="order-3 sm:order-3 opacity-70">
                                <p className="text-[#E10600] text-xs mb-2">RUNNER_UP_02</p>
                                <p className="text-3xl font-bold">₹5,000</p>
                            </div>
                        </div>

                        <div className="bg-[#E10600]/5 p-4 border-t border-[#E10600]/20 text-center">
                            <p className="text-xs text-[#E10600] animate-pulse">
                                + EXCLUSIVE SWAG KITS & PARTNER PERKS FOR ALL FINALISTS
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION WRAPPER */}
            <div className="space-y-32 py-20">
                <Sponsors />
                <HowItWorks />
                <Timeline />
                <div className="bg-[#050505]">
                    <Judges />
                    <FAQ />
                </div>
            </div>
        </div>
    );
}

// Refined Helper Component for Stats
const StatBox = ({ icon, title, subtitle }) => (
    <div className="bg-black p-8 group hover:bg-[#E10600]/5 transition-all duration-300 cursor-crosshair">
        <div className="flex items-center gap-4 text-[#E10600] mb-3">
            {icon}
            <h3 className="text-xl font-bold tracking-tighter group-hover:translate-x-1 transition-transform">{title}</h3>
        </div>
        <p className="text-gray-500 text-xs tracking-[0.1em]">{subtitle}</p>
    </div>
);

export default Home;