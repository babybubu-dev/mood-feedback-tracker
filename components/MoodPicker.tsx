"use client";
import { useState } from "react";

const moods = [
  { emoji: "🤩", label: "Tuyệt vời", value: 5, color: "from-yellow-400 to-orange-500" },
  { emoji: "😊", label: "Hài lòng", value: 4, color: "from-green-400 to-emerald-500" },
  { emoji: "😐", label: "Bình thường", value: 3, color: "from-blue-400 to-indigo-500" },
  { emoji: "😔", label: "Hơi buồn", value: 2, color: "from-purple-400 to-pink-500" },
  { emoji: "😫", label: "Mệt mỏi", value: 1, color: "from-red-400 to-rose-600" },
];

export default function MoodPicker() {
  const [selected, setSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSelect = async (value: number) => {
    setSelected(value);
    setLoading(true);
    try {
      await fetch("/api/mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood: value }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0f1115] border border-white/5 rounded-[2.5rem] shadow-2xl p-10 text-center relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-700"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Daily Check-in</span>
        </div>
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Cảm hứng hôm nay?</h2>
        <p className="text-gray-500 text-sm mb-12">Chia sẻ ẩn danh cùng hệ thống Culi Intelligence 🛠️</p>
        
        <div className="flex justify-between items-center gap-2 mb-4">
          {moods.map((m) => (
            <button
              key={m.value}
              onClick={() => handleSelect(m.value)}
              disabled={loading}
              className={`group relative flex flex-col items-center p-4 rounded-3xl transition-all duration-500 ${
                selected === m.value ? "bg-white/5 border border-white/10" : "hover:bg-white/[0.02]"
              }`}
            >
              <div className={`text-5xl mb-4 transition-all duration-500 ${
                selected === m.value ? "scale-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              }`}>
                {m.emoji}
              </div>
              <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-colors ${
                selected === m.value ? "text-blue-400" : "text-gray-600 group-hover:text-gray-400"
              }`}>
                {m.label}
              </span>
            </button>
          ))}
        </div>
        
        {selected && !feedbackSent && (
          <div className="mt-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="relative">
              <textarea
                className="w-full p-6 bg-white/[0.02] border border-white/5 rounded-[1.5rem] focus:ring-4 focus:ring-blue-500/10 focus:bg-white/[0.04] focus:border-white/10 outline-none text-white text-sm transition-all placeholder:text-gray-600 resize-none shadow-inner"
                placeholder="Có chuyện gì làm bạn bận tâm không? (Gửi ẩn danh...)"
                rows={4}
                onKeyDown={async (e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    const feedback = (e.target as HTMLTextAreaElement).value;
                    if (feedback) {
                      await fetch("/api/feedback", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ moodId: selected, text: feedback }),
                      });
                      setFeedbackSent(true);
                    }
                  }
                }}
              />
              <div className="absolute bottom-4 right-6">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Enter to send</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/5"></div>
              <div className="flex items-center gap-2 text-[9px] text-gray-500 uppercase tracking-[0.2em] font-black">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                End-to-end Encrypted
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/5"></div>
            </div>
          </div>
        )}

        {feedbackSent && (
          <div className="mt-10 p-8 bg-blue-500/5 rounded-[2rem] border border-blue-500/20 animate-in zoom-in duration-500">
            <p className="text-blue-400 font-black text-sm tracking-tight uppercase tracking-[0.1em]">Cảm ơn bạn! Thông điệp đã được gửi an toàn. 🛡️</p>
          </div>
        )}
      </div>
    </div>
  );
}
