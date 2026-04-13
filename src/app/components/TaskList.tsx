import { Task } from "../types/task";
import TaskItem from "../components/TaskItem";

type Props = {
  tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
