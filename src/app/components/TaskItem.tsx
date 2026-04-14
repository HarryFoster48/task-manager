import { Task } from "../types/task";

type Props = {
  task: Task;
  onToggleTask: (id: string) => void;
};

export default function TaskItem({ task, onToggleTask }: Props) {
  return (
    <li
      className={
        task.completed
          ? "flex items-center gap-2 border-2 border-gray-400 rounded p-2"
          : "flex items-center gap-2 border-2 rounded p-2"
      }
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span className={task.completed ? "line-through text-gray-400" : ""}>
        {task.title}
      </span>
    </li>
  );
}
