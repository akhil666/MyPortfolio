"use client";
import React from "react";
import { motion } from "motion/react";
import { stats, toolbelt } from "../data/content";

const Stats = () => {
  return (
    <section className="w-full px-5 sm:px-[6%] lg:px-[8%] -mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card grid grid-cols-2 divide-line md:grid-cols-4 overflow-hidden"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="border-line p-6 sm:p-8 border-b md:border-b-0 [&:not(:nth-child(2n))]:border-r md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0"
          >
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-accent">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* toolbelt marquee row */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-faint">
          stack
        </span>
        {toolbelt.map((t) => (
          <span key={t} className="font-mono text-sm text-muted">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Stats;
