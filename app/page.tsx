import MoodPicker from "@/components/MoodPicker";
import HRDashboard from "@/components/HRDashboard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-12 relative overflow-hidden transition-colors duration-300">
      {/* Global Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] max-h-[800px] bg-blue-600/5 blur-[150px] pointer-events-none dark:bg-blue-600/5" aria-hidden></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-black text-foreground uppercase tracking-[0.2em]">
                Release 2.0
              </div>
              <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em]">
                Pro Max Edition
              </div>
            </div>
            <h1 className="text-6xl font-black text-foreground mb-4 tracking-tighter">
              Mood <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Tracker</span>
            </h1>
            <p className="text-lg text-muted max-w-lg leading-relaxed">
              Kiến tạo văn hóa doanh nghiệp dựa trên dữ liệu thực tế. Lắng nghe và thấu hiểu nhân sự qua AI Agentic Framework.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-right">
            <ThemeToggle />
            <div>
              <div className="text-2xl font-black text-foreground">98%</div>
              <div className="text-[10px] text-muted font-bold uppercase tracking-widest">Happiness Rate</div>
            </div>
            <div className="w-[1px] h-8 bg-border" aria-hidden></div>
            <div>
              <div className="text-2xl font-black text-foreground">1.2k</div>
              <div className="text-[10px] text-muted font-bold uppercase tracking-widest">Feedbacks</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <section className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" aria-hidden></span>
              <span className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Employee Interface</span>
            </div>
            <MoodPicker />
          </section>

          <section className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" aria-hidden></span>
              <span className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">SaaS Analytics Core</span>
            </div>
            <HRDashboard />
          </section>
        </div>

        <footer className="mt-32 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center text-foreground border border-border font-black">C</div>
            <span className="text-[11px] text-muted font-bold uppercase tracking-[0.3em]">Culi Agent Intelligence</span>
          </div>
          <div className="text-[11px] text-muted font-medium">
            © 2026 Designed & Engineered for <span className="text-muted-foreground">Anh Khang</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[11px] text-muted hover:text-foreground transition-colors uppercase tracking-widest font-black">Chính sách</a>
            <a href="#" className="text-[11px] text-muted hover:text-foreground transition-colors uppercase tracking-widest font-black">Tài liệu</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
