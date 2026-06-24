"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import About from "./components/About";
import Approach from "./components/Approach";
import Services from "./components/Services";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Header />
        <Stats />
        <About />
        <Approach />
        <Services />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
