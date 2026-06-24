import { experience, education } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" data-reveal className="kp-section">
      <div className="kp-section-head">
        <span className="kp-section-no">03</span>
        <h2 className="kp-h2" data-blur>Experience</h2>
      </div>

      <div className="kp-exp" data-stagger>
        {experience.map((e, i) => (
          <div key={i} className="kp-exp-item">
            <span className="kp-exp-node" />
            <div className="kp-exp-head">
              <div className="kp-exp-role">
                {e.role} <span className="kp-exp-org">· {e.org}</span>
              </div>
              <span className="kp-exp-period">{e.period}</span>
            </div>
            <ul className="kp-exp-points">
              {e.points.map((p, j) => (
                <li key={j} className="kp-exp-point">{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="kp-edu-grid" data-stagger>
        {education.map((ed, i) => (
          <div key={i} className="kp-edu-card" data-tilt="5">
            <span className="kp-edu-k">{ed.k}</span>
            <h3 className="kp-edu-title">{ed.title}</h3>
            <p className="kp-edu-org">{ed.org}</p>
            <p className="kp-edu-meta">{ed.meta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
