"use client";
import React from "react";
import { motion } from "motion/react";
import { workflow } from "../data/content";
import { Icon } from "./Icons";

const Approach = () => {
  return (
    <section id="approach" className="section bg-surface/40 border-y border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="eyebrow">// How I work</p>
        <h2 className="section-title mt-3">From the customer's problem to production</h2>
        <p className="mt-4 text-muted">
          The Forward Deployed loop I run on every engagement — short cycles,
          real users, software that lands and stays.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {workflow.map((w, i) => {
          const I = Icon[w.icon];
          return (
            <motion.div
              key={w.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card group relative p-6 transition hover:border-accent hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <I width={22} height={22} />
                </span>
                <span className="font-mono text-2xl font-semibold text-line group-hover:text-accent/40 transition">
                  {w.step}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium text-ink">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {w.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Approach;
