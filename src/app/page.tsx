"use client"
import Image from "next/image";
import "./styles.css";
import "./type.css"; import styles from './Navbar.module.css';


import ScrollReveal from 'scrollreveal';

import { Particles } from "react-tsparticles";
import { useCallback, useEffect, useRef } from "react";

import type { Container, Engine } from "tsparticles-engine";

import { loadSlim } from "tsparticles-slim";
import Link from "next/link";
import Navbar from "./component/nav";
import dynamic from "next/dynamic";
import More from "./component/more";
const App = dynamic(() => import("./component/particles"),{ssr:false})
  ;
const About = dynamic(() => import("./component/about"),{ssr:false})

export default function Home() {

  return (
    <>
        <App />
        <Navbar />
        <More></More>
      <About />
    </>
  );
}
