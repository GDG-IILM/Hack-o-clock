import React from 'react';
import { Terminal, Scale, AlertTriangle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 border-b border-red-900/30 pb-6 text-right justify-end">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            SYSTEM_<span className="text-red-600">ACCESS</span>
          </h1>
          <Scale className="text-red-600" size={40} />
        </div>

        <div className="grid gap-6">
          {[
            { title: "ELIGIBILITY", desc: "Open to all student nodes. Must bring your own hardware (Rigs).", icon: Terminal },
            { title: "IP_RIGHTS", desc: "Code developed during the event remains your property, but we reserve the right to showcase it.", icon: AlertTriangle },
            { title: "TERMINATION", desc: "Any attempt to inject malicious code into the event network results in immediate ejection.", icon: AlertTriangle }
          ].map((item, i) => (
            <div key={i} className="group border border-zinc-800 p-6 hover:border-red-600 transition-colors bg-zinc-900/20">
              <div className="flex items-center gap-3 mb-3 text-red-600">
                <item.icon size={20} />
                <h3 className="font-black italic uppercase">{item.title}</h3>
              </div>
              <p className="text-sm opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}