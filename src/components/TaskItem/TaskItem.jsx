import styles from './TaskItem.module.css';

const TaskItem = ({
  task: { id, name, isComplete },
  onCompleteTask,
  onDeleteTask,
}) => {
  return (
    <article>
      <input
        type='checkbox'
        checked={isComplete}
        onChange={() => onCompleteTask(id)}
      />
      <p className={isComplete ? `${styles.isComplete}` : null}>{name}</p>
      <button onClick={() => onDeleteTask(id)}>Eliminar</button>
    </article>
  );
};

export default TaskItem;
