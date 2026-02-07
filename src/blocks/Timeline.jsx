import React from 'react';
import { ClipboardList, Rocket, Code2, Bug, Trophy } from 'lucide-react';

function Timeline() {
    const timelineData = [
        {
            phase: "Planning the Blueprint",
            details: ["Registrations", "Team formation"],
            icon: ClipboardList
        },
        {
            phase: "Infiltration",
            details: ["Coding begins", "Ideation"],
            icon: Rocket
        },
        {
            phase: "Execution",
            details: ["Mid-point check", "Development"],
            icon: Code2
        },
        {
            phase: "Debugging",
            details: ["Refinement", "Project submission"],
            icon: Bug
        },
        {
            phase: "The Grand Finale",
            details: ["Winners announcement"],
            icon: Trophy
        }
    ];

    return (
        <section className="bg-[#F5F4F5] px-6 sm:px-10 lg:px-20 py-16 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 mb-12 lg:mb-20">
                    <p className="font-bold text-[#E10600] uppercase text-p lg:w-[25%]">
                        Timeline
                    </p>
                    <div className="w-full lg:w-[75%]">
                        <h2 className="text-h3 font-semibold mb-4 text-black">
                            The Journey Awaits
                        </h2>
                        <p className="text-p text-black/60">
                            From registration to victory — here's how the hackathon unfolds, one phase at a time.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative lg:w-[75%] lg:ml-auto">
                    {/* Vertical line - hidden on mobile, visible on lg+ */}
                    <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E10600] via-[#E10600]/50 to-transparent" />

                    {/* Timeline items */}
                    <div className="flex flex-col gap-8 lg:gap-12">
                        {timelineData.map((item, index) => {
                            const IconComponent = item.icon;
                            const isLast = index === timelineData.length - 1;

                            return (
                                <div
                                    key={index}
                                    className="relative flex flex-col lg:flex-row items-start gap-4 lg:gap-8 group"
                                >
                                    {/* Icon with pulse effect */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div
                                            className={`
                                                w-12 h-12 rounded-full flex items-center justify-center
                                                border-2 border-[#E10600] shadow-lg
                                                group-hover:bg-[#E10600] transition-all duration-300
                                                ${isLast ? 'bg-[#E10600] animate-pulse-ring' : 'bg-white'}
                                            `}
                                            style={isLast ? {
                                                animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                                            } : {}}
                                        >
                                            <IconComponent
                                                size={20}
                                                className={`
                                                    transition-colors duration-300
                                                    ${isLast ? 'text-white' : 'text-[#E10600] group-hover:text-white'}
                                                `}
                                            />
                                        </div>
                                    </div>

                                    {/* Content card */}
                                    <div className={`
                                        flex-1 p-6 rounded-2xl bg-white shadow-md
                                        border border-transparent hover:border-[#E10600]/20
                                        hover:shadow-xl transition-all duration-300
                                        transform hover:-translate-y-1
                                    `}>
                                        {/* Phase number badge */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#E10600] px-2 py-1 rounded">
                                                Phase {index + 1}
                                            </span>
                                        </div>

                                        {/* Phase title */}
                                        <h3 className="text-h5 font-semibold text-black mb-4">
                                            {item.phase}
                                        </h3>

                                        {/* Details */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.details.map((detail, detailIndex) => (
                                                <span
                                                    key={detailIndex}
                                                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-black/5 text-black/70 hover:bg-[#E10600]/10 hover:text-[#E10600] transition-colors duration-200"
                                                >
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Connector line for mobile */}
                                    {!isLast && (
                                        <div className="lg:hidden absolute left-6 top-12 h-full w-0.5 bg-gradient-to-b from-[#E10600]/50 to-transparent -z-10" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
