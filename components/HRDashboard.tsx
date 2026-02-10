"use client";
import { useState } from "react";

const departmentData = [
  { name: "Engineering", score: 4.2, count: 15, mood: "😊", trend: "+2%", color: "bg-emerald-500" },
  { name: "Design", score: 4.8, count: 8, mood: "🤩", trend: "+5%", color: "bg-violet-500" },
  { name: "HR", score: 3.8, count: 5, mood: "😐", trend: "-1%", color: "bg-blue-500" },
  { name: "Sales", score: 3.2, count: 12, mood: "😔", trend: "-15%", color: "bg-rose-500" },
];

export default function HRDashboard() {
  return (
    <div className="bg-card border border-border rounded-[2.5rem] shadow-2xl p-10 relative overflow-hidden group transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700" aria-hidden></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" aria-hidden></span>
              <span className="text-[10px] font-black text-blue-500 dark:text-blue-400 uppercase tracking-[0.3em]">System Intelligence</span>
            </div>
            <h2 className="text-3xl font-black text-foreground tracking-tight">SaaS Analytics Dashboard</h2>
            <p className="text-muted text-sm mt-1">Phân tích chuyên sâu văn hóa doanh nghiệp</p>
          </div>
          
          <div className="flex items-center gap-4 bg-surface border border-border p-2 rounded-2xl">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-9 h-9 rounded-xl border-2 border-card bg-muted overflow-hidden ring-1 ring-border">
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="" className="opacity-80 hover:opacity-100 transition-opacity w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="h-8 w-[1px] bg-border mx-1" aria-hidden></div>
            <button className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-600/20">
              Export PDF
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departmentData.map((dept) => (
            <div key={dept.name} className="relative p-8 bg-surface rounded-[2rem] border border-border hover:border-border hover:bg-surface-hover transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{dept.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted font-bold uppercase tracking-widest">{dept.count} Members</span>
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${dept.trend.startsWith('+') ? 'text-emerald-500 dark:text-emerald-400 bg-emerald-400/10' : 'text-rose-500 dark:text-rose-400 bg-rose-400/10'}`}>
                      {dept.trend}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center text-2xl shadow-inner">
                  {dept.mood}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted font-bold">Happiness Index</span>
                    <span className="text-3xl font-black text-foreground">{dept.score}<span className="text-sm text-muted ml-1">/ 5.0</span></span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden></div>
                      <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Active</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-1.5 w-full bg-surface-hover rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${dept.color} transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                    style={{ width: `${(dept.score / 5) * 100}%` }}
                    role="progressbar"
                    aria-valuenow={dept.score}
                    aria-valuemin={0}
                    aria-valuemax={5}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-8 bg-gradient-to-r from-blue-600/10 to-transparent rounded-[2.5rem] border border-blue-500/20 relative group/alert">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-2xl shadow-2xl shadow-blue-600/40 transform group-hover/alert:rotate-6 transition-transform">
              🤖
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-foreground font-black text-lg">AI Anomaly Detection</h3>
                <span className="px-2 py-0.5 bg-rose-500 text-white text-[8px] font-black rounded uppercase tracking-widest animate-pulse">Critical</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                Hệ thống phát hiện sụt giảm <span className="text-rose-500 dark:text-rose-400 font-bold">15%</span> chỉ số hài lòng tại bộ phận <span className="text-foreground font-bold">Sales</span>. Đề xuất: Kick-off buổi workshop giải tỏa áp lực vào sáng thứ 2.
              </p>
            </div>
            <button className="hidden md:block bg-surface hover:bg-surface-hover text-foreground px-6 py-3 rounded-2xl text-xs font-bold border border-border transition-all">
              View Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
