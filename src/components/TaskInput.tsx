import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Введите новую задачу"
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
};

export default TaskInput;