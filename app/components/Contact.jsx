"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { profile } from "../data/content";
import { Icon } from "./Icons";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending…");
    const formData = new FormData(event.target);
    formData.append("access_key", "3f0811ad-933b-42f7-8936-eaa848078a71");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Thanks — I'll get back to you shortly.");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Try email instead.");
      }
    } catch {
      setResult("Network error. Try emailing me directly.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="card overflow-hidden">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* left panel */}
          <div className="relative border-b border-line bg-surface/60 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-accent/10 blur-[90px]" />
            <p className="eyebrow">// Contact</p>
            <h2 className="section-title mt-3">Let&apos;s build something</h2>
            <p className="mt-4 text-muted">
              Have a problem that needs an engineer embedded next to it? Tell me
              what you&apos;re working on — I read every message.
            </p>

            <div className="mt-8 space-y-3 font-mono text-sm">
              <a href={`mailto:${profile.email}`} className="link-muted flex items-center gap-3">
                <Icon.mail width={18} height={18} className="text-accent" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link-muted flex items-center gap-3">
                <Icon.phone width={18} height={18} className="text-accent" />
                {profile.phone}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-muted flex items-center gap-3">
                <Icon.linkedin width={18} height={18} className="text-accent" />
                LinkedIn
              </a>
              <a href={profile.portfolio} target="_blank" rel="noreferrer" className="link-muted flex items-center gap-3">
                <Icon.globe width={18} height={18} className="text-accent" />
                Portfolio
              </a>
              <p className="flex items-center gap-3 text-muted">
                <Icon.pin width={18} height={18} className="text-accent" />
                {profile.location}
              </p>
            </div>
          </div>

          {/* form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-xs text-faint">name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs text-faint">email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="font-mono text-xs text-faint">message</span>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="What are you trying to build or solve?"
                className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition focus:border-accent resize-none"
              />
            </label>

            <button type="submit" className="btn-primary mt-6">
              Send message <Icon.send width={16} height={16} />
            </button>

            {result && (
              <p className="mt-4 font-mono text-xs text-muted">{result}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
