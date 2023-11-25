import { createPortal } from 'react-dom';

import ButtonConfirmDelete from '../Buttons/ButtonConfirmDelete/ButtonConfirmDelete';
import ButtonCancelDelete from '../Buttons/ButtonCancelDelete/ButtonCancelDelete';

import styles from './Modal.module.css';

const Backdrop = ({ onCancel }) => {
  return <div className={styles.backdrop} onClick={onCancel} />;
};

const Overlay = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>¡Ojota! 👀</h2>
      </header>
      <div className={styles.content}>
        <p>¿Estás seguro de que querés borrar todas las tareas?</p>
      </div>
      <footer className={styles.actions}>
        <ButtonConfirmDelete onClick={onConfirm}>Confirmar</ButtonConfirmDelete>
        <ButtonCancelDelete onClick={onCancel}>Cancelar</ButtonCancelDelete>
      </footer>
    </div>
  );
};

const Modal = ({ onConfirm, onCancel }) => {
  return (
    <>
      {createPortal(<Backdrop onCancel={onCancel} />, document.body)}
      {createPortal(
        <Overlay onConfirm={onConfirm} onCancel={onCancel} />,
        document.body
      )}
    </>
  );
};

export default Modal;
