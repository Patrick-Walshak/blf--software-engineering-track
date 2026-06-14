import Nav from "./components/Nav";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 flex justify-center items-center text-white">
      <div className="w-[400px] min-h-[650px] bg-zinc-900 rounded-3xl border border-zinc-700 p-6">
        <Nav />
        <TaskList />
      </div>
    </main>
  );
}