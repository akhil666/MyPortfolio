import { profile } from "../data/content";

export default function Preloader() {
  return (
    <div className="kp-preload">
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "18%", left: "50%", transform: "translateX(-50%)", width: 680, height: 680, maxWidth: "90vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(157,107,255,0.16), transparent 62%)", filter: "blur(30px)" }} />

      {/* corner metadata */}
      <div style={{ position: "absolute", inset: 0, padding: "clamp(22px,4vw,46px)", display: "flex", flexDirection: "column", justifyContent: "space-between", pointerEvents: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: "var(--mono)", fontSize: "11.5px", letterSpacing: "0.12em", color: "var(--muted)" }}>
          <div style={{ animation: "kp-fadein 0.7s ease 0.1s both" }}>
            <div style={{ color: "var(--ink)", fontWeight: 500 }}>{profile.name.toUpperCase()}</div>
            <div style={{ marginTop: 5, color: "var(--muted-2)" }}>FORWARD&nbsp;DEPLOYMENT&nbsp;ENGINEER</div>
            <div style={{ marginTop: 5, color: "var(--muted-2)" }}>10.5276°N&nbsp;/&nbsp;76.2144°E</div>
          </div>
          <div style={{ textAlign: "right", animation: "kp-fadein 0.7s ease 0.2s both" }}>
            <div style={{ color: "var(--ink)", fontWeight: 500 }}>PORTFOLIO</div>
            <div style={{ marginTop: 5, color: "var(--muted-2)" }}>© 2026 — V3.0</div>
            <div style={{ marginTop: 5, color: "var(--muted-2)" }}>KERALA, IN</div>
          </div>
        </div>
      </div>

      {/* center monogram */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
        <div style={{ position: "relative", width: "min(360px,66vw)", aspectRatio: "1" }}>
          {[
            { left: 0, top: 0, transform: "translate(-50%,-50%)" },
            { right: 0, top: 0, transform: "translate(50%,-50%)" },
            { left: 0, bottom: 0, transform: "translate(-50%,50%)" },
            { right: 0, bottom: 0, transform: "translate(50%,50%)" },
          ].map((pos, i) => (
            <span key={i} style={{ position: "absolute", ...pos, fontFamily: "var(--mono)", fontSize: 16, color: "rgba(255,255,255,0.3)" }}>+</span>
          ))}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
            <rect x="0.4" y="0.4" width="99.2" height="99.2" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.4" />
            <rect x="0.4" y="0.4" width="99.2" height="99.2" fill="none" stroke="url(#kpgrad)" strokeWidth="0.7" pathLength="100" strokeDasharray="100" strokeDashoffset="100" style={{ animation: "kp-draw 2s cubic-bezier(.5,0,.2,1) forwards" }} />
            <defs>
              <linearGradient id="kpgrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#9d6bff" />
                <stop offset="1" stopColor="#5ad1ff" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 700, fontSize: "clamp(78px,13vw,128px)", letterSpacing: "-0.045em", background: "linear-gradient(150deg,#ffffff,#cdb8ff 34%,#9d6bff 64%,#5ad1ff)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", animation: "kp-fadein 0.8s ease 0.3s both" }}>
            {profile.initials}
          </div>
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.32em", color: "var(--muted)", animation: "kp-fadein 0.8s ease 0.5s both" }}>
          DESIGN&nbsp;&nbsp;·&nbsp;&nbsp;DEVELOP&nbsp;&nbsp;·&nbsp;&nbsp;DEPLOY
        </div>
      </div>

      {/* bottom progress */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 clamp(22px,4vw,46px) clamp(30px,5vw,56px)", animation: "kp-fadein 0.8s ease 0.55s both" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "11.5px", letterSpacing: "0.14em", color: "var(--muted-2)" }}>LOADING&nbsp;EXPERIENCE</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 3, fontFamily: "var(--display)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", lineHeight: 0.9 }}>
              <span data-preload-count style={{ fontSize: "clamp(40px,6vw,64px)", fontVariantNumeric: "tabular-nums" }}>0</span>
              <span style={{ fontSize: "clamp(18px,2.4vw,26px)", color: "var(--purple)" }}>%</span>
            </div>
          </div>
          <div style={{ position: "relative", height: 3, width: "100%", background: "rgba(255,255,255,0.08)", borderRadius: 100, overflow: "hidden" }}>
            <div className="kp-bar-fill" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#9d6bff,#5ad1ff)", borderRadius: 100 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
