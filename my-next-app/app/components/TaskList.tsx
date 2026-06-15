"use client";

import { useState, useEffect } from "react";
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
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState(""); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, mounted]);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggle = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
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

  const filteredTasks = tasks
    .filter((t) => {
      if (filter === "Active") return !t.completed;
      if (filter === "Done") return t.completed;
      return true;
    })
    .filter((t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) 
    );

  if (!mounted) return null;

  return (
    <>
      <Search query={query} onSearch={setQuery} /> {}
      <FilterButtons active={filter} onFilter={setFilter} />
      <div className="mt-4 flex flex-col gap-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))
        ) : (
          <p className="text-zinc-500 text-sm text-center mt-4">No tasks found</p>
        )}
      </div>
      <AddTask onAdd={handleAdd} />
    </>
  );
};

export default TaskList;