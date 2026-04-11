"use client";
import { useState } from "react";

type Props = {
  onAddTask: (title: string) => void;
};

export default function TaskInput({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="flex-1 border-2 rounded p-2 mb-20 mr-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task..."
      />

      <button
        className="bg-white font-bold border-2 border-white text-black px-4 py-2 rounded hover:bg-gray-300 hover:border-gray-300"
        type="submit"
      >
        +
      </button>
    </form>
  );
}
