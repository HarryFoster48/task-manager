import { Task } from "../types/task";
import TaskItem from "../components/TaskItem";

type Props = {
  tasks: Task[];
  onToggleTask: (id: string) => void;
};

export default function TaskList({ tasks, onToggleTask }: Props) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} />
      ))}
    </ul>
  );
}
