import React, { useEffect, useRef, useState } from 'react';
import App from '../App.jsx';
import { MoveRight } from 'lucide-react';
import HowItWorks from './HowItWorks.jsx';
import Timeline from './Timeline.jsx';
import Judges from './Judges.jsx';
import FAQ from './faq.jsx';
import Sponsors from './Sponsors.jsx';

function Home() {
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const text =
        "Hack O'Clock 2.0 is a high-impact hackathon connecting academic learning with real-world tech challenges—bringing teams, mentors, judges, and sponsors together to build, innovate, and launch careers.";

    const words = text.split(' ');

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const start = rect.top - windowHeight + 200;
            const end = rect.bottom - windowHeight / 2;
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
        <div data-nav-theme="light" className="bg-[#F5F4F5]">
            <App />

            {/* Spacer */}
            <div className="h-[8vh] sm:h-[10vh]" />

            {/* ABOUT SECTION */}
            <section
                id="about"
                ref={containerRef}
                className="flex flex-col lg:flex-row gap-10 lg:gap-0 px-6 sm:px-10 lg:px-20 py-10 justify-between lg:min-h-[80vh]"
            >
                {/* Left label */}
                <p className="mt-6 lg:mt-16 font-bold text-[#E10600] uppercase text-p">
                    about
                </p>

                {/* Right content */}
                <div className="w-full lg:w-[75%] flex flex-col">
                    {/* Animated text */}
                    <h1
                        ref={textRef}
                        className="mt-6 lg:mt-16 text-h4 sm:text-h3 font-semibold leading-relaxed"
                    >
                        {words.map((word, index) => {
                            const wordProgress = scrollProgress * words.length - index;
                            const opacity = Math.max(0, Math.min(1, wordProgress));

                            return (
                                <span
                                    key={index}
                                    style={{
                                        color: `rgba(0,0,0,${0.2 + 0.8 * opacity})`,
                                        transition: 'color 0.1s ease-out',
                                    }}
                                >
                                    {word}{' '}
                                </span>
                            );
                        })}
                    </h1>

                    {/* Event details */}
                    <p className="mt-10 font-bold text-[#E10600] uppercase flex items-center gap-2 text-p">
                        event details <MoveRight />
                    </p>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-6">
                        <p className="text-h6 font-medium p-5 border rounded-md shadow-sm w-full sm:w-auto">
                            <span className="font-semibold text-[#E10600]">100+</span> Teams expected to
                            <br /> participate in the Hackathon
                        </p>

                        <p className="text-h6 font-medium p-5 border rounded-md shadow-sm w-full sm:w-auto">
                            <span className="font-semibold text-[#E10600]">80</span> Teams will qualify
                            <br /> for the on-campus final round
                        </p>

                        <p className="text-h6 font-medium p-5 border rounded-md shadow-sm w-full sm:w-auto">
                            <span className="font-semibold text-[#E10600]">60</span> Teams will stay
                            overnight for the
                            <br />
                            <span className="font-semibold">24-Hour</span> Hackathon Experience
                        </p>

                        <p className="text-h6 font-medium p-5 border rounded-md shadow-sm w-full sm:w-auto">
                            Each team will consist of
                            <br />
                            <span className="font-semibold">3–4</span> student developers
                        </p>
                    </div>

                    {/* Prize Pool */}
                    <div className="mt-10 p-6 bg-gradient-to-br from-[#E10600] to-[#b00500] rounded-lg shadow-lg text-white">
                        <h3 className="text-h5 font-bold mb-4">Prize Pool: ₹30,000 + Goodies</h3>
                        <div className="flex flex-col sm:flex-row gap-4 text-h6">
                            <div className="flex-1">
                                <p className="font-semibold">🥇 1st Prize</p>
                                <p className="text-h5 font-bold">₹15,000</p>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold">🥈 2nd Prize</p>
                                <p className="text-h5 font-bold">₹10,000</p>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold">🥉 3rd Prize</p>
                                <p className="text-h5 font-bold">₹5,000</p>
                            </div>
                        </div>
                        <p className="mt-4 text-p opacity-90">✨ Exciting goodies for winners</p>
                    </div>
                </div>
            </section>
            <Sponsors />
            <HowItWorks />
            <Timeline />

            <div className='bg-[#000001]'>
                <Judges />
                <FAQ />
            </div>
        </div>
    );
}

export default Home;
