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
    <div className="backdrop-blur-2xl bg-white/70 border border-white/30 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-black mb-2 text-gray-900 tracking-tight">Cảm hứng hôm nay?</h2>
      <p className="text-gray-500 text-sm mb-10">Chia sẻ tâm trạng của bạn để Culi hiểu bạn hơn 🛠️</p>
      
      <div className="flex justify-between items-center gap-4">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => handleSelect(m.value)}
            disabled={loading}
            className={`group relative flex flex-col items-center transition-all duration-500 ${
              selected === m.value ? "scale-110" : "hover:scale-105"
            }`}
          >
            <div className={`text-5xl mb-3 drop-shadow-md transition-transform group-hover:rotate-12 ${
              selected === m.value ? "animate-bounce" : ""
            }`}>
              {m.emoji}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
              selected === m.value ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
            }`}>
              {m.label}
            </span>
            {selected === m.value && (
              <div className={`absolute -bottom-2 w-1 h-1 rounded-full bg-blue-600 animate-ping`}></div>
            )}
          </button>
        ))}
      </div>
      
      {selected && !feedbackSent && (
        <div className="mt-12 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="relative">
            <textarea
              className="w-full p-6 bg-gray-50/50 border border-gray-100 rounded-[1.5rem] focus:ring-4 focus:ring-blue-500/10 focus:bg-white outline-none text-gray-700 text-sm transition-all placeholder:text-gray-400 resize-none"
              placeholder="Có chuyện gì làm bạn bận tâm không? (Chia sẻ ẩn danh...)"
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
            <div className="absolute bottom-4 right-6 flex items-center gap-2">
              <span className="text-[10px] text-gray-400 font-medium">Nhấn Enter để gửi</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Mã hóa đầu cuối & Ẩn danh
          </div>
        </div>
      )}

      {feedbackSent && (
        <div className="mt-10 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 animate-in zoom-in duration-500">
          <p className="text-blue-700 font-bold text-sm">Cảm ơn bạn! Culi đã nhận được thông điệp. 💙</p>
        </div>
      )}
    </div>
  );
}
