import TaskItem from '../TaskItem/TaskItem';

import styles from './TaskList.module.css';

const TaskList = ({ list, onCompleteTask, onDeleteTask }) => {
  return (
    <ul className={styles['task-list']}>
      {list.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
