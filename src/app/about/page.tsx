import { Navbar } from "react-bootstrap";
import "../styless.css";
import styles from '../Navbar.module.css';

import Link from "next/link";
export default function Home() {

    
  return (

    <>
    <nav className={styles.navbar}>
      <div className={styles.logo}  >
        <Link href="/">MyApp</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    
    </>
  );
}
