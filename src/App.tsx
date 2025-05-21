import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';

const App: React.FC = () => {
  const {
    addTask,
    toggleTask,
    deleteTask,
    activeTasks,
    completedTasks
  } = useTasks();

  return (
    <div className="app">
      <h1>ToDo App</h1>
      <TaskInput onAddTask={addTask} />
      
      <div className="task-lists">
        <TaskList
          tasks={activeTasks}
          title="Активные задачи"
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          toggleButtonText="Выполнить"
        />
        
        <TaskList
          tasks={completedTasks}
          title="Выполненные задачи"
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          toggleButtonText="Вернуть"
        />
      </div>
    </div>
  );
};

export default App;
