
import Image from "next/image";

import Navbar from "../app";
import ScrollReveal from 'scrollreveal';

import { Particles } from "react-tsparticles";
import { useCallback, useEffect, useRef } from "react";

import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

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
    <div>ansh</div>
  );
}
