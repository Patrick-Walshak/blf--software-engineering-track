"use client";

import { useState } from "react";
import TaskCard from "./TaskCard";
import FilterButtons from "./FilterButtons";
import Search from "./Search";
import AddTask from "./AddTask";

const sampleTasks = [
  { id: 1, title: "Complete calculus assignment", tag: "Math", due: "Due today · High priority", completed: false },
  { id: 2, title: "Read chapter 5", tag: "Science", due: "Due tomorrow", completed: false },
  { id: 3, title: "Submit lab report", tag: "Science", due: "Completed · 2h ago", completed: true },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(sampleTasks);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggle = (id: number) => {
    setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleAdd = (title: string) => {
    const newTask = {
      id: Date.now(),
      title,
      tag: "General",
      due: "No due date",
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Search />
      <FilterButtons />
      <div className="mt-4 flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </div>
      <AddTask onAdd={handleAdd} />
    </>
  );
};

export default TaskList;