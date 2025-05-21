import { useState } from 'react';
import { Task } from '../types/task';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    if (text.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    activeTasks: tasks.filter(task => !task.completed),
    completedTasks: tasks.filter(task => task.completed)
  };
};

export default useTasks;