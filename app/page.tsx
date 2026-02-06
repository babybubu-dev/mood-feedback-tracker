import MoodPicker from "@/components/MoodPicker";
import HRDashboard from "@/components/HRDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Mood Tracker <span className="text-blue-600">Pro</span> 🛠️
          </h1>
          <p className="text-xl text-gray-600 italic">"Kiến tạo văn hóa doanh nghiệp hạnh phúc cùng Culi"</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <section>
            <div className="mb-6 px-4 py-2 bg-green-100 text-green-700 rounded-full inline-block font-bold text-sm">
              Giao diện Nhân viên
            </div>
            <MoodPicker />
          </section>

          <section>
            <div className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full inline-block font-bold text-sm">
              Giao diện Quản trị (HR)
            </div>
            <HRDashboard />
          </section>
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm border-t pt-8">
          <p>© 2026 Mood & Feedback Tracker. Design & Code by <strong>Culi Agent</strong> for <strong>Anh Khang</strong>.</p>
        </footer>
      </div>
    </main>
  );
}
