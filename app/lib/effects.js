// Imperative animation/interaction logic. Returns a cleanup that cancels rAF
// loops and removes listeners (safe for React StrictMode / route changes).
//
// Performance notes:
//  - All scroll-driven work runs through ONE rAF-batched master loop.
//  - The hero flow-line canvas pauses when the hero leaves the viewport.
//  - Tilt/magnetic/parallax are disabled under prefers-reduced-motion.

export function initPortfolioEffects() {
  const rafs = [];
  const cleanups = [];
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const raf = (fn) => {
    const id = requestAnimationFrame(fn);
    rafs.push(id);
    return id;
  };
  const on = (target, type, handler, opts) => {
    target.addEventListener(type, handler, opts);
    cleanups.push(() => target.removeEventListener(type, handler, opts));
  };

  // ---- master scroll loop -------------------------------------------------
  const scrollSubs = [];
  let scrollTicking = false;
  const runScroll = () => {
    scrollTicking = false;
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    for (let i = 0; i < scrollSubs.length; i++) scrollSubs[i](y);
  };
  const onScroll = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      raf(runScroll);
    }
  };
  on(window, "scroll", onScroll, { passive: true });
  on(window, "resize", onScroll, { passive: true });

  /* ---------- scroll progress bar ---------- */
  (function setupProgress() {
    const bar = document.querySelector("[data-progress]");
    if (!bar) return;
    scrollSubs.push(() => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(1, (window.scrollY || 0) / max) : 0;
      bar.style.transform = `scaleX(${p})`;
    });
  })();

  /* ---------- nav hide-on-scroll + bg ---------- */
  (function setupNav() {
    const nav = document.querySelector(".kp-nav");
    if (!nav) return;
    let last = window.scrollY || 0;
    scrollSubs.push((y) => {
      if (y > last && y > 150) nav.classList.add("kp-nav-hidden");
      else nav.classList.remove("kp-nav-hidden");
      nav.classList.toggle("kp-nav-solid", y > 40);
      last = y;
    });
  })();

  /* ---------- scrollspy (active nav link) ---------- */
  (function setupScrollSpy() {
    const links = [...document.querySelectorAll(".kp-navlink")];
    if (!links.length) return;
    const targets = links
      .map((l) => {
        const id = l.getAttribute("href");
        const el = id && id.startsWith("#") ? document.querySelector(id) : null;
        return el ? { link: l, el } : null;
      })
      .filter(Boolean);
    scrollSubs.push(() => {
      const mid = (window.scrollY || 0) + window.innerHeight * 0.35;
      let active = null;
      for (const t of targets) {
        if (t.el.offsetTop <= mid) active = t;
      }
      links.forEach((l) => l.classList.remove("is-active"));
      if (active) active.link.classList.add("is-active");
    });
  })();

  /* ---------- parallax depth ---------- */
  if (!reduce) {
    const items = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
      el,
      speed: parseFloat(el.dataset.speed) || 0.1,
      base: el.dataset.base || "",
    }));
    if (items.length) {
      scrollSubs.push((y) => {
        for (const it of items) {
          it.el.style.transform = `${it.base} translate3d(0, ${(y * it.speed).toFixed(1)}px, 0)`;
        }
      });
    }
  }

  /* ---------- section reveal ---------- */
  (function setupReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      el.style.transition =
        "opacity 0.7s cubic-bezier(.2,.7,.2,1), transform 0.7s cubic-bezier(.2,.7,.2,1)";
    });
    const reveal = (el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      els.forEach((el) => io.observe(el));
      const t = setTimeout(() => els.forEach(reveal), 1600);
      cleanups.push(() => {
        clearTimeout(t);
        io.disconnect();
      });
    } else {
      els.forEach(reveal);
    }
  })();

  /* ---------- staggered children reveal ---------- */
  (function setupStagger() {
    const groups = document.querySelectorAll("[data-stagger]");
    if (!groups.length) return;
    groups.forEach((group) => {
      const kids = Array.from(group.children);
      kids.forEach((k, i) => {
        k.style.opacity = "0";
        k.style.transform = "translateY(26px)";
        k.style.transition =
          "opacity 0.6s cubic-bezier(.2,.7,.2,1), transform 0.6s cubic-bezier(.2,.7,.2,1)";
        k.style.transitionDelay = i * 0.07 + "s";
        k.style.willChange = "opacity, transform";
      });
    });
    const reveal = (group) => {
      Array.from(group.children).forEach((k) => {
        k.style.opacity = "1";
        k.style.transform = "none";
      });
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      groups.forEach((g) => io.observe(g));
      const t = setTimeout(() => groups.forEach(reveal), 1800);
      cleanups.push(() => {
        clearTimeout(t);
        io.disconnect();
      });
    } else {
      groups.forEach(reveal);
    }
  })();

  /* ---------- blur reveal headings ---------- */
  (function setupBlurReveal() {
    const heads = document.querySelectorAll("[data-blur]");
    if (!heads.length) return;
    heads.forEach((el) => {
      el.style.filter = "blur(16px)";
      el.style.opacity = "0";
      el.style.transition = "filter 1s cubic-bezier(.2,.7,.2,1), opacity 1s ease";
      el.style.willChange = "filter, opacity";
    });
    const reveal = (el) => {
      el.style.filter = "blur(0px)";
      el.style.opacity = "1";
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.45 }
      );
      heads.forEach((el) => io.observe(el));
      const t = setTimeout(() => heads.forEach(reveal), 2200);
      cleanups.push(() => {
        clearTimeout(t);
        io.disconnect();
      });
    } else {
      heads.forEach(reveal);
    }
  })();

  /* ---------- preloader counter ---------- */
  (function setupPreloader() {
    const el = document.querySelector("[data-preload-count]");
    if (!el) return;
    const dur = 1950;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 2);
      el.textContent = Math.round(eased * 100).toString();
      if (p < 1) raf(tick);
    };
    raf(tick);
  })();

  /* ---------- fact counters ---------- */
  (function setupCounters() {
    const nodes = document.querySelectorAll("[data-count]");
    if (!nodes.length) return;
    const run = (el) => {
      const target = parseFloat(el.getAttribute("data-count")) || 0;
      const dur = 1600;
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString();
        if (p < 1) raf(tick);
      };
      raf(tick);
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !e.target.dataset.ran) {
              e.target.dataset.ran = "1";
              run(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      nodes.forEach((n) => io.observe(n));
      cleanups.push(() => io.disconnect());
    } else {
      nodes.forEach((n) => {
        n.textContent = n.getAttribute("data-count");
      });
    }
  })();

  /* ---------- word-by-word reveal paragraph ---------- */
  (function setupWordReveal() {
    const para = document.querySelector("[data-wordreveal]");
    if (!para || para.dataset.wrDone) return;
    para.dataset.wrDone = "1";
    const text = para.textContent.trim();
    const parts = text.split(/(\s+)/);
    para.textContent = "";
    const spans = [];
    parts.forEach((w) => {
      if (!w.trim()) {
        para.appendChild(document.createTextNode(w));
        return;
      }
      const s = document.createElement("span");
      s.textContent = w;
      s.style.color = "#34304a";
      s.style.transition = "color 0.35s ease";
      para.appendChild(s);
      spans.push(s);
    });
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    scrollSubs.push(() => {
      const rect = para.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const startY = vh * 0.82;
      const endY = vh * 0.32;
      const span = rect.height + (startY - endY);
      const scrolled = startY - rect.top;
      const prog = clamp(scrolled / span, 0, 1);
      const lit = Math.round(prog * spans.length);
      spans.forEach((s, i) => {
        s.style.color = i < lit ? "#ece9f6" : "#34304a";
      });
    });
  })();

  /* ---------- magnetic buttons ---------- */
  if (!reduce) {
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic) || 0.35;
      let cx = 0, cy = 0, tx = 0, ty = 0, running = false;
      el.style.willChange = "transform";
      const loop = () => {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        el.style.transform = `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px)`;
        if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) raf(loop);
        else running = false;
      };
      const kick = () => {
        if (!running) {
          running = true;
          raf(loop);
        }
      };
      on(el, "pointermove", (e) => {
        const r = el.getBoundingClientRect();
        tx = (e.clientX - (r.left + r.width / 2)) * strength;
        ty = (e.clientY - (r.top + r.height / 2)) * strength;
        kick();
      });
      on(el, "pointerleave", () => {
        tx = 0;
        ty = 0;
        kick();
      });
    });
  }

  /* ---------- 3D tilt + cursor spotlight ---------- */
  if (!reduce) {
    document.querySelectorAll("[data-tilt]").forEach((el) => {
      const MAX = parseFloat(el.dataset.tilt) || 6;
      let trx = 0, try_ = 0, crx = 0, cry = 0, running = false, hover = false;
      el.style.transformStyle = "preserve-3d";
      el.style.willChange = "transform";
      const loop = () => {
        crx += (trx - crx) * 0.12;
        cry += (try_ - cry) * 0.12;
        const lift = hover ? -6 : 0;
        el.style.transform = `perspective(900px) rotateX(${crx.toFixed(2)}deg) rotateY(${cry.toFixed(2)}deg) translateY(${lift}px)`;
        if (hover || Math.abs(trx - crx) > 0.05 || Math.abs(try_ - cry) > 0.05) raf(loop);
        else {
          running = false;
          el.style.transform = "";
        }
      };
      const kick = () => {
        if (!running) {
          running = true;
          raf(loop);
        }
      };
      on(el, "pointerenter", () => {
        hover = true;
        el.style.transition = "none";
        kick();
      });
      on(el, "pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        try_ = (px - 0.5) * MAX * 2;
        trx = -(py - 0.5) * MAX * 2;
        el.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
        el.style.setProperty("--my", (py * 100).toFixed(1) + "%");
        kick();
      });
      on(el, "pointerleave", () => {
        hover = false;
        trx = 0;
        try_ = 0;
        el.style.transition = "transform 0.5s cubic-bezier(.2,.7,.2,1)";
        kick();
      });
    });
  }

  /* ---------- cursor-reactive flow lines (hero) ---------- */
  (function setupFlowLines() {
    const canvas = document.querySelector("[data-flow]");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    let W = 0, H = 0, rect = { left: 0, top: 0 };
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const N = reduce ? 44 : 112;
    const TRAIL = 16;
    const c1 = [157, 107, 255], c2 = [90, 209, 255];
    const mouse = { x: -9999, y: -9999, active: false, down: false };
    let pts = [];
    let alive = true;
    let visible = true;
    let looping = false;

    const seed = () => {
      pts = [];
      for (let i = 0; i < N; i++) {
        pts.push({
          x: Math.random() * W, y: Math.random() * H, hist: [],
          hue: Math.random(), spd: 0.7 + Math.random() * 0.9,
          life: 0.4 + Math.random() * 0.9,
        });
      }
    };
    const resize = () => {
      const r = host.getBoundingClientRect();
      W = r.width; H = r.height; rect = r;
      canvas.width = Math.max(1, W * DPR);
      canvas.height = Math.max(1, H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      if (!pts.length) seed();
    };
    const field = (x, y, t) =>
      (Math.sin(x * 0.0016 + t * 0.00026) +
        Math.cos(y * 0.0021 - t * 0.00034) +
        Math.sin((x + y) * 0.0011 + t * 0.0002)) * 1.35;

    on(window, "resize", () => { rect = host.getBoundingClientRect(); resize(); }, { passive: true });
    scrollSubs.push(() => { rect = host.getBoundingClientRect(); });
    on(window, "pointermove", (e) => {
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      mouse.x = x; mouse.y = y;
      mouse.active = x > -60 && x < W + 60 && y > -60 && y < H + 60;
    }, { passive: true });
    on(window, "pointerdown", () => { mouse.down = true; }, { passive: true });
    on(window, "pointerup", () => { mouse.down = false; }, { passive: true });
    on(host, "pointerleave", () => { mouse.active = false; });

    resize();
    const step = (now) => {
      if (!alive) return;
      if (!visible) { looping = false; return; }
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = "round";
      const R = mouse.down ? 300 : 190;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const a = field(p.x, p.y, now);
        let vx = Math.cos(a) * p.spd * 1.7;
        let vy = Math.sin(a) * p.spd * 1.7;
        let near = 0;
        if (mouse.active) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            const d = Math.sqrt(d2) || 1;
            near = 1 - d / R;
            const f = near * (mouse.down ? 11 : 6);
            vx += (dx / d) * f; vy += (dy / d) * f;
          }
        }
        p.hist.push({ x: p.x, y: p.y });
        if (p.hist.length > TRAIL) p.hist.shift();
        p.x += vx; p.y += vy;
        p.life -= 0.0035;
        if (p.x < -30 || p.x > W + 30 || p.y < -30 || p.y > H + 30 || p.life <= 0) {
          p.x = Math.random() * W; p.y = Math.random() * H; p.hist = []; p.life = 0.5 + Math.random() * 0.9;
          continue;
        }
        const mix = Math.min(1, p.hue * 0.45 + near * 0.7);
        const r = Math.round(c1[0] + (c2[0] - c1[0]) * mix);
        const g = Math.round(c1[1] + (c2[1] - c1[1]) * mix);
        const b = Math.round(c1[2] + (c2[2] - c1[2]) * mix);
        const baseA = (0.42 + near * 0.62) * Math.min(1, p.life * 1.8);
        const lw = 1.4 + near * 2.4;
        ctx.shadowColor = "rgba(" + r + "," + g + "," + b + ",0.9)";
        ctx.shadowBlur = 6 + near * 14;
        const h = p.hist;
        for (let j = 1; j < h.length; j++) {
          const t = j / h.length;
          ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + (baseA * (0.25 + 0.75 * t)).toFixed(3) + ")";
          ctx.lineWidth = lw * (0.4 + 0.6 * t);
          ctx.beginPath();
          ctx.moveTo(h[j - 1].x, h[j - 1].y);
          ctx.lineTo(h[j].x, h[j].y);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      }
      ctx.globalCompositeOperation = "source-over";
      raf(step);
    };
    const start = () => { if (!looping && visible && alive) { looping = true; raf(step); } };
    start();

    // pause when hero off-screen
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          if (visible) start();
        },
        { threshold: 0 }
      );
      io.observe(host);
      cleanups.push(() => io.disconnect());
    }
    cleanups.push(() => { alive = false; });
  })();

  // prime once
  runScroll();

  return function cleanup() {
    rafs.forEach((id) => cancelAnimationFrame(id));
    cleanups.forEach((fn) => fn());
  };
}
