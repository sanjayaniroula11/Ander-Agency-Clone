import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundLines from "./BackgroundLines";
import "../index.css";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=400vh",
          scrub: true,
          pin: true
        }
      })
        .fromTo(
          ".o-letter",
          { y: "0vh", opacity: 1 },
          { y: "-150vh", opacity: 1, ease: "none" },
          0
        )
        .fromTo(
          ".w-letter",
          { y: "100vh", opacity: 1 },
          { y: "0vh", opacity: 1, ease: "none" },
          0
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full bg-black text-white overflow-visible"
    >
      <BackgroundLines />

      <nav className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-20">
        <div className="text-lg font-bold uppercase tracking-wide">Ander</div>
        <div className="text-sm uppercase tracking-widest cursor-pointer">
          Menu
        </div>
      </nav>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="flex items-center gap-8 text-[15vw] leading-[1.1] font-bold">
          <span>W</span>
          <span className="relative inline-block w-[10vw] h-[15vw] overflow-visible">
            <span className="absolute inset-0 flex items-center justify-center o-letter">
              O
            </span>
            <span className="absolute inset-0 flex items-center justify-center w-letter">
              W
            </span>
          </span>
          <span>W</span>
        </h1>

        <p className="mt-6 max-w-[500px] text-sm sm:text-base opacity-80">
          A design studio built for the now — branding, motion, & interactive experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
