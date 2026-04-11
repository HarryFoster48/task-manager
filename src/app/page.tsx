"use client";
import { useState } from "react";
import { Task } from "./types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <h1 className="text-3xl font-bold">Task Manager</h1>

      <div className="w-full max-w-md">
        <p className="text-white mb-4">Tasks here</p>
      </div>
    </main>
  );
}
