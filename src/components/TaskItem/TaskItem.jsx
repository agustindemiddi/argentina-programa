import styles from './TaskItem.module.css';

const TaskItem = ({ task: { id, name, isComplete }, onCompleteTask }) => {
  return (
    <article>
      <input
        type='checkbox'
        checked={isComplete}
        onChange={() => onCompleteTask(id)}
      />
      <p>{name}</p>
      <button>Eliminar</button>
    </article>
  );
};

export default TaskItem;
