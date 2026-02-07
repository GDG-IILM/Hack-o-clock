import React from 'react';

function Sponsors() {
    // Placeholder sponsor logos - replace with actual sponsor logos
    const sponsors = [
        { name: 'Sponsor 1', logo: '/logo.png' },
        { name: 'Sponsor 2', logo: '/logo.png' },
        { name: 'Sponsor 3', logo: '/logo.png' },
        { name: 'Sponsor 4', logo: '/logo.png' },
        { name: 'Sponsor 5', logo: '/logo.png' },
        { name: 'Sponsor 6', logo: '/logo.png' },
    ];

    return (
        <section id="sponsors" className="bg-[#F5F4F5] py-16 overflow-hidden">
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
                                className="marquee-item flex items-center justify-center bg-white rounded-lg p-6 shadow-sm border"
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {sponsors.map((sponsor, index) => (
                            <div
                                key={`sponsor-2-${index}`}
                                className="marquee-item flex items-center justify-center bg-white rounded-lg p-6 shadow-sm border"
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
