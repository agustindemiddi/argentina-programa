import logo from '../../../public/logo.png';

import styles from './Navbar.module.css';

const Navbar = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <img
        className={styles.logo}
        src={logo}
        alt='Logo de Argentina Programa'
      />
      {children}
    </nav>
  );
};

export default Navbar;
