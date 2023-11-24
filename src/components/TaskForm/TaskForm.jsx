import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

import ButtonAdd from '../ButtonAdd/ButtonAdd';

import styles from './TaskForm.module.css';

const TaskForm = ({ onAddTask, onError }) => {
  const taskNameInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskString = taskNameInputRef.current.value;
    if (!taskString) {
      onError();
      taskNameInputRef.current.focus();
      return;
    }

    const task = {
      id: uuid(),
      name: taskString,
      isComplete: false,
      timestamp: Date.now(),
    };

    onAddTask(task);

    taskNameInputRef.current.value = '';
    taskNameInputRef.current.focus();
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
