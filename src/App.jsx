import { useState } from 'react';

import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';

const DUMMY_LIST = [
  { id: '1', name: 'a', isComplete: false },
  { id: '2', name: 'b', isComplete: true },
  { id: '3', name: 'c', isComplete: false },
  { id: '4', name: 'd', isComplete: false },
  { id: '5', name: 'e', isComplete: true },
];

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_LIST);

  const hanldeAddTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      );
    });
  };

  return (
    <>
      <TaskForm onAddTask={hanldeAddTask} />
      <TaskList list={tasks} onCompleteTask={handleCompleteTask} />
    </>
  );
};

export default App;
