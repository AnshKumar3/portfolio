"use client"


import React, { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal';

function About() {

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
    </div>
  )
}

export default About;