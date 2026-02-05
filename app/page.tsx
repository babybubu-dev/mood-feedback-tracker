import MoodPicker from "@/components/MoodPicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Mood Tracker 🛠️</h1>
        <p className="text-gray-600 italic">"Lắng nghe nhịp đập tâm hồn nhân viên"</p>
      </div>
      <MoodPicker />
    </main>
  );
}
