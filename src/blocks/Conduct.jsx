import React from 'react';
import { UserX, Zap, Info } from 'lucide-react';

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-black text-white font-mono py-24 px-6 flex items-center justify-center">
      {/* Background HUD Scanline */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] pointer-events-none" />

      <div className="w-full max-w-3xl border-2 border-red-600 p-1 bg-red-600">
        <div className="bg-black p-8 md:p-12">
          <div className="flex justify-between items-start mb-12">
            <h1 className="text-5xl font-black italic uppercase leading-none tracking-tighter">
              CONDUCT<br /><span className="text-red-600">PROTOCOL</span>
            </h1>
            <Zap className="text-red-600 animate-pulse" size={48} />
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <UserX className="text-red-600 shrink-0" />
              <div>
                <h4 className="font-bold text-red-600 mb-1">ZERO_TOLERANCE</h4>
                <p className="text-sm text-zinc-400">Harassment, bullying, or digital attacks on participants result in a permanent ban from the GDG network.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Info className="text-red-600 shrink-0" />
              <div>
                <h4 className="font-bold text-red-600 mb-1">OPERATIONAL_ETHICS</h4>
                <p className="text-sm text-zinc-400">Collaborate fairly. Plagiarism or using pre-built "Dark Projects" is a breach of conduct.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-4 border border-red-900/50 bg-red-900/10 text-[10px] text-red-500 uppercase font-bold text-center italic">
            "We build the future, we don't break each other."
          </div>
        </div>
      </div>
    </div>
  );
}