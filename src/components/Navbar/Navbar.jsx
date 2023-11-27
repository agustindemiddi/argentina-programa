import logo from '/logo.png';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt='Logo de Argentina Programa' />
      <h1>Lista de Tareas</h1>
      <span />
    </nav>
  );
};

export default Navbar;
