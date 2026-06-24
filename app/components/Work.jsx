import { projects, moreRepos, profile } from "../data/content";

export default function Work() {
  return (
    <section id="work" data-reveal className="kp-section">
      <div className="kp-work-head">
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span className="kp-section-no">02</span>
          <h2 className="kp-h2" data-blur>Selected work</h2>
        </div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="kp-work-link">
          all repos on github ↗
        </a>
      </div>

      <div className="kp-cards" data-stagger>
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="kp-card" data-tilt="5">
            <div className="kp-card-media">
              <img src={p.image} alt={p.title} className="kp-card-img" />
              <span className="kp-card-tag">{p.tag}</span>
            </div>
            <div className="kp-card-body">
              <div className="kp-card-title-row">
                <h3 className="kp-card-title">{p.title}</h3>
                <span className="kp-card-arrow">↗</span>
              </div>
              <p className="kp-card-desc">{p.desc}</p>
              <div className="kp-chips">
                {p.stack.map((s) => (
                  <span key={s} className="kp-chip">{s}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="kp-more" data-stagger>
        {moreRepos.map((r) => (
          <a key={r.num} href={r.link} target="_blank" rel="noopener noreferrer" className="kp-more-row">
            <span className="kp-more-num">{r.num}</span>
            <span className="kp-more-mid">
              <span className="kp-more-title">{r.title}</span>
              <span className="kp-more-desc">{r.desc}</span>
            </span>
            <span className="kp-more-lang">
              {r.lang} <span style={{ color: "var(--purple)" }}>↗</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
