import styles from './ButtonConfirmDelete.module.css';

const ButtonConfirmDelete = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default ButtonConfirmDelete;
