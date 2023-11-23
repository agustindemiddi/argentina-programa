import ReactDOM from 'react-dom';

import ButtonConfirmDelete from '../../ButtonConfirmDelete/ButtonConfirmDelete';
import ButtonCancelDelete from '../../ButtonCancelDelete/ButtonCancelDelete';

import styles from './Modal.module.css';

const Backdrop = ({ onCancel }) => {
  return <div className={styles.backdrop} onClick={onCancel} />;
};

const Overlay = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <ButtonConfirmDelete onClick={onConfirm}>Confirmar</ButtonConfirmDelete>
        <ButtonCancelDelete onClick={onCancel}>Cancelar</ButtonCancelDelete>
      </footer>
    </div>
  );
};

const Modal = ({ title, message, onConfirm, onCancel }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCancel={onCancel} />, document.body)}
      {ReactDOM.createPortal(
        <Overlay
          title={title}
          message={message}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />,
        document.body
      )}
    </>
  );
};

export default Modal;
