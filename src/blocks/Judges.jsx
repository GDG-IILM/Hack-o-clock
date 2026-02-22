import React from 'react';

const judges = [
  { name: 'Pratham Batra', img: '/judges/PRATHAM.png' },
  { name: 'Uday Sharma', img: '/judges/UDAY SHARMA.png' },
  { name: 'Utkarsh Soni', img: '/judges/UTKARSH SONI .png' },
  { name: 'Jai Chawla', img: '/judges/8th.png' },
  { name: 'Shiti', img: '/judges/SMITI.png' },
  { name: 'Anubhav Gupta', img: '/judges/ANUBHAV GUPTA.png' },
  { name: 'Ravi Prakash', img: '/judges/RAVI PRAKASH.png' },
  { name: 'Sachin Jha', img: '/judges/SACHIN JHA.png' },
  { name: 'Ajay Kushwaha', img: '/judges/1st.png' },
];

function Judges() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#E10600 1px, transparent 1px), linear-gradient(90deg, #E10600 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-2 text-[#E10600] font-mono text-sm tracking-widest uppercase mb-2">
            <span className="w-8 h-[1px] bg-[#E10600]"></span>
            System Authorities
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
            Meet The <span className="text-[#E10600] animate-pulse">Judges</span>
          </h1>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {judges.map((judge, index) => (
            <JudgeCard key={index} {...judge} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JudgeCard({ img, name }) {
  return (
    <div className="group relative w-full max-w-[360px] aspect-[4/5] bg-zinc-900 overflow-hidden border border-white/10 hover:border-[#E10600]/50 transition-all duration-500 rounded-xl">
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none bg-[length:100%_2px,3px_100%]" />

      {/* Background Graphic Shape */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#E10600] opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity" />

      {/* Image with Zoom effect */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out z-10"
      />

      {/* Information Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <div className="flex items-center gap-3 mb-1">
          <div className="h-[2px] w-0 group-hover:w-8 bg-[#E10600] transition-all duration-500" />
          <span className="text-[10px] font-mono text-[#E10600] opacity-0 group-hover:opacity-100 uppercase tracking-widest">Verified Expert</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold uppercase italic tracking-tighter group-hover:text-[#E10600] transition-colors">
          {name}
        </h2>
        
        {/* Animated Corner Bracket */}
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/30 group-hover:border-[#E10600] transition-colors" />
      </div>
    </div>
  );
}

export default Judges;