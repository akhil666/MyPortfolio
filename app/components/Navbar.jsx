import { navLinks, profile } from "../data/content";

export default function Navbar() {
  return (
    <nav className="kp-nav">
      <a href="#top" className="kp-brand">
        <span className="kp-brand-badge">A</span>
        <span className="kp-brand-name">{profile.name}</span>
      </a>
      <div className="kp-navlinks">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="kp-navlink">
            {l.label}
          </a>
        ))}
        <a href="#contact" className="kp-nav-cta" data-magnetic="0.4">
          contact ↗
        </a>
      </div>
    </nav>
  );
}
