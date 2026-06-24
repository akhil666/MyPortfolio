"use client";
import { useEffect } from "react";
import { initPortfolioEffects } from "./lib/effects";
import Preloader from "./components/Preloader";
import Backdrop from "./components/Backdrop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const cleanup = initPortfolioEffects();
    return cleanup;
  }, []);

  return (
    <>
      <div className="kp-progress"><span data-progress /></div>
      <Preloader />
      <Backdrop />
      <Navbar />
      <Hero />
      <Facts />
      <About />
      <Work />
      <Experience />
      <Process />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}
