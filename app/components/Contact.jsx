import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" data-reveal className="kp-contact">
      <div className="kp-contact-glow" />
      <div className="kp-contact-inner">
        <span className="kp-contact-eyebrow">06 — CONTACT</span>
        <h2 className="kp-contact-h2" data-blur>
          Have a project in mind?
          <br />
          Let&apos;s <span style={{ color: "var(--purple)" }}>build it.</span>
        </h2>
        <p className="kp-contact-p">
          Whether it&apos;s a full-stack build, an AI-enabled platform, a data pipeline, or a
          front end that needs polish — I&apos;d love to hear about it.
        </p>
        <a href={`mailto:${profile.email}`} className="kp-contact-cta" data-magnetic="0.3">
          Start a conversation →
        </a>
        <div className="kp-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="kp-social">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="kp-social">LinkedIn ↗</a>
          <a href={`mailto:${profile.email}`} className="kp-social">Email ↗</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="kp-social">{profile.phone} ↗</a>
        </div>
      </div>
    </section>
  );
}
