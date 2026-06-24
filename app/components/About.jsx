"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import { profile } from "../data/content";
import { Icon } from "./Icons";

const highlights = [
  {
    icon: "embed",
    title: "Customer-facing",
    text: "Comfortable in the room with stakeholders — translating fuzzy needs into shippable scope.",
  },
  {
    icon: "layers",
    title: "End-to-end",
    text: "Frontend, backend, data, and deploy. I own problems from blank page to production.",
  },
  {
    icon: "database",
    title: "Data-fluent",
    text: "MSc in CS (Data Analytics, CUSAT). I model data and build the pipelines around it.",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="eyebrow">// About</p>
        <h2 className="section-title mt-3">Engineer who ships next to the customer</h2>
      </motion.div>

      <div className="mt-16 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-3xl bg-accent/10 blur-2xl" />
          <Image
            src={assets.user_image}
            alt={profile.name}
            className="relative w-full rounded-3xl border border-line object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-line bg-surface/90 px-4 py-3 backdrop-blur">
            <p className="font-mono text-xs text-faint">// currently</p>
            <p className="text-sm text-ink">{profile.status}</p>
          </div>
        </motion.div>

        {/* copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg leading-relaxed text-muted">
            {profile.summary}
          </p>
          <p className="mt-5 leading-relaxed text-muted">
            I gravitate to the Forward Deployed model because I like being where
            the problem is real — sitting with users, understanding the workflow,
            and proving value with working software instead of slides. I move fast
            without losing the rigor needed to run in production.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((h) => {
              const I = Icon[h.icon];
              return (
                <div key={h.title} className="card p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">
                    <I width={20} height={20} />
                  </span>
                  <h3 className="mt-4 font-medium text-ink">{h.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{h.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
