import React from 'react';
import { Search, Download, RefreshCw, Filter, MoreVertical, MessageSquare, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_LEADS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export function Leads() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary mb-2">
            <span className="h-1 w-8 bg-primary"></span>
            <span className="text-xs font-black uppercase tracking-[0.3em]">Neural Extraction Active</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">Leads <span className="text-primary">Database</span></h1>
          <p className="text-slate-400 mt-2 max-w-md">Real-time technological extraction feed. Proprietary scraping protocols engaged.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-primary/50 px-4 py-2 rounded-lg text-sm font-bold transition-all">
            <Filter className="text-primary size-4" />
            Filtros Avançados
          </button>
          <button className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-primary/50 px-4 py-2 rounded-lg text-sm font-bold transition-all">
            <RefreshCw className="text-primary size-4" />
            Atualizar
          </button>
        </div>
      </div>

      {/* Search and Export */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-3">
          {['Todos os Leads', 'Recentemente Extraídos', 'Prioridade Alta', 'Arquivados'].map((label, i) => (
            <button 
              key={i}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all border",
                i === 0 
                  ? "bg-primary/10 border-primary text-primary" 
                  : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-primary/30"
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60 size-4" />
            <input 
              className="w-full bg-primary/5 border border-primary/20 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none text-slate-100 transition-all" 
              placeholder="Scanning database..." 
              type="text"
            />
          </div>
          <button className="bg-primary hover:bg-primary/80 text-black px-6 py-2 rounded-lg text-sm font-black uppercase flex items-center gap-2 transition-all active:scale-95 shadow-[0_0_15px_rgba(37,209,244,0.4)]">
            <Download className="size-4" />
            Exportar
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-primary/20 bg-slate-950/50 backdrop-blur-sm neon-border">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-primary/20">
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Lead / Telefone</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Idade</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Localização</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Categoria</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary">Data de Extração</th>
              <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-primary text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/10">
            {MOCK_LEADS.map((lead) => (
              <tr key={lead.id} className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-white font-bold group-hover:text-primary transition-colors">{lead.name}</span>
                    <span className="text-xs text-slate-500 font-mono tracking-tighter flex items-center gap-1">
                      <MessageSquare className="size-3 text-emerald-500" />
                      {lead.phone}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-300 font-mono">{lead.age}</td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary/60 size-4" />
                    <span className="text-slate-300">{lead.location}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className={cn(
                    "px-3 py-1 rounded text-[10px] font-black uppercase border",
                    lead.category === 'Masculino' ? "bg-primary/10 border-primary/30 text-primary" :
                    lead.category === 'Feminino' ? "bg-primary/10 border-primary/30 text-primary" :
                    "bg-slate-800 border-slate-700 text-slate-400"
                  )}>
                    {lead.category}
                  </span>
                </td>
                <td className="px-6 py-5 text-slate-400 font-mono text-sm">{lead.extractionDate}</td>
                <td className="px-6 py-5 text-right">
                  <button className="p-1 hover:text-primary transition-colors">
                    <MoreVertical className="size-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-500 italic">
          Showing <span className="text-primary font-mono">05</span> of <span className="text-slate-300 font-mono">1,492</span> leads extracted in the last 24h
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded border border-slate-800 hover:border-primary/50 text-slate-400 hover:text-primary transition-all">
            <ChevronLeft className="size-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded border border-primary bg-primary/10 text-primary font-bold">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded border border-slate-800 hover:border-primary/50 text-slate-400 hover:text-primary transition-all">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded border border-slate-800 hover:border-primary/50 text-slate-400 hover:text-primary transition-all">3</button>
          <button className="w-10 h-10 flex items-center justify-center rounded border border-slate-800 hover:border-primary/50 text-slate-400 hover:text-primary transition-all">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
