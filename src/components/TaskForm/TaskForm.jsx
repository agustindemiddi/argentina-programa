import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './TaskForm.module.css';

const TaskForm = ({ onAddTask }) => {
  const taskNameInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: uuid(),
      name: taskNameInputRef.current.value,
      isComplete: false,
    };

    onAddTask(task);

    taskNameInputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Aprender React.js'
        ref={taskNameInputRef}
      />
      <button>Agregar</button>
    </form>
  );
};

export default TaskForm;
