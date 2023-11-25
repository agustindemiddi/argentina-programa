import styles from './Alert.module.css';

const AlertTasksUpdated = ({ text, error }) => {
  const dynamicClass = error ? styles.error : styles.update;
  return <p className={`${styles.alert} ${dynamicClass}`}>{text}</p>;
};

export default AlertTasksUpdated;
