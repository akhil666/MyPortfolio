"use client";
import React from "react";
import { motion } from "motion/react";
import { experience, education, certifications } from "../data/content";
import { Icon } from "./Icons";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="eyebrow">// Experience</p>
        <h2 className="section-title mt-3">Where I&apos;ve shipped</h2>
      </motion.div>

      {/* work timeline */}
      <div className="relative mt-14 ml-2 border-l border-line pl-8 sm:pl-10">
        {experience.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[42px] sm:-left-[50px] grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-accent">
              <Icon.briefcase width={15} height={15} />
            </span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-medium text-ink">
                {e.role} <span className="text-muted">· {e.org}</span>
              </h3>
              <span className="font-mono text-xs text-faint whitespace-nowrap">
                {e.period}
              </span>
            </div>

            <ul className="mt-3 space-y-2">
              {e.points.map((p, j) => (
                <li key={j} className="flex gap-2.5 text-sm text-muted">
                  <Icon.check width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* education + certifications */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6 lg:col-span-2"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">
              <Icon.cap width={20} height={20} />
            </span>
            <h3 className="font-serif text-xl text-ink">Education</h3>
          </div>
          <div className="mt-5 space-y-5">
            {education.map((ed, i) => (
              <div key={i} className="border-l border-line pl-4">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-medium text-ink">{ed.degree}</p>
                  <span className="font-mono text-xs text-faint">{ed.period}</span>
                </div>
                <p className="text-sm text-muted">{ed.org}</p>
                {ed.note && (
                  <p className="mt-1 text-xs text-faint">{ed.note}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-6"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">
              <Icon.badge width={20} height={20} />
            </span>
            <h3 className="font-serif text-xl text-ink">Certifications</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2.5 text-sm text-muted">
                <Icon.check width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
