import { Task } from "../types/task";

type Props = {
  tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="border-2 rounded p-2 bg-black mx-10">
          {task.title}
        </li>
      ))}
    </ul>
  );
}
