import { about, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" data-reveal className="kp-section">
      <div className="kp-section-head">
        <span className="kp-section-no">01</span>
        <h2 className="kp-h2" data-blur>About</h2>
      </div>
      <div className="kp-about-grid">
        <div className="kp-avatar-wrap">
          <div className="kp-avatar-ring" />
          <div className="kp-avatar-dash" />
          <div className="kp-avatar">
            <img src="/profile-img.png" alt={profile.name} />
          </div>
          <div className="kp-avatar-badge">4+ yrs exp</div>
        </div>
        <div>
          <p className="kp-about-para" data-wordreveal>
            {about.paragraph}
          </p>
          <div className="kp-rows" data-stagger>
            {about.rows.map((r) => (
              <div key={r.k} className="kp-row">
                <span className="kp-row-k">{r.k}</span>
                <span className="kp-row-v">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
