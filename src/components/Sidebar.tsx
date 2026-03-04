import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Zap, Users, Bell, Settings, Terminal } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Sidebar() {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/pega-pega', icon: Zap, label: 'Pega Pega' },
    { to: '/leads', icon: Users, label: 'Leads' },
  ];

  return (
    <aside className="w-64 border-r border-primary/20 bg-background-dark/80 backdrop-blur-md flex flex-col h-screen sticky top-0 z-50">
      <div className="p-6 flex items-center gap-3 border-b border-primary/10">
        <div className="size-10 bg-primary/20 flex items-center justify-center rounded-lg border border-primary/40">
          <Terminal className="text-primary size-6" />
        </div>
        <div>
          <h2 className="text-primary text-lg font-black tracking-widest uppercase italic leading-none">CyberExtract</h2>
          <span className="text-[10px] text-primary/40 font-mono uppercase tracking-tighter">Neural Interface</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-tighter transition-all group",
                isActive 
                  ? "bg-primary text-background-dark shadow-[0_0_15px_rgba(37,209,244,0.4)]" 
                  : "text-slate-400 hover:text-primary hover:bg-primary/5"
              )
            }
          >
            <item.icon className="size-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-primary/10 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all text-sm font-bold uppercase tracking-tighter">
          <Bell className="size-5" />
          Notifications
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all text-sm font-bold uppercase tracking-tighter">
          <Settings className="size-5" />
          Settings
        </button>
        
        <div className="mt-4 pt-4 border-t border-primary/10 flex items-center gap-3 px-2">
          <div className="size-10 rounded-full border-2 border-primary overflow-hidden">
            <img 
              src="https://picsum.photos/seed/cyber/100/100" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-100 truncate">Admin_User</p>
            <p className="text-[10px] text-primary/60 font-mono truncate">Sector 7-G</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
