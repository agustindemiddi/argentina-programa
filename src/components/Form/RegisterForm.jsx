import { useRef } from 'react';

import FormButton from './FormButton';
import styles from './RegisterForm.module.css';
import logo from '../../assets/logo.png';

const RegisterForm = () => {
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      passwordInputRef.current.value !== confirmPasswordInputRef.current.value
    ) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const userData = {
      firstname: firstnameInputRef.current.value,
      lastname: lastnameInputRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    console.log('Registrando usuario: ', userData);
    alert('Usuario creado con éxito!');
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <header>
        <img src={logo} alt='Logo de Argentina Programa' />
        <h2 style={{ marginBottom: 0 }}>Registro de Usuario</h2>
      </header>
      <input
        type='text'
        placeholder='Nombre'
        ref={firstnameInputRef}
        required
      />
      <input
        type='text'
        placeholder='Apellido'
        ref={lastnameInputRef}
        required
      />
      <input type='email' placeholder='Email' ref={emailInputRef} required />
      <input type='text' placeholder='Teléfono' ref={phoneInputRef} required />
      <input
        type='password'
        placeholder='Password'
        ref={passwordInputRef}
        required
      />
      <input
        type='password'
        placeholder='Confirmar password'
        ref={confirmPasswordInputRef}
      />
      <FormButton />
    </form>
  );
};

export default RegisterForm;
