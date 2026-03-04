import React, { useState } from 'react';
import { Terminal, History, Database, Bolt, CheckCircle, Network, MapPin, Power } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function PegaPega() {
  const [isInitializing, setIsInitializing] = useState(false);

  const handleInitialize = () => {
    setIsInitializing(true);
    setTimeout(() => setIsInitializing(false), 3000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-l-4 border-primary pl-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Terminal className="text-primary size-4" />
            <span className="text-primary/70 text-xs font-bold tracking-[0.3em] uppercase">Protocol v2.04.1</span>
          </div>
          <h1 className="text-slate-100 text-5xl font-black tracking-tighter uppercase italic">PEGA PEGA</h1>
          <p className="text-slate-400 text-lg">Lead Extraction Neural Interface</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-2 rounded bg-accent-dark text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary/10 transition-all border border-primary/20">
            <History className="size-4" />
            History Log
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-accent-dark/40 border border-primary/20 border-l-4 border-l-primary">
          <div className="flex justify-between items-start">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Available Credits</p>
            <Database className="text-primary size-4" />
          </div>
          <p className="text-primary tracking-tight text-3xl font-black leading-tight">1,250</p>
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 text-xs font-bold">+5.2%</span>
            <span className="text-slate-600 text-[10px] uppercase">Refill in 12h</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-accent-dark/40 border border-primary/20 border-l-4 border-l-primary">
          <div className="flex justify-between items-start">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Daily Extractions</p>
            <Bolt className="text-primary size-4" />
          </div>
          <p className="text-slate-100 tracking-tight text-3xl font-black leading-tight">42<span className="text-slate-500 text-xl">/100</span></p>
          <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[42%] shadow-[0_0_8px_#25d1f4]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-xl p-6 bg-accent-dark/40 border border-slate-800">
          <div className="flex justify-between items-start">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Success Rate</p>
            <CheckCircle className="text-slate-500 size-4" />
          </div>
          <p className="text-slate-100 tracking-tight text-3xl font-black leading-tight">98.4%</p>
          <p className="text-slate-500 text-[10px] uppercase">Stable Connection</p>
        </div>

        <div className="flex flex-col gap-2 rounded-xl p-6 bg-accent-dark/40 border border-slate-800">
          <div className="flex justify-between items-start">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Nodes</p>
            <Network className="text-slate-500 size-4" />
          </div>
          <p className="text-slate-100 tracking-tight text-3xl font-black leading-tight">12</p>
          <p className="text-emerald-400 text-[10px] uppercase flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
          </p>
        </div>
      </div>

      {/* Main Action Area */}
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* Left: Parameters Form */}
        <div className="flex-[2] flex flex-col gap-6 p-8 rounded-2xl bg-neutral-dark border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Terminal className="text-primary size-32" />
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary size-6" />
            <h2 className="text-slate-100 text-xl font-bold uppercase tracking-wide">Target Parameters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">State / Estado</label>
              <select className="w-full bg-accent-dark border border-slate-700 rounded-lg py-3 px-4 text-slate-100 appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none">
                <option value="">Select Brazilian State</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">City / Cidade</label>
              <select className="w-full bg-accent-dark border border-slate-700 rounded-lg py-3 px-4 text-slate-100 appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none">
                <option value="">Select City</option>
                <option value="Sampa">São Paulo (Capital)</option>
                <option value="Campinas">Campinas</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Target Niche / Segmento</label>
            <input 
              className="w-full bg-accent-dark border border-slate-700 rounded-lg py-3 px-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none placeholder:text-slate-600" 
              placeholder="e.g. Technology, Real Estate, Health..." 
              type="text"
            />
          </div>
          
          <div className="mt-4 pt-6 border-t border-slate-800 flex flex-col items-center">
            <button 
              onClick={handleInitialize}
              disabled={isInitializing}
              className={cn(
                "group relative flex w-full max-w-md items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary py-5 text-background-dark font-black text-2xl uppercase italic tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all neon-glow",
                isInitializing && "opacity-70 cursor-not-allowed"
              )}
            >
              <Power className={cn("size-8", isInitializing && "animate-spin")} />
              {isInitializing ? "INITIALIZING..." : "INITIALIZE PEGA PEGA"}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
            </button>
            <p className="text-slate-600 text-[10px] uppercase mt-4 tracking-widest font-bold italic">Critical: Process will consume 10 extraction tokens</p>
          </div>
        </div>

        {/* Right: Map/System Visualizer */}
        <div className="flex-1 min-h-[400px] flex flex-col gap-4 p-6 rounded-2xl bg-accent-dark/20 border border-slate-800 relative group overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              Live Geospatial Feed
            </h3>
            <span className="text-primary text-[10px] font-mono tracking-tighter">LAT: -23.5505 | LNG: -46.6333</span>
          </div>
          
          <div className="flex-1 rounded-xl bg-background-dark border border-slate-800 overflow-hidden relative">
            <div className="absolute inset-0 opacity-30 pointer-events-none cyber-grid"></div>
            <img 
              alt="Cyberpunk Map UI" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125" 
              src="https://picsum.photos/seed/map/800/600"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute top-4 left-4 flex flex-col gap-1">
              <div className="bg-background-dark/80 backdrop-blur-sm border border-primary/30 p-2 rounded text-[10px] font-mono text-primary">
                SCANNING_NODES: 104
              </div>
              <div className="bg-background-dark/80 backdrop-blur-sm border border-primary/30 p-2 rounded text-[10px] font-mono text-primary">
                SIGNAL_STRENGTH: 98%
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 animate-pulse">
              <div className="size-6 border-2 border-primary rounded-full flex items-center justify-center">
                <div className="size-2 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <p className="text-slate-500 text-[10px] uppercase font-bold">System Console</p>
            <div className="bg-black/60 font-mono text-[10px] p-3 rounded-lg border border-slate-800 h-24 overflow-y-auto text-primary/80">
              <p>&gt; [INFO] Interface Pega Pega initialized...</p>
              <p>&gt; [READY] Waiting for geospatial coordinates...</p>
              <p>&gt; [LINK] Satellite link established via AWS-BR-S01</p>
              <p className="text-primary animate-pulse">&gt; [WAIT] Waiting for user input to begin extraction sequence_</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
