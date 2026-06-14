"use client";

type Task = {
  id: number;
  title: string;
  tag: string;
  due: string;
  completed: boolean;
};

type Props = {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const tagColors: Record<string, string> = {
  Math: "bg-blue-900 text-blue-300",
  Science: "bg-green-900 text-green-300",
  History: "bg-red-900 text-red-300",
  Eng: "bg-yellow-900 text-yellow-300",
};

const TaskCard = ({ task, onDelete, onToggle }: Props) => {
  return (
    <div className="flex items-start gap-3 bg-zinc-800 border border-zinc-700 rounded-xl p-3">
      <button
        onClick={() => onToggle(task.id)}
        className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
          ${task.completed ? "bg-violet-600 border-violet-600" : "border-zinc-500 bg-transparent"}`}
      >
        {task.completed && (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-sm font-medium ${task.completed ? "line-through text-zinc-500" : "text-white"}`}>
            {task.title}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${tagColors[task.tag] ?? "bg-zinc-700 text-zinc-300"}`}>
            {task.tag}
          </span>
        </div>
        <p className="text-xs text-zinc-500 mt-0.5">{task.due}</p>
      </div>

      <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-400 transition-colors flex-shrink-0">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default TaskCard;