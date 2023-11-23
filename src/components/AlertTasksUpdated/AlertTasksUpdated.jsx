import styles from './AlertTasksUpdated.module.css';

const AlertTasksUpdated = ({ className }) => {
  return (
    <p className={styles.alert}>
      Tu lista de tareas ha sido actualizada correctamente.
    </p>
  );
};

export default AlertTasksUpdated;
