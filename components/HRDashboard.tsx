"use client";
import { useState, useEffect } from "react";

const departmentData = [
  { name: "Engineering", score: 4.2, count: 15, mood: "😊" },
  { name: "Design", score: 4.5, count: 8, mood: "🤩" },
  { name: "HR", score: 3.8, count: 5, mood: "😐" },
  { name: "Sales", score: 3.2, count: 12, mood: "😔" },
];

export default function HRDashboard() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto mt-10 border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">HR Insights Dashboard 📊</h2>
        <div className="bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-semibold text-sm">
          Live Updates
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departmentData.map((dept) => (
          <div key={dept.name} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{dept.name}</h3>
                <p className="text-sm text-gray-500">{dept.count} responses today</p>
              </div>
              <span className="text-3xl">{dept.mood}</span>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Happiness Score
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {dept.score} / 5.0
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                <div
                  style={{ width: `${(dept.score / 5) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
        <h3 className="text-lg font-bold text-yellow-800 mb-2">Cảnh báo từ Culi BA 🛠️</h3>
        <p className="text-sm text-yellow-700">
          Phòng <strong>Sales</strong> có chỉ số hạnh phúc giảm 15% so với tuần trước. HR nên cân nhắc tổ chức một buổi team building nhẹ nhàng hoặc khảo sát sâu hơn.
        </p>
      </div>
    </div>
  );
}
