"use client";
import React, { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data/content";
import { Icon } from "./Icons";

const SunMoon = ({ dark }) =>
  dark ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScroll
          ? "backdrop-blur-lg bg-bg/70 border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-5 sm:px-[6%] lg:px-[8%] py-4">
        {/* Wordmark */}
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-bg font-bold">
            A
          </span>
          <span className="font-semibold text-ink">akhil</span>
          <span className="text-accent">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 rounded-full border border-line bg-surface/60 px-2 py-1.5 backdrop-blur">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-1.5 font-mono text-xs text-muted transition hover:bg-accent-soft hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => setIsDarkMode((p) => !p)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:text-accent hover:border-accent"
          >
            <SunMoon dark={isDarkMode} />
          </button>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-bg transition hover:opacity-90 hover:shadow-glow"
          >
            Get in touch <Icon.arrow width={15} height={15} />
          </a>

          <button
            aria-label="Open menu"
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-line text-ink"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-surface border-l border-line p-8 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <ul className="mt-8 flex flex-col gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 font-mono text-sm text-muted transition hover:bg-accent-soft hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-bg"
          >
            Get in touch <Icon.arrow width={15} height={15} />
          </a>
          <p className="mt-8 font-mono text-xs text-faint">{profile.email}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
