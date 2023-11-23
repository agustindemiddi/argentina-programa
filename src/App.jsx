import { useEffect, useState } from 'react';

import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import ButtonDeleteAll from './components/ButtonDeleteAll/ButtonDeleteAll';
import Modal from './components/UI/Modal/Modal';
import AlertTasksUpdated from './components/AlertTasksUpdated/AlertTasksUpdated';
import TeamMembers from './components/TeamMembers/TeamMembers';

import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [tasks, setTasks] = useLocalStorage('tasks');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (!isInitialRender) {
      setShowAlert(true);
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timeout);
    } else {
      setIsInitialRender(false);
    }
  }, [tasks]);

  const hanldeAddTask = (newTask) =>
    setTasks((prevTasks) => [newTask, ...prevTasks]);

  const handleCompleteTask = (taskId) =>
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );

  const handleDeleteTask = (taskId) =>
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

  const handleDeleteAllTasks = () => setShowConfirmation(true);

  const handleConfirmDeleteAll = () => {
    setTasks([]);
    setShowConfirmation(false);
  };

  const handleCancelDeleteAll = () => {
    setShowConfirmation(false);
  };

  let content = tasks.length ? (
    <>
      <TaskList
        list={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
      <ButtonDeleteAll onClick={handleDeleteAllTasks} />
    </>
  ) : (
    <p>Aún no agregaste ninguna tarea.</p>
  );

  return (
    <>
      <header>
        <TaskForm onAddTask={hanldeAddTask} />
      </header>
      <main>
        {showAlert && <AlertTasksUpdated />}
        {showConfirmation && (
          <Modal
            title='¡Ojota! 👀'
            message='¿Estás seguro de que querés borrar todas las tareas?'
            onConfirm={handleConfirmDeleteAll}
            onCancel={handleCancelDeleteAll}
          />
        )}
        {content}
      </main>
      <footer>
        <TeamMembers />
      </footer>
    </>
  );
};

export default App;
