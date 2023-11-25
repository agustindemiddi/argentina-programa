import ButtonDeleteItem from '../ButtonDeleteItem/ButtonDeleteItem';

import styles from './TaskItem.module.css';

const TaskItem = ({
  task: { id, name, isComplete, timestamp },
  onCompleteTask,
  onDeleteTask,
}) => {
  const fullDate = new Date(timestamp);
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  const date = `${day}/${month}/${year}`;

  return (
    <li className={styles['task-item']}>
      <span style={isComplete ? { visibility: 'hidden' } : null}>
        Tarea añadida: {date}
      </span>
      <div className={styles['task-item-body']}>
        <label htmlFor={id}>
          <input
            type='checkbox'
            checked={isComplete}
            onChange={() => onCompleteTask(id)}
            id={id}
          />
          <p className={isComplete ? `${styles.isComplete}` : null}>{name}</p>
        </label>
        <ButtonDeleteItem onClick={() => onDeleteTask(id)} />
      </div>
    </li>
  );
};

export default TaskItem;
