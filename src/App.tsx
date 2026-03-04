import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { PegaPega } from './components/PegaPega';
import { Leads } from './components/Leads';
import { Shield, Server } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background-dark cyber-grid">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pega-pega" element={<PegaPega />} />
              <Route path="/leads" element={<Leads />} />
            </Routes>
            
            {/* Footer Section */}
            <footer className="border-t border-slate-800 pt-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-500 pb-8">
              <div className="flex items-center gap-4">
                <Shield className="size-10 opacity-30" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Security Protocol</p>
                  <p className="text-xs">All extractions are encrypted and comply with LGPD neural standards.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">System Status</p>
                  <p className="text-xs">Latency: 24ms | Server: Global-Cyan-Alpha</p>
                </div>
                <Server className="size-10 opacity-30" />
              </div>
            </footer>
          </main>
          
          {/* Bottom Bar */}
          <div className="border-t border-primary/10 bg-black/50 px-8 py-3 flex justify-between items-center text-[10px] font-mono text-primary/40 uppercase tracking-widest">
            <div className="flex gap-6">
              <span>© 2024 CYBEREXTRACT SYSTEM</span>
              <span className="text-primary">ENCRYPTED CONNECTION</span>
            </div>
            <div className="flex gap-6">
              <span>UPTIME: 99.999%</span>
              <span>KERNEL: v4.2.0-STABLE</span>
              <span className="animate-pulse">SYSTEM SECURE</span>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
