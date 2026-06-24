"use client";
import React from "react";
import { profile, navLinks } from "../data/content";
import { Icon } from "./Icons";

const Footer = () => {
  return (
    <footer className="border-t border-line px-5 sm:px-[6%] lg:px-[8%] py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2 font-mono text-sm">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-bg font-bold">
              A
            </span>
            <span className="font-semibold text-ink">akhil</span>
            <span className="text-accent">.dev</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {profile.role} — building software where the problem lives.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="link-muted">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
          >
            <Icon.mail width={18} height={18} />
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            aria-label="Phone"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
          >
            <Icon.phone width={18} height={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
          >
            <Icon.linkedin width={18} height={18} />
          </a>
          <a
            href={profile.portfolio}
            target="_blank"
            rel="noreferrer"
            aria-label="Portfolio"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
          >
            <Icon.globe width={18} height={18} />
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-line pt-6 text-center sm:flex-row">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-faint">
          Built with Next.js · Tailwind · Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
