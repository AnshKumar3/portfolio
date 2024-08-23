import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>MyLogo</Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={isOpen ? styles.barOpen : styles.bar}></div>
          <div className={isOpen ? styles.barOpen : styles.bar}></div>
          <div className={isOpen ? styles.barOpen : styles.bar}></div>
        </div>
        <ul className={isOpen ? styles.navMenuOpen : styles.navMenu}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" className={styles.navLink}>Services</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
