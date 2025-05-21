import React from 'react';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  title: string;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  toggleButtonText: string;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  title,
  onToggleTask,
  onDeleteTask,
  toggleButtonText
}) => {
  return (
    <div className="task-list">
      <h2>{title} ({tasks.length})</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <div>
              <button onClick={() => onToggleTask(task.id)}>
                {toggleButtonText}
              </button>
              <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;