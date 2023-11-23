import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';

import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [tasks, setTasks] = useLocalStorage('tasks');

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

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  let content = tasks.length ? (
    <>
      <TaskList
        list={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
      <button onClick={handleDeleteAllTasks}>Borrar lista</button>
    </>
  ) : (
    <p>Aún no agregaste ninguna tarea.</p>
  );

  return (
    <>
      <TaskForm onAddTask={hanldeAddTask} />
      {content}
    </>
  );
};

export default App;
