import styles from './FormButton.module.css';

const FormButton = () => {
  return (
    <button className={styles.formButton} type='submit'>
      Enviar
    </button>
  );
};

export default FormButton;
