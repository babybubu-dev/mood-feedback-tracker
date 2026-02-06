import MoodPicker from "@/components/MoodPicker";
import HRDashboard from "@/components/HRDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] p-6 md:p-12 relative overflow-hidden">
      {/* Global Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] max-h-[800px] bg-blue-600/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em]">
                Release 2.0
              </div>
              <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">
                Pro Max Edition
              </div>
            </div>
            <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">
              Mood <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Tracker</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
              Kiến tạo văn hóa doanh nghiệp dựa trên dữ liệu thực tế. Lắng nghe và thấu hiểu nhân sự qua AI Agentic Framework.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-right">
            <div>
              <div className="text-2xl font-black text-white">98%</div>
              <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Happiness Rate</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div>
              <div className="text-2xl font-black text-white">1.2k</div>
              <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Feedbacks</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <section className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Employee Interface</span>
            </div>
            <MoodPicker />
          </section>

          <section className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">SaaS Analytics Core</span>
            </div>
            <HRDashboard />
          </section>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/10 font-black">C</div>
            <span className="text-[11px] text-gray-600 font-bold uppercase tracking-[0.3em]">Culi Agent Intelligence</span>
          </div>
          <div className="text-[11px] text-gray-600 font-medium">
            © 2026 Designed & Engineered for <span className="text-gray-400">Anh Khang</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[11px] text-gray-600 hover:text-white transition-colors uppercase tracking-widest font-black">Chính sách</a>
            <a href="#" className="text-[11px] text-gray-600 hover:text-white transition-colors uppercase tracking-widest font-black">Tài liệu</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
