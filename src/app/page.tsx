"use client"
import Image from "next/image";
import "./styles.css"; 
import "./type.css";import styles from './Navbar.module.css';

import Navbar from "./app";
import ScrollReveal from 'scrollreveal';

import { Particles } from "react-tsparticles";
import { useCallback, useEffect, useRef } from "react";

import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import Link from "next/link";

export default function Home() {
    const sr = ScrollReveal();

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    
}, []); 


    const revealRef = useRef<HTMLDivElement>(null);


  
    useEffect(() => {
        if (revealRef.current) {
          ScrollReveal().reveal(revealRef.current, {
            duration: 5000,
            origin: 'left',
            distance: '300px'
          });
        }
      }, []);
    
    
  return (
    <div>
      
      <div className="grid h-screen place-items-center responsive-div">
      
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
               
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    
    <nav className={styles.navbar} style={{width:"100%"}}>
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

      <div className="grid h-screen place-items-center">
      <div ref={revealRef} className="flex space-x-4">
        <div>
          This content will be revealed on scroll!
          <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Image 1" />
        </div>
        <div>
          This content will be revealed on scroll!
          <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Image 2" />
        </div>
      </div>
    </div>
      <div style={{height:"2000px"}}>asd</div>

    </div>
  );
}
