import { useEffect, useState } from 'react';

import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import ButtonDeleteAll from './components/ButtonDeleteAll/ButtonDeleteAll';
import Modal from './components/UI/Modal/Modal';
import Alert from './components/Alert/Alert';
import TeamMembers from './components/TeamMembers/TeamMembers';
import Navbar from './components/Navbar/Navbar';

import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [tasks, setTasks] = useLocalStorage('tasks');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!isInitialRender) {
      setShowAlert(true);
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timeout);
    } else {
      setIsInitialRender(false);
    }
  }, [tasks]);

  useEffect(() => {
    if (isError) {
      const timeout = setTimeout(() => {
        setIsError(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isError]);

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

  const handleDeleteAllTasks = () => setShowDeleteConfirmation(true);

  const handleConfirmDeleteAll = () => {
    setTasks([]);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDeleteAll = () => setShowDeleteConfirmation(false);

  const handleError = () => {
    setIsError(true);
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
        <Navbar />
        {showAlert && (
          <Alert
            text='Tu lista de tareas ha sido actualizada correctamente ✔'
            error={isError}
          />
        )}
        {isError && (
          <Alert text='¡No seas vago, añadí una tarea!' error={isError} />
        )}
        {showDeleteConfirmation && (
          <Modal
            title='¡Ojota! 👀'
            message='¿Estás seguro de que querés borrar todas las tareas?'
            onConfirm={handleConfirmDeleteAll}
            onCancel={handleCancelDeleteAll}
          />
        )}
      </header>
      <main>
        <TaskForm onAddTask={hanldeAddTask} onError={handleError} />
        {content}
      </main>
      <footer>
        <TeamMembers />
      </footer>
    </>
  );
};

export default App;
