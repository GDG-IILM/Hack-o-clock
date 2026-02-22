import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600 shadow-[0_0_15px_#ff0000] z-50" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8 border-b border-red-900/30 pb-6">
          <ShieldCheck className="text-red-600" size={40} />
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            PRIVACY_<span className="text-red-600">PROTOCOL</span>
          </h1>
        </div>

        <div className="space-y-12 bg-zinc-950/50 border border-red-900/20 p-8 backdrop-blur-md">
          <section>
            <h2 className="text-red-600 font-bold mb-4 flex items-center gap-2">
              <Lock size={18} /> 01. DATA_COLLECTION
            </h2>
            <p className="leading-relaxed">
              We collect identity packets including names, email addresses, and university credentials. 
              This is mandatory for the initial "Handshake" (Registration) and to ensure network integrity 
              during the 24-hour breach.
            </p>
          </section>

          <section>
            <h2 className="text-red-600 font-bold mb-4 flex items-center gap-2">
              <EyeOff size={18} /> 02. TRANSMISSION_LIMITS
            </h2>
            <p className="leading-relaxed">
              Your data is never sold to third-party scrapers. Information is shared strictly with 
              organizing partners (GDG IILM & Unstop) to facilitate prizes and logistics.
            </p>
          </section>

          <footer className="pt-8 border-t border-red-900/20 text-[10px] uppercase tracking-widest text-zinc-600">
            End of Line // GDG IILM 2026 // Secure Session
          </footer>
        </div>
      </div>
    </div>
  );
}