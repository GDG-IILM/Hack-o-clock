import React from 'react';

function Timeline() {
    const phaseCards = [
        '/timeline/planning-the-blueprint.svg',
        '/timeline/infilration.svg',
        '/timeline/execution.svg',
        '/timeline/debugging.svg',
        '/timeline/the-grand.svg',
    ];

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden" style={{
            backgroundColor: '#3a3a3a',
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(60, 60, 60, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(50, 50, 50, 0.5) 0%, transparent 50%)',
        }}>
            {/* Main Timeline Container */}
            <div className="relative">
                {/* Top Section - The Heist Board */}
                <div className="relative mb-16 sm:mb-20 lg:mb-24">
                    <div className="relative mx-auto max-w-[1200px]">
                        {/* Corner Card - Top Left */}
                        <div className="absolute -top-4 sm:-top-6 left-0 sm:left-4 lg:left-8 w-20 h-24 sm:w-24 sm:h-32 lg:w-32 lg:h-40 transform -rotate-6 z-20">
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-red-700 rounded-full shadow-lg z-10 border border-red-900" />
                            <img
                                src="/timeline/planning-the-blueprint-down.svg"
                                alt="Planning the Blueprint"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Corner Card - Top Right */}
                        <div className="absolute -top-4 sm:-top-6 right-0 sm:right-4 lg:right-8 w-20 h-24 sm:w-24 sm:h-32 lg:w-32 lg:h-40 transform rotate-6 z-20">
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-red-700 rounded-full shadow-lg z-10 border border-red-900" />
                            <img
                                src="/timeline/the-grand-raylag.svg"
                                alt="The Grand Raylag"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Small Note Cards - Bottom Left */}
                        <div className="absolute bottom-4 sm:bottom-8 -left-2 sm:left-0 lg:left-4 w-14 h-16 sm:w-20 sm:h-24 lg:w-24 lg:h-28 bg-[#e8e4d8] transform rotate-12 z-10 hidden sm:block">
                            <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5" />
                        </div>

                        {/* Small Note Cards - Bottom Right */}
                        <div className="absolute bottom-4 sm:bottom-8 -right-2 sm:right-0 lg:right-4 w-14 h-16 sm:w-20 sm:h-24 lg:w-24 lg:h-28 bg-[#e8e4d8] transform -rotate-12 z-10 hidden sm:block">
                            <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5" />
                        </div>

                        {/* Main Center Board */}
                        <div className="relative bg-[#e8e4d8] p-8 sm:p-12 lg:p-16 mx-2 sm:mx-8 lg:mx-20">
                            {/* Top center pin */}
                            <div className="absolute -top-3 sm:-top-3.5 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-red-700 rounded-full shadow-lg z-30 border border-red-900" />

                            {/* Center SVG */}
                            <div className="relative">
                                <img
                                    src="/timeline/center.svg"
                                    alt="The Grand Heist"
                                    className="w-full h-auto relative z-10 scale-125"
                                />
                            </div>

                            {/* Decorative coins scattered around - darker bronze/copper color */}
                            <div className="absolute top-[15%] -left-3 sm:-left-5 lg:-left-7 w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full shadow-xl border-2 hidden sm:block" style={{
                                background: 'radial-gradient(circle at 30% 30%, #8B4513, #654321)',
                                borderColor: '#3d2817'
                            }} />
                            <div className="absolute top-[30%] -right-2 sm:-right-4 lg:-right-6 w-6 h-6 sm:w-9 sm:h-9 lg:w-11 lg:h-11 rounded-full shadow-xl border-2 hidden sm:block" style={{
                                background: 'radial-gradient(circle at 30% 30%, #8B4513, #654321)',
                                borderColor: '#3d2817'
                            }} />
                            <div className="absolute bottom-[20%] -left-2 sm:-left-4 lg:-left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full shadow-xl border-2 hidden sm:block" style={{
                                background: 'radial-gradient(circle at 30% 30%, #8B4513, #654321)',
                                borderColor: '#3d2817'
                            }} />
                            <div className="absolute top-[50%] -right-3 sm:-right-5 lg:-right-7 w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full shadow-xl border-2 hidden lg:block" style={{
                                background: 'radial-gradient(circle at 30% 30%, #8B4513, #654321)',
                                borderColor: '#3d2817'
                            }} />
                            <div className="absolute bottom-[35%] -left-3 sm:-left-5 lg:-left-7 w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full shadow-xl border-2 hidden lg:block" style={{
                                background: 'radial-gradient(circle at 30% 30%, #8B4513, #654321)',
                                borderColor: '#3d2817'
                            }} />
                        </div>
                    </div>
                </div>

                {/* Phase Cards - Bottom Row - Using SVG Images Directly */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 lg:px-12">
                    {phaseCards.map((cardSrc, index) => (
                        <div
                            key={index}
                            className="relative flex justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[280px] w-[45%] sm:w-[30%] lg:w-[18%]"
                        >
                            {/* Pin at top */}
                            <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-gray-700 rounded-full shadow-lg border border-gray-900" />
                            </div>

                            {/* Card Image - Direct SVG - Full width */}
                            <div className="relative w-full">
                                <img
                                    src={cardSrc}
                                    alt={`Phase ${index + 1}`}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Timeline;
