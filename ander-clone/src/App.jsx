import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";


import "./index.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import CTA from "./components/CTA";

import BackgroundLines from "./components/BackgroundLines";

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <BackgroundLines />
      <About />
      <Services />
      <Projects />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
