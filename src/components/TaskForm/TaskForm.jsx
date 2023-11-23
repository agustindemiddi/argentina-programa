import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

import ButtonAdd from '../ButtonAdd/ButtonAdd';

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
    <form className={styles['task-form']} onSubmit={handleSubmit}>
      <input
        className={styles['add-task-input']}
        type='text'
        placeholder='Aprender React.js'
        ref={taskNameInputRef}
      />
      <ButtonAdd />
    </form>
  );
};

export default TaskForm;
