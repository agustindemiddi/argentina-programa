import TaskItem from '../TaskItem/TaskItem';

import styles from './TaskList.module.css';

const TaskList = ({ list, onCompleteTask, onDeleteTask }) => {
  return (
    <ul className={styles['task-list']}>
      {list.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
