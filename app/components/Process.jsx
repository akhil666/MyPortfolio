import { process } from "../data/content";

export default function Process() {
  return (
    <section id="process" data-reveal className="kp-section">
      <div className="kp-section-head">
        <span className="kp-section-no">04</span>
        <h2 className="kp-h2" data-blur>How I work</h2>
      </div>
      <div className="kp-grid-4" data-stagger>
        {process.map((step) => (
          <div key={step.no} className="kp-step" data-tilt="7">
            <span className="kp-step-no">{step.no}</span>
            <h3 className="kp-step-title">{step.title}</h3>
            <p className="kp-step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
