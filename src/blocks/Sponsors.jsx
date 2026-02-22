import React from 'react';

function Sponsors() {
    const sponsors = [
        { name: 'CodeCrafters.io', logo: '/sponcers/CodeCrafters.io full logo (White text).png' },
        { name: 'Devfolio', logo: '/sponcers/Devfolio - White.svg' },
        { name: 'Hackshastra', logo: '/sponcers/hackshastra blue logo.png' },
        { name: 'InterviewBuddy', logo: '/sponcers/interviewbuddy.svg' },
        { name: 'Mobbin', logo: '/sponcers/mobbin-logo-wordmark_dark.svg' },
        { name: 'TruScholar', logo: '/sponcers/truscholar.svg' },
        { name: 'XYZ', logo: '/sponcers/xyz-logo-white.svg' },
    ];

    return (
        <section id="sponsors" className="bg-black py-16 overflow-hidden">
            <div className="px-6 sm:px-10 lg:px-20">
                <p className="font-bold text-[#E10600] uppercase text-p mb-8">
                    Our Sponsors
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                <div className="marquee-container">
                    <div className="marquee-content">
                        {/* First set of sponsors */}
                        {sponsors.map((sponsor, index) => (
                            <div
                                key={`sponsor-1-${index}`}
                                className="marquee-item flex items-center justify-center bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-600"
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="h-16 w-auto object-contain hover:scale-110 transition-all duration-300"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {sponsors.map((sponsor, index) => (
                            <div
                                key={`sponsor-2-${index}`}
                                className="marquee-item flex items-center justify-center bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-600"
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="h-16 w-auto object-contain hover:scale-110 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
