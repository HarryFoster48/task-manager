"use client";
import { useState } from "react";
import { Task } from "./types/task";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  function addTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <main className="flex flex-col min-h-screen items-center  bg-black">
      <h1 className="text-3xl font-bold py-20">Task Manager</h1>
      <TaskInput onAddTask={addTask} />

      <div className="w-full max-w-md">
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}
