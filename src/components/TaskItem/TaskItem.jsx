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
      <time
        className={styles.date}
        style={isComplete ? { visibility: 'hidden' } : null}
      >
        {date}
      </time>
      <div className={styles['task-item-body']}>
        <input
          type='checkbox'
          checked={isComplete}
          onChange={() => onCompleteTask(id)}
        />
        <p className={isComplete ? `${styles.isComplete}` : null}>{name}</p>
        <ButtonDeleteItem onClick={() => onDeleteTask(id)} />
      </div>
    </li>
  );
};

export default TaskItem;
