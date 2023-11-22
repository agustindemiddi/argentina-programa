import TaskItem from '../TaskItem/TaskItem';

import styles from './TaskList.module.css';

const TaskList = ({ list }) => {
  return (
    <ul>
      {list.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
