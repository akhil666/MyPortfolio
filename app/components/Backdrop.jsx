import { profile, bgGlyphs } from "../data/content";

export default function Backdrop() {
  return (
    <div aria-hidden="true" className="kp-backdrop">
      <div className="kp-grid" />
      <div className="kp-blob1" />
      <div className="kp-blob2" />
      <div className="kp-bigav" data-parallax data-speed="0.12" data-base="translateY(-50%)">{profile.initials}</div>
      {bgGlyphs.map((g, i) => (
        <span
          key={i}
          className="kp-glyph-item"
          style={{
            left: g.left,
            top: g.top,
            fontSize: g.size,
            color: `rgba(157,107,255,${g.op})`,
            transform: `rotate(${g.rot})`,
            animationDuration: g.dur,
          }}
        >
          {g.text}
        </span>
      ))}
    </div>
  );
}
