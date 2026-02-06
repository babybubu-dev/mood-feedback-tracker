"use client";
import { useState } from "react";

const departmentData = [
  { name: "Engineering", score: 4.2, count: 15, mood: "😊", trend: "+2%" },
  { name: "Design", score: 4.8, count: 8, mood: "🤩", trend: "+5%" },
  { name: "HR", score: 3.8, count: 5, mood: "😐", trend: "-1%" },
  { name: "Sales", score: 3.2, count: 12, mood: "😔", trend: "-15%" },
];

export default function HRDashboard() {
  return (
    <div className="backdrop-blur-2xl bg-white/70 border border-white/30 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Thống kê hạnh phúc 📊</h2>
          <p className="text-gray-500 text-sm">Dữ liệu thời gian thực từ hệ thống Culi</p>
        </div>
        <div className="flex items-center gap-3 bg-white/80 p-2 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
              </div>
            ))}
          </div>
          <span className="text-xs font-bold text-gray-600 pr-2">+42 Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {departmentData.map((dept) => (
          <div key={dept.name} className="group p-8 bg-white/50 rounded-[2rem] border border-gray-50 hover:border-blue-200 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1 block">Phòng ban</span>
                <h3 className="text-2xl font-black text-gray-800">{dept.name}</h3>
              </div>
              <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                {dept.mood}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-4xl font-black text-gray-900">{dept.score}<span className="text-lg text-gray-300">/5.0</span></span>
                <span className={`text-xs font-bold ${dept.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {dept.trend} so với tuần trước
                </span>
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-1000 ease-out rounded-full`}
                  style={{ width: `${(dept.score / 5) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] group-hover:bg-blue-600/30 transition-all"></div>
        <div className="relative z-10 flex items-center gap-6">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-white/10">
            ⚠️
          </div>
          <div>
            <h3 className="text-white font-black text-lg mb-1">Cảnh báo từ AI Culi 🛠️</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Phòng <span className="text-white font-bold">Sales</span> đang có dấu hiệu sụt giảm tinh thần nghiêm trọng (-15%). 
              Hệ thống gợi ý tổ chức 1 buổi 1-on-1 hoặc Workshop giải tỏa áp lực.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
