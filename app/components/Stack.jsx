import { capabilities } from "../data/content";

export default function Stack() {
  return (
    <section id="stack" data-reveal className="kp-section">
      <div className="kp-section-head">
        <span className="kp-section-no">05</span>
        <h2 className="kp-h2" data-blur>Stack &amp; capabilities</h2>
      </div>
      <div className="kp-grid-3" data-stagger>
        {capabilities.map((c) => (
          <div key={c.no} className="kp-cap" data-tilt="6">
            <span className="kp-cap-no">{c.no}</span>
            <h3 className="kp-cap-title">{c.title}</h3>
            <div className="kp-cap-items">
              {c.items.map((it) => (
                <span key={it} className="kp-cap-item">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
