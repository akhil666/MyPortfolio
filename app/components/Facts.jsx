import { facts } from "../data/content";

export default function Facts() {
  return (
    <section data-reveal className="kp-facts">
      <div className="kp-facts-grid" data-stagger>
        {facts.map((f, i) => (
          <div key={i} className="kp-fact">
            <span className="kp-fact-num">
              <span data-count={f.value}>0</span>
              {f.suffix}
            </span>
            <span className="kp-fact-label">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
