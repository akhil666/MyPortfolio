"use client";
import React from "react";
import { motion } from "motion/react";
import { caseStudies } from "../data/content";
import { Icon } from "./Icons";

const Field = ({ label, children }) => (
  <div>
    <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
      {label}
    </p>
    <p className="mt-1 text-sm leading-relaxed text-muted">{children}</p>
  </div>
);

const Work = () => {
  return (
    <section id="work" className="section relative overflow-hidden bg-surface/40 border-y border-line">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-2xl"
      >
        <p className="eyebrow">// Selected work</p>
        <h2 className="section-title mt-3">Problems, solved in production</h2>
        <p className="mt-4 text-muted">
          Real engagements framed the way I think about them — the problem, the
          approach, and the outcome.
        </p>
      </motion.div>

      <div className="relative mt-14 grid gap-6 lg:grid-cols-2">
        {caseStudies.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="card group relative flex flex-col overflow-hidden transition hover:border-accent hover:-translate-y-1"
          >
            {/* header band */}
            <div className="relative flex items-center justify-between gap-4 border-b border-line bg-gradient-to-br from-accent/15 via-transparent to-transparent p-6">
              <div>
                <p className="chip">{c.kind}</p>
                <h3 className="mt-3 font-serif text-2xl text-ink">{c.name}</h3>
              </div>
              <span className="font-mono text-5xl font-semibold leading-none text-accent/15 transition group-hover:text-accent/30">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* body */}
            <div className="flex flex-1 flex-col p-6">
              <div className="space-y-4">
                <Field label="Problem">{c.problem}</Field>
                <Field label="Approach">{c.approach}</Field>
              </div>

              <div className="mt-5 flex items-start gap-2 rounded-lg bg-accent-soft px-4 py-3">
                <Icon.spark width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-sm font-medium text-ink">{c.impact}</p>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-mono text-xs text-faint">{c.year}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="relative mt-12 flex justify-center">
        <a href="#contact" className="btn-ghost">
          Let&apos;s build something <Icon.arrow width={16} height={16} />
        </a>
      </div>
    </section>
  );
};

export default Work;
