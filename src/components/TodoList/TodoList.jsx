import { useEffect, useState } from 'react';

import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import Alert from '../UI/Alert/Alert';

const TodoList = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  const [tasks, setTasks] = useState(storedTasks || []);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isTasksUpdate, setIsTasksUpdate] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (!isInitialRender) {
      setIsTasksUpdate(true);
      const timeout = setTimeout(() => {
        setIsTasksUpdate(false);
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

  const handleError = () => setIsError(true);

  const handleClearTaskList = () => setTasks([]);

  let content = tasks.length ? (
    <TaskList
      list={tasks}
      onCompleteTask={handleCompleteTask}
      onDeleteTask={handleDeleteTask}
      onClearTaskList={handleClearTaskList}
    />
  ) : (
    <p>Aún no agregaste ninguna tarea.</p>
  );

  return (
    <>
      {isTasksUpdate && <Alert />}
      {isError && <Alert isError />}
      <TaskForm onAddTask={hanldeAddTask} onError={handleError} />
      {content}
    </>
  );
};

export default TodoList;
