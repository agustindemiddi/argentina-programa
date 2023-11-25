import styles from './Alert.module.css';

const AlertTasksUpdated = ({ isError }) => {
  let text;
  isError
    ? (text = '¡No seas vago, añadí una tarea!')
    : (text = 'Tu lista de tareas se ha actualizado correctamente ✔');
    
  const dynamicClass = isError ? styles.error : styles.update;

  return <p className={`${styles.alert} ${dynamicClass}`}>{text}</p>;
};

export default AlertTasksUpdated;
