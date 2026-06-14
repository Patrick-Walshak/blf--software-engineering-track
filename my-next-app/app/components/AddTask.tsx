"use client";

import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

const AddTask = ({ onAdd }: Props) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return; // don't add empty tasks
    onAdd(input.trim());
    setInput(""); // clear input after adding
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()} // add on Enter key too
        placeholder="New task..."
        className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-500 transition-colors"
      />
      <button
        onClick={handleAdd}
        className="bg-violet-600 hover:bg-violet-500 text-white text-sm px-4 py-2 rounded-xl transition-colors"
      >
        + Add
      </button>
    </div>
  );
};

export default AddTask;