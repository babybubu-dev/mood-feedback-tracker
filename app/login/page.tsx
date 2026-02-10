"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background transition-colors duration-300">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" aria-hidden></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" aria-hidden></div>

      <div className="relative z-10 w-full max-w-md p-8">
        <div className="absolute top-8 right-8">
          <ThemeToggle />
        </div>
        <div className="backdrop-blur-xl bg-card border border-border rounded-3xl shadow-2xl p-10 transform transition-all hover:scale-[1.01]">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-foreground mb-2 tracking-tight">
              Culi <span className="text-blue-500">Pro</span>
            </h1>
            <p className="text-muted-foreground text-sm">Chào mừng Anh Khang quay trở lại 🛠️</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface border border-border rounded-2xl py-4 px-6 text-foreground outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-muted"
                placeholder="khanghn@mynavitechtus.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Mật khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface border border-border rounded-2xl py-4 px-6 text-foreground outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-muted"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/20 transform transition-all active:scale-[0.98] mt-4"
            >
              Đăng Nhập
            </button>
          </form>

          <div className="mt-8 text-center">
            <a href="#" className="text-xs text-muted hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Quên mật khẩu?
            </a>
          </div>
        </div>
        
        <p className="mt-8 text-center text-muted text-[10px] uppercase tracking-[0.2em]">
          Powered by Culi Agent Agentic Framework
        </p>
      </div>
    </div>
  );
}
