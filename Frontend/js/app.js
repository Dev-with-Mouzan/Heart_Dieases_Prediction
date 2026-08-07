/* ── js/app.js ─────────────────────────────────────────────────────────────
   Heart Disease Prediction — Frontend Logic
   API Base: http://localhost:8000
──────────────────────────────────────────────────────────────────────────── */

const API_BASE = "http://localhost:8000";

// ── DOM refs ────────────────────────────────────────────────────────────────
const form            = document.getElementById("predict-form");
const btnPredict      = document.getElementById("btn-predict");
const btnText         = document.getElementById("btn-text");
const btnSpinner      = document.getElementById("btn-spinner");
const btnIcon         = document.getElementById("btn-icon");
const resultSection   = document.getElementById("result-section");
const errorBanner     = document.getElementById("error-banner");
const statusDot       = document.getElementById("status-dot");
const statusText      = document.getElementById("status-text");
const progressBar     = document.getElementById("scroll-progress");

// Result DOM refs
const resultIconEl    = document.getElementById("result-icon");
const resultTitleEl   = document.getElementById("result-title");
const resultMsgEl     = document.getElementById("result-message");
const gaugeEl         = document.getElementById("gauge-fill");
const gaugeValueEl    = document.getElementById("gauge-value");
const confidenceEl    = document.getElementById("stat-confidence");
const predictionEl    = document.getElementById("stat-prediction");
const riskLevelEl     = document.getElementById("stat-risk-level");
const riskBadgeEl     = document.getElementById("risk-badge");

// ── Particle background ─────────────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const COLORS = ["15, 139, 158", "6, 199, 220", "244, 63, 94"];
  const COUNT = 70;
  const LINK_DIST = 120;
  let particles = [];
  let w = 0, h = 0;

  function resize() {
    w = canvas.width  = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.6,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.25,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Connect nearby particles with faint lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(15, 139, 158, ${(1 - dist / LINK_DIST) * 0.12})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const p of particles) {
      p.pulse += 0.02;
      const alpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${Math.max(alpha, 0.05)})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    }
  }

  window.addEventListener("resize", resize);
  init();

  // Respect reduced-motion: draw one static frame, then stop the loop
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    draw();
  } else {
    draw();
    requestAnimationFrame(function loop() {
      draw();
      requestAnimationFrame(loop);
    });
  }
})();

// ── Live ECG sweep (hero signature) ─────────────────────────────────────────
// The trace draws left→right like a real cardiology monitor, with a bright
// scan dot riding the draw head, then fades out and loops.
(function initECG() {
  const path = document.querySelector(".ecg-line path");
  const dot  = document.getElementById("ecg-dot");
  if (!path || !dot) return;

  const length   = path.getTotalLength();
  const DURATION = 4400;
  const reduced  = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start    = performance.now();

  path.style.strokeDasharray = length;

  function render(now) {
    const t  = ((now - start) % DURATION) / DURATION;
    const sweep  = Math.min(t / 0.62, 1);                 // draw across 62% of the loop
    const at     = Math.max(0.001, length * sweep);
    const point  = path.getPointAtLength(at);

    path.style.strokeDashoffset = length * (1 - sweep);
    dot.setAttribute("cx", point.x);
    dot.setAttribute("cy", point.y);

    // Fade in on start, fade out before the reset
    let alpha = 1;
    if (t < 0.04) alpha = t / 0.04;
    else if (t > 0.9) alpha = Math.max(0, (1 - t) / 0.1);
    path.style.opacity = alpha;
    dot.style.opacity   = alpha;
  }

  if (reduced) {
    render(start + DURATION * 0.62);   // draw one static, fully swept frame
    return;
  }

  function loop(now) {
    render(now);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

// ── Health check ────────────────────────────────────────────────────────────
async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      statusDot.style.background  = "var(--success)";
      statusText.textContent      = "API Online";
    } else {
      throw new Error("not ok");
    }
  } catch {
    statusDot.style.background    = "var(--danger)";
    statusText.textContent        = "API Offline";
    statusText.style.color        = "var(--danger)";
  }
}

checkHealth();

// ── Mobile nav toggle ───────────────────────────────────────────────────────
const navToggle   = document.getElementById("nav-toggle");
const mainNav     = document.getElementById("main-nav");
const header      = document.getElementById("site-header");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // Close the menu when a link is clicked
  mainNav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ── Sticky header shadow + active link ─────────────────────────────────────
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const toTopBtn      = document.getElementById("to-top");
const auroraEl      = document.querySelector(".aurora");

function onScroll() {
  if (header) header.classList.toggle("scrolled", window.scrollY > 10);

  if (progressBar) {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }

  // Back-to-top visibility
  if (toTopBtn) toTopBtn.classList.toggle("visible", window.scrollY > 600);

  // Aurora drifts opposite to scroll for depth
  if (!reducedMotion && auroraEl) {
    auroraEl.style.transform = `translateY(${window.scrollY * -0.18}px)`;
  }

  const sections = ["how-it-works", "prediction-form-section"];
  let active = "#";

  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 120) active = "#" + id;
  }

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === active);
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ── Back to top ─────────────────────────────────────────────────────────────
toTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ── Smooth scroll CTA ───────────────────────────────────────────────────────
document.getElementById("cta-btn")?.addEventListener("click", () => {
  document.getElementById("prediction-form-section").scrollIntoView({ behavior: "smooth" });
});

// ── Button click ripple ──────────────────────────────────────────────────────
document.querySelectorAll(".btn-primary").forEach(btn => {
  btn.addEventListener("pointerdown", e => {
    if (btn.disabled) return;
    const rect   = btn.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
    ripple.style.top  = (e.clientY - rect.top - size / 2) + "px";
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  });
});

// ── Scroll reveal + count-up ─────────────────────────────────────────────────
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  if (!Number.isFinite(target)) return;
  const duration = 1200;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add("in-view");

    // Count-up any numeric stat inside
    const counter = el.querySelector("[data-count]");
    if (counter) animateCount(counter);

    // Drop the animation class afterwards so hover transforms work normally
    let done = false;
    const onAnimEnd = e => {
      if (done || e.target !== e.currentTarget) return;
      done = true;
      el.classList.remove("in-view");
      el.removeEventListener("animationend", onAnimEnd);
    };
    el.addEventListener("animationend", onAnimEnd);

    revealObserver.unobserve(el);
  });
}, { threshold: 0.18, rootMargin: "0px 0px -48px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ── Card tilt (desktop only) ─────────────────────────────────────────────────
if (window.matchMedia("(pointer: fine)").matches) {
  document.querySelectorAll(".step-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--rx", (-y * 7).toFixed(2) + "deg");
      card.style.setProperty("--ry", (x * 7).toFixed(2) + "deg");
    });
    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

// ── Gauge helpers ────────────────────────────────────────────────────────────
const GAUGE_CIRCUMFERENCE = Math.PI * 80;   // semicircle: r=80, so π*r

function setGauge(riskPercent) {
  const fraction = Math.min(Math.max(riskPercent / 100, 0), 1);
  const offset   = GAUGE_CIRCUMFERENCE * (1 - fraction);

  // Gradient fill (green → amber → red) is defined in HTML via #gauge-grad
  gaugeEl.style.strokeDasharray  = GAUGE_CIRCUMFERENCE;
  gaugeEl.style.strokeDashoffset = offset;

  // Animate number
  animateNumber(gaugeValueEl, 0, riskPercent, 1200);
}

function animateNumber(el, from, to, duration) {
  const start = performance.now();
  const isText = el.tagName === "text";

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    const value    = Math.round(from + (to - from) * ease);
    if (isText) {
      el.textContent = value + "%";
    } else {
      el.textContent = value + "%";
    }
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// ── Form validation ──────────────────────────────────────────────────────────
function validateForm() {
  let valid = true;

  // Clear all errors first
  document.querySelectorAll(".form-group.has-error").forEach(g => {
    g.classList.remove("has-error");
  });

  const required = [
    "age", "sex", "chest_pain_type", "resting_bp", "cholesterol",
    "fasting_bs", "resting_ecg", "max_hr", "exercise_angina",
    "oldpeak", "st_slope"
  ];

  for (const name of required) {
    const el    = form.elements[name];
    const group = el?.closest(".form-group");
    if (!el || el.value === "" || el.value === null) {
      if (group) {
        group.classList.add("has-error");
        group.querySelector(".field-error").textContent = "This field is required";
      }
      valid = false;
    }
  }

  return valid;
}

// ── Build request payload ────────────────────────────────────────────────────
function buildPayload() {
  const fd = new FormData(form);
  return {
    age:              parseInt(fd.get("age")),
    sex:              fd.get("sex"),
    chest_pain_type:  fd.get("chest_pain_type"),
    resting_bp:       parseFloat(fd.get("resting_bp")),
    cholesterol:      parseFloat(fd.get("cholesterol")),
    fasting_bs:       parseInt(fd.get("fasting_bs")),
    resting_ecg:      fd.get("resting_ecg"),
    max_hr:           parseInt(fd.get("max_hr")),
    exercise_angina:  fd.get("exercise_angina"),
    oldpeak:          parseFloat(fd.get("oldpeak")),
    st_slope:         fd.get("st_slope"),
  };
}

// ── Set loading state ────────────────────────────────────────────────────────
function setLoading(loading) {
  btnPredict.disabled        = loading;
  btnText.textContent        = loading ? "Analyzing…" : "Predict Heart Disease Risk";
  btnSpinner.style.display   = loading ? "block" : "none";
  btnIcon.style.display      = loading ? "none" : "block";
  document.querySelector(".form-card")?.classList.toggle("scanning", loading);
}

// ── Render result ────────────────────────────────────────────────────────────
function renderResult(data) {
  const hasDisease = data.prediction === 1;

  // Icon (SVG heart swap is handled by the .positive / .negative classes)
  resultIconEl.className = "result-icon " + (hasDisease ? "positive" : "negative");

  // Title
  resultTitleEl.textContent = data.label;
  resultTitleEl.className   = "result-title " + (hasDisease ? "danger" : "success");

  // Message
  resultMsgEl.textContent = data.message;

  // Gauge
  setGauge(data.risk_percent);

  // Stats
  animateNumber(confidenceEl, 0, data.confidence, 1000);
  predictionEl.textContent = hasDisease ? "Positive" : "Negative";
  predictionEl.style.color = hasDisease ? "var(--danger)" : "var(--success)";

  riskBadgeEl.textContent  = data.risk_level;
  riskBadgeEl.className    = "risk-badge " + data.risk_level;
  riskLevelEl.textContent  = data.risk_level;

  // Card border glow
  const card = document.querySelector(".result-card");
  card.classList.toggle("positive", hasDisease);
  card.classList.toggle("negative", !hasDisease);
  card.style.borderColor   = hasDisease ? "rgba(244,63,94,0.35)" : "rgba(16,185,129,0.35)";
  card.style.boxShadow     = hasDisease
    ? "var(--shadow-md), 0 0 40px rgba(244,63,94,0.16)"
    : "var(--shadow-md), 0 0 40px rgba(16,185,129,0.14)";

  resultSection.style.display = "block";
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Submit handler ───────────────────────────────────────────────────────────
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  errorBanner.style.display    = "none";
  resultSection.style.display  = "none";

  if (!validateForm()) return;

  const payload = buildPayload();
  setLoading(true);

  try {
    const res = await fetch(`${API_BASE}/api/predict`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || `Server error ${res.status}`);
    }

    const data = await res.json();
    renderResult(data);

  } catch (err) {
    errorBanner.textContent    = `Error: ${err.message}. Make sure the FastAPI server is running on port 8000.`;
    errorBanner.style.display  = "block";
    errorBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } finally {
    setLoading(false);
  }
});

// ── Reset form ───────────────────────────────────────────────────────────────
document.getElementById("btn-reset")?.addEventListener("click", () => {
  form.reset();
  resultSection.style.display = "none";
  errorBanner.style.display   = "none";
  document.querySelectorAll(".form-group.has-error").forEach(g => {
    g.classList.remove("has-error");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ── Input range display ──────────────────────────────────────────────────────
document.querySelectorAll("input[type=range]").forEach(range => {
  const display = document.getElementById(range.id + "-val");
  if (display) {
    display.textContent = range.value;
    range.addEventListener("input", () => { display.textContent = range.value; });
  }
});
