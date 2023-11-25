import logo from '/logo.png';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img
        className={styles.logo}
        src={logo}
        alt='Logo de Argentina Programa'
      />
      <h1>lista de tareas</h1>
      <span style={{width: '120px', visibility: 'hidden'}}></span>
    </nav>
  );
};

export default Navbar;
