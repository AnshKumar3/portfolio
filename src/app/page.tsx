"use client"
import Image from "next/image";
import "./styles.css";
import "./type.css"; import styles from './Navbar.module.css';
import App from "./component/particles";

import ScrollReveal from 'scrollreveal';

import { Particles } from "react-tsparticles";
import { useCallback, useEffect, useRef } from "react";

import type { Container, Engine } from "tsparticles-engine";

import { loadSlim } from "tsparticles-slim";
import Link from "next/link";
import About from "./component/about";

export default function Home() {

  return (
    <>

      <div className="grid h-screen place-items-center responsive-div">

        <App />


        <nav className={styles.navbar} >
          <div className={styles.logo}>
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
        <div className="input-wrapper">
          <input aria-label="Ask us anything"></input>
          <span className="placeholder"></span>
        </div>
        <div className="typewriter">
          <h1>Creative Fullstack Web Developer</h1>
        </div>
        <div className="gagan">
          <h1>G a g a n</h1>
        </div>
        <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Gagan</h1>

        <img
          src="https://i.imgur.com/MK3eW3Am.jpg"
          alt="Katherine Johnson"
        />



      </div>

      <About />
      <div style={{ height: "2000px" }}>asd</div>

    </>
  );
}
