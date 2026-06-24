import { hero, marqueeWords, profile } from "../data/content";

export default function Hero() {
  const loop = [...marqueeWords, ...marqueeWords];
  return (
    <header id="top" className="kp-hero">
      <div className="kp-hero-stage">
        <canvas data-flow aria-hidden="true" className="kp-flow" />
        <div className="kp-hero-inner">
          <div className="kp-hero-main">
            <div className="kp-hero-copy" data-parallax data-speed="0.06">
              <div className="kp-hero-in kp-badge" style={{ animationDelay: "0.05s" }}>
                <span className="kp-badge-dot" />
                {hero.badge}
              </div>
              <h1 className="kp-hero-in kp-h1" style={{ animationDelay: "0.15s" }}>
                Crafting <span className="kp-grad">fast, thoughtful</span>
                <br />
                digital products,
                <br />
                end to end.
              </h1>
              <p className="kp-hero-in kp-lead" style={{ animationDelay: "0.28s" }}>
                {hero.lead}
              </p>
              <div className="kp-hero-in kp-cta-row" style={{ animationDelay: "0.4s" }}>
                <a href="#work" className="kp-btn kp-btn-primary" data-magnetic="0.3">
                  View selected work →
                </a>
                <a href="#contact" className="kp-btn kp-btn-ghost" data-magnetic="0.3">
                  Get in touch
                </a>
              </div>
            </div>

            {/* right-side profile card */}
            <div className="kp-hero-in kp-hero-visual" style={{ animationDelay: "0.5s" }}>
              <div className="kp-hero-card" data-tilt="4">
                <span className="kp-hc-pill kp-hc-pill-a">5,000+ users served</span>
                <span className="kp-hc-pill kp-hc-pill-b">Databricks · PySpark</span>
                <div className="kp-hc-top">
                  <div className="kp-hc-avatar">
                    <img src="/profile-img.png" alt={profile.name} />
                  </div>
                  <div className="kp-hc-id">
                    <div className="kp-hc-name">{profile.name}</div>
                    <div className="kp-hc-role">Forward Deployment Engineer</div>
                  </div>
                  <span className="kp-hc-status">
                    <i />
                    OPEN
                  </span>
                </div>
                <div className="kp-hc-divider" />
                <div className="kp-hc-rows">
                  <div><span>FOCUS</span><b>Full-stack · Data · AI</b></div>
                  <div><span>STACK</span><b>Python · Django · React</b></div>
                  <div><span>BASED</span><b>Kerala, IN · remote</b></div>
                  <div><span>EXPERIENCE</span><b>4+ years</b></div>
                </div>
                <div className="kp-hc-stack">
                  {["Python", "Django", "React", "Next.js", "SQL", "Databricks", "OpenAI API"].map((t) => (
                    <span key={t} className="kp-hc-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="kp-hero-in kp-hero-foot" style={{ animationDelay: "0.6s" }}>
            <div className="kp-hint">
              <span className="kp-spin">↻</span>
              MOVE OR DRAG YOUR CURSOR — TOUCH THE LINES
            </div>
            <div className="kp-hero-meta">
              <div className="kp-meta-eyebrow">{hero.metaEyebrow}</div>
              <div className="kp-meta-stat">{hero.metaStat}</div>
              <div className="kp-meta-desc">{hero.metaDesc}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="kp-marquee-wrap">
        <div className="kp-marquee-track">
          {loop.map((m, i) => (
            <span key={i} className="kp-marquee-item">
              {m}
              <span className="kp-dot" />
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
