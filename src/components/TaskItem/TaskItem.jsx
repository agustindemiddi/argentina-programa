import ButtonDeleteTask from '../UI/Buttons/ButtonDeleteTask/ButtonDeleteTask';

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
    <li className={styles.item}>
      <span style={isComplete ? { visibility: 'hidden' } : null}>
        Tarea añadida: {date}
      </span>
      <div>
        <label htmlFor={id}>
          <input
            type='checkbox'
            checked={isComplete}
            onChange={() => onCompleteTask(id)}
            id={id}
          />
          <p className={isComplete ? `${styles.isComplete}` : null}>{name}</p>
        </label>
        <ButtonDeleteTask onClick={() => onDeleteTask(id)} />
      </div>
    </li>
  );
};

export default TaskItem;
