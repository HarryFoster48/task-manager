import { Task } from "../types/task";

type Props = {
  task: Task;
};

export default function TaskItem({ task }: Props) {
  return (
    <li className="flex items-center gap-2 border rounded p-2">
      <input type="checkbox" />
      <span>{task.title}</span>
    </li>
  );
}
