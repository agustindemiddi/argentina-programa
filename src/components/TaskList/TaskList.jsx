import TaskItem from '../TaskItem/TaskItem';

import styles from './TaskList.module.css';

const TaskList = ({ list, onCompleteTask }) => {
  return (
    <ul>
      {list.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} onCompleteTask={onCompleteTask} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
