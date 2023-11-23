import styles from './ButtonCancelDelete.module.css';

const ButtonCancelDelete = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default ButtonCancelDelete;
