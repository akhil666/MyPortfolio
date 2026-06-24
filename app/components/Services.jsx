"use client";
import React from "react";
import { motion } from "motion/react";
import { skills } from "../data/content";
import { Icon } from "./Icons";

const Services = () => {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="eyebrow">// Skills</p>
        <h2 className="section-title mt-3">The toolkit I deploy with</h2>
        <p className="mt-4 text-muted">
          Breadth across the stack so I can take a problem the whole way — from
          data model to UI to the box it runs on.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const I = Icon[group.icon];
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card p-6 transition hover:border-accent"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">
                  <I width={20} height={20} />
                </span>
                <h3 className="text-lg font-medium text-ink">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
