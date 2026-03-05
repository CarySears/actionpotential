/* global window, document */

function $(sel, root = document) {
  return root.querySelector(sel);
}

function encodeMailto(v) {
  return encodeURIComponent(v).replace(/%20/g, "+");
}

function setupYear() {
  const el = $("#year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupHeaderElevation() {
  const header = $(".site-header");
  if (!header) return;

  const onScroll = () => {
    const elevated = window.scrollY > 10;
    header.classList.toggle("is-elevated", elevated);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupMobileNav() {
  const toggle = $(".nav-toggle");
  const panel = $(".mobile-nav");
  if (!toggle || !panel) return;

  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  };

  const open = () => {
    toggle.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) close();
    else open();
  });

  panel.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function setupFormMailto() {
  const form = $("#contact");
  if (!form) return;
  const status = $(".form-status", form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const industry = String(fd.get("industry") || "").trim();
    const goal = String(fd.get("goal") || "").trim();

    if (!name || !email) {
      if (status) {
        status.textContent = "Please add your name and email so we can respond.";
        status.classList.remove("is-ok");
        status.classList.add("is-bad");
      }
      return;
    }

    const subject = "Free AI Audit & Marketing Strategy Session";
    const bodyLines = [
      "Hi ActionPotential.AI,",
      "",
      "I'd like to request a free AI Audit & Marketing Strategy Session.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      industry ? `Business type: ${industry}` : null,
      goal ? `Goal: ${goal}` : null,
      "",
      "Thanks!"
    ].filter(Boolean);

    const href =
      "mailto:hello@actionpotential.ai" +
      `?subject=${encodeMailto(subject)}` +
      `&body=${encodeMailto(bodyLines.join("\n"))}`;

    if (status) {
      status.textContent = "Opening your email client with your request…";
      status.classList.remove("is-bad");
      status.classList.add("is-ok");
    }

    window.location.href = href;
  });
}

function setupNetworkCanvas() {
  const canvas = $("#network");
  if (!canvas) return;

  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const palette = {
    node: "rgba(121,197,199,0.65)",
    node2: "rgba(46,166,212,0.7)",
    edge: "rgba(255,255,255,0.07)",
    edge2: "rgba(255,255,255,0.12)",
    pulseA: "rgba(0,167,157,0.95)",
    pulseB: "rgba(255,77,138,0.92)"
  };

  let w = 0;
  let h = 0;
  let dpr = 1;
  let nodes = [];
  let edges = [];
  let pulses = [];
  let raf = 0;
  let last = performance.now();
  let nextPulseAt = 0;

  const rand = (min, max) => min + Math.random() * (max - min);

  function resize() {
    const rect = canvas.getBoundingClientRect();
    w = Math.max(1, Math.floor(rect.width));
    h = Math.max(1, Math.floor(rect.height));
    dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildGraph();
  }

  function buildGraph() {
    const area = w * h;
    const count = Math.max(28, Math.min(76, Math.floor(area / 22000)));

    nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: rand(w * 0.06, w * 0.94),
        y: rand(h * 0.18, h * 0.88),
        r: rand(1.0, 2.4),
        t: Math.random() * Math.PI * 2,
        s: rand(0.15, 0.55)
      });
    }

    edges = [];
    const maxDist = Math.min(220, Math.max(120, Math.floor(Math.min(w, h) * 0.22)));
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const candidates = [];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < maxDist) candidates.push({ j, d });
      }
      candidates.sort((x, y) => x.d - y.d);
      for (let k = 0; k < Math.min(3, candidates.length); k++) {
        edges.push({ a: i, b: candidates[k].j, w: 1 - candidates[k].d / maxDist });
      }
    }
  }

  function spawnPulse(now) {
    if (!edges.length) return;
    const startEdge = edges[Math.floor(Math.random() * edges.length)];
    const direction = Math.random() > 0.5;
    pulses.push({
      edgeIdx: edges.indexOf(startEdge),
      t: 0,
      speed: rand(0.35, 0.65),
      ttl: rand(2.4, 4.0),
      born: now,
      dir: direction ? 1 : -1,
      hueFlip: Math.random() > 0.6
    });
  }

  function drawEdge(a, b, weight) {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = weight > 0.6 ? palette.edge2 : palette.edge;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function drawNode(n, i) {
    const glow = (Math.sin(n.t) + 1) * 0.5;
    const fill = i % 3 === 0 ? palette.node2 : palette.node;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r + glow * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
  }

  function drawPulse(p, now) {
    const e = edges[p.edgeIdx];
    if (!e) return;
    const a = nodes[e.a];
    const b = nodes[e.b];
    if (!a || !b) return;

    const t = p.dir === 1 ? p.t : 1 - p.t;
    const x = a.x + (b.x - a.x) * t;
    const y = a.y + (b.y - a.y) * t;

    const life = (now - p.born) / 1000;
    const fade = Math.max(0, 1 - life / p.ttl);
    const r = 3.6 + 2.6 * e.w;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = p.hueFlip ? `rgba(255,77,138,${0.92 * fade})` : `rgba(0,167,157,${0.92 * fade})`;
    ctx.shadowBlur = 14;
    ctx.shadowColor = p.hueFlip ? palette.pulseB : palette.pulseA;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function tick(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    ctx.clearRect(0, 0, w, h);

    // Drift nodes subtly (keeps it alive without looking like a screensaver)
    for (const n of nodes) {
      n.t += dt * n.s;
      n.x += Math.cos(n.t * 1.2) * dt * 3;
      n.y += Math.sin(n.t * 1.05) * dt * 2.2;
      n.x = Math.max(w * 0.03, Math.min(w * 0.97, n.x));
      n.y = Math.max(h * 0.16, Math.min(h * 0.92, n.y));
    }

    // Edges
    for (const e of edges) {
      drawEdge(nodes[e.a], nodes[e.b], e.w);
    }

    // Nodes
    for (let i = 0; i < nodes.length; i++) drawNode(nodes[i], i);

    // Pulses (action potentials)
    if (now > nextPulseAt) {
      spawnPulse(now);
      nextPulseAt = now + rand(520, 1200);
    }

    pulses = pulses.filter((p) => (now - p.born) / 1000 < p.ttl);
    for (const p of pulses) {
      p.t += dt * p.speed;
      if (p.t >= 1) {
        p.t = 0;
        // Hop to a new connected edge from the current endpoint for a “signal chain”
        const e = edges[p.edgeIdx];
        if (e) {
          const currentNode = p.dir === 1 ? e.b : e.a;
          const options = edges
            .map((ed, idx) => ({ ed, idx }))
            .filter(({ ed }) => ed.a === currentNode || ed.b === currentNode);
          if (options.length) {
            const pick = options[Math.floor(Math.random() * Math.min(6, options.length))];
            p.edgeIdx = pick.idx;
            const forward = pick.ed.a === currentNode ? 1 : -1;
            p.dir = forward;
          }
        }
      }
      drawPulse(p, now);
    }

    raf = window.requestAnimationFrame(tick);
  }

  const ro = new ResizeObserver(() => resize());
  ro.observe(canvas);
  resize();
  raf = window.requestAnimationFrame(tick);

  window.addEventListener("pagehide", () => {
    window.cancelAnimationFrame(raf);
    ro.disconnect();
  });
}

setupYear();
setupHeaderElevation();
setupMobileNav();
setupFormMailto();
setupNetworkCanvas();
