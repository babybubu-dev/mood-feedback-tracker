"use client";
import { useState } from "react";

const moods = [
  { emoji: "🤩", label: "Excellent", value: 5 },
  { emoji: "😊", label: "Good", value: 4 },
  { emoji: "😐", label: "Neutral", value: 3 },
  { emoji: "😔", label: "Bad", value: 2 },
  { emoji: "😫", label: "Terrible", value: 1 },
];

export default function MoodPicker() {
  const [selected, setSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = async (value: number) => {
    setSelected(value);
    setLoading(true);
    try {
      const res = await fetch("/api/mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood: value }),
      });
      if (res.ok) alert("Cảm ơn bạn đã chia sẻ tâm trạng! 🛠️");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl text-center max-w-md mx-auto mt-10 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Hôm nay bạn thấy thế nào?</h2>
      <div className="flex justify-between gap-2">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => handleSelect(m.value)}
            disabled={loading}
            className={`text-4xl p-3 rounded-xl transition-all ${
              selected === m.value ? "bg-blue-100 scale-110 border-2 border-blue-400" : "hover:bg-gray-50"
            }`}
            title={m.label}
          >
            {m.emoji}
          </button>
        ))}
      </div>
      {selected && <p className="mt-4 text-green-600 font-medium animate-pulse">Đã ghi nhận! ✨</p>}
    </div>
  );
}
