import styles from './Alert.module.css';

const AlertTasksUpdated = ({ text, error }) => {
  const dynamicClass = error ? styles.error : styles.update;
  return <p className={`${dynamicClass} ${styles.alert}`}>{text}</p>;
};

export default AlertTasksUpdated;
