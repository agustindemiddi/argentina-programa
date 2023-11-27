import TaskItem from '../TaskItem/TaskItem';
import ButtonDeleteAllTasks from '../UI/Buttons/ButtonDeleteAllTasks/ButtonDeleteAllTasks';

import styles from './TaskList.module.css';

const TaskList = ({ list, onCompleteTask, onDeleteTask, onClearTaskList }) => {
  return (
    <>
      <ul className={styles.list}>
        {list.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
      <ButtonDeleteAllTasks onConfirm={onClearTaskList} />
    </>
  );
};

export default TaskList;
