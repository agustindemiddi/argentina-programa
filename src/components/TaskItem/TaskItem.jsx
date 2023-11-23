import ButtonDeleteItem from '../ButtonDeleteItem/ButtonDeleteItem';

import styles from './TaskItem.module.css';

const TaskItem = ({
  task: { id, name, isComplete },
  onCompleteTask,
  onDeleteTask,
}) => {
  return (
    <li className={styles['task-item']}>
      <input
        type='checkbox'
        checked={isComplete}
        onChange={() => onCompleteTask(id)}
      />
      <p className={isComplete ? `${styles.isComplete}` : null}>{name}</p>
      <ButtonDeleteItem onClick={() => onDeleteTask(id)} />
    </li>
  );
};

export default TaskItem;
