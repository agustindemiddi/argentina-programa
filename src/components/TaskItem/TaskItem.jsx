import styles from './TaskItem.module.css';

const TaskItem = ({ task: { name } }) => {
  return <article>
    <p>{name}</p>
    <button>Eliminar</button>
  </article>;
};

export default TaskItem;
