import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Users, Activity, CheckCircle, Zap, RefreshCw, Map as MapIcon } from 'lucide-react';
import { CITY_DISTRIBUTION, GENDER_DISTRIBUTION, STATE_MATRIX } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-l-4 border-primary pl-6 py-2">
        <div>
          <h1 className="text-slate-100 text-4xl md:text-5xl font-black uppercase italic tracking-tighter">System Overview</h1>
          <p className="text-primary/60 font-mono text-sm mt-1">REAL-TIME DATA TELEMETRY // SECTOR 7-G</p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-primary/40 font-mono uppercase">Sync Status</span>
            <span className="text-primary font-bold text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              CONNECTED
            </span>
          </div>
          <button className="px-6 py-2 bg-primary text-background-dark font-black uppercase text-sm rounded-none skew-x-[-12deg] hover:brightness-125 transition-all flex items-center gap-2">
            <RefreshCw className="size-4" />
            Refresh Matrix
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Leads', value: '128.462', change: '+12.5%', icon: Users, color: 'primary' },
          { label: 'Active Threads', value: '12', change: 'STABLE', icon: Activity, color: 'primary' },
          { label: 'Success Rate', value: '98.2%', change: '-1.2%', icon: CheckCircle, color: 'rose-500' },
          { label: 'Latency', value: '24ms', change: 'OPTIMAL', icon: Zap, color: 'primary' },
        ].map((stat, i) => (
          <div key={i} className="neon-glow bg-primary/5 p-6 relative overflow-hidden group border border-primary/20">
            <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
              <stat.icon className="text-primary size-5" />
            </div>
            <p className="text-primary/60 text-xs font-mono uppercase tracking-widest">{stat.label}</p>
            <p className="text-slate-100 text-3xl font-black mt-1">{stat.value}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className={cn("text-xs font-bold", stat.color === 'rose-500' ? 'text-rose-500' : 'text-emerald-400')}>
                {stat.change}
              </span>
              <div className="flex-1 h-1 bg-primary/10">
                <div className={cn("h-full", stat.color === 'rose-500' ? 'bg-rose-500' : 'bg-primary')} style={{ width: i === 0 ? '75%' : i === 1 ? '50%' : i === 2 ? '98%' : '25%' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads by City */}
        <div className="lg:col-span-2 neon-glow bg-primary/5 p-6 border-t-2 border-primary">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-slate-100 font-black uppercase tracking-widest flex items-center gap-2">
                <MapIcon className="text-primary size-5" />
                Lead Distribution by City
              </h3>
              <p className="text-primary/40 text-[10px] font-mono">TOP PERFORMANCE METRICS</p>
            </div>
            <div className="text-right">
              <p className="text-primary text-xl font-black">45,000</p>
              <p className="text-primary/40 text-[10px] uppercase">Peak Volume</p>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CITY_DISTRIBUTION}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(37, 209, 244, 0.1)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="rgba(37, 209, 244, 0.4)" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(37, 209, 244, 0.3)', color: '#fff' }}
                  itemStyle={{ color: '#25d1f4' }}
                />
                <Bar dataKey="value" fill="rgba(37, 209, 244, 0.2)" stroke="#25d1f4" strokeWidth={2}>
                  {CITY_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="rgba(37, 209, 244, 0.2)" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gender Distribution */}
        <div className="neon-glow bg-primary/5 p-6 border-t-2 border-primary">
          <h3 className="text-slate-100 font-black uppercase tracking-widest flex items-center gap-2 mb-8">
            <Users className="text-primary size-5" />
            Gender Distribution
          </h3>
          <div className="space-y-6">
            {GENDER_DISTRIBUTION.map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">{item.name}</span>
                  <span className="text-primary">{item.value}%</span>
                </div>
                <div className="h-4 bg-primary/10 rounded-full overflow-hidden border border-primary/20">
                  <div 
                    className={cn("h-full bg-primary shadow-[0_0_10px_#25d1f4]", i === 1 && "bg-primary/60", i === 2 && "bg-primary/30")} 
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-4 border border-primary/20 bg-primary/5 text-center">
            <p className="text-[10px] font-mono text-primary/40 uppercase">Total Sample Population</p>
            <p className="text-2xl font-black text-slate-100">128,462</p>
          </div>
        </div>
      </div>

      {/* State Matrix */}
      <div className="neon-glow bg-primary/5 p-6 border-t-2 border-primary">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-slate-100 font-black uppercase tracking-widest flex items-center gap-2">
            <MapIcon className="text-primary size-5" />
            Regional State Matrix
          </h3>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-primary text-background-dark text-[10px] font-bold uppercase italic">All Regions</span>
            <span className="px-3 py-1 border border-primary/40 text-primary text-[10px] font-bold uppercase italic">Last 24h</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {STATE_MATRIX.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-primary font-mono font-bold w-8">{item.state}</span>
              <div className="flex-1 h-3 bg-primary/10 border border-primary/20">
                <div className="h-full bg-primary" style={{ width: `${item.value}%` }}></div>
              </div>
              <span className="text-slate-400 font-mono text-xs w-10">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
