"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import { profile, terminalLines } from "../data/content";
import { Icon } from "./Icons";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d },
});

const Header = () => {
  return (
    <header
      id="top"
      className="relative min-h-screen w-full overflow-hidden px-5 sm:px-[6%] lg:px-[8%] pt-32 pb-16 flex items-center"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-0 accent-glow" />

      <div className="relative grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-muted">
              {profile.status}
            </span>
          </motion.div>

          <motion.p {...fade(0.05)} className="mt-6 eyebrow">
            // {profile.role}
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="mt-3 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02]"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            {...fade(0.14)}
            className="mt-2 font-mono text-sm text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            {...fade(0.18)}
            className="mt-6 max-w-xl text-lg sm:text-xl text-muted leading-relaxed"
          >
            {profile.headline}
          </motion.p>

          <motion.div
            {...fade(0.26)}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Get in touch <Icon.arrow width={16} height={16} />
            </a>
            <a
              href={profile.resume}
              download
              className="btn-ghost w-full sm:w-auto"
            >
              Download résumé <Icon.download width={16} height={16} />
            </a>
          </motion.div>

          <motion.div
            {...fade(0.34)}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-faint"
          >
            <span className="inline-flex items-center gap-1.5">
              <Icon.pin width={14} height={14} /> {profile.location}
            </span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link-muted inline-flex items-center gap-1.5">
              <Icon.phone width={14} height={14} /> {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-muted inline-flex items-center gap-1.5">
              <Icon.linkedin width={14} height={14} /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right: terminal + avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="card overflow-hidden shadow-card">
            {/* title bar */}
            <div className="flex items-center gap-2 border-b border-line bg-elevated px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-xs text-faint">
                ~/akhil — zsh
              </span>
            </div>
            {/* body */}
            <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.accent
                      ? "text-accent"
                      : line.prompt
                      ? "text-ink"
                      : "text-muted"
                  }
                >
                  {line.prompt && <span className="text-accent">$ </span>}
                  {line.text}
                </div>
              ))}
              <div className="text-ink">
                $ <span className="inline-block w-2 h-4 translate-y-0.5 bg-accent animate-blink" />
              </div>
            </div>
          </div>

          {/* floating avatar badge */}
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-card">
            <Image
              src={assets.profile_img}
              alt={profile.name}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-medium text-ink">{profile.name}</p>
              <p className="font-mono text-[11px] text-accent">FDE · full-stack</p>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
