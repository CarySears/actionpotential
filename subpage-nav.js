(() => {
  const nav = document.querySelector(".nav-links[aria-label='Primary navigation']");
  if (!nav) return;

  // Rebuild nav deterministically so stale HTML variants do not break interaction.
  nav.innerHTML =
    "<a href='/solutions/'>Solutions</a>" +
    "<div class='nav-item'>" +
    "<a href='/who-we-empower/'>Who We Empower</a>" +
    "<div class='dropdown-menu' role='menu' aria-label='Who We Empower'>" +
    "<a role='menuitem' href='/who-we-empower/industries/'>Industries</a>" +
    "<a role='menuitem' href='/who-we-empower/locations/'>Locations</a>" +
    "</div></div>" +
    "<a href='/who-we-are/'>Who We Are</a>" +
    "<a href='/results/'>Results</a>" +
    "<div class='nav-item'>" +
    "<a href='/resources/'>Resources</a>" +
    "<div class='dropdown-menu' role='menu' aria-label='Resources'>" +
    "<a role='menuitem' href='/resources/faq/'>FAQs</a>" +
    "<a role='menuitem' href='/resources/blog/'>Blog</a>" +
    "<a role='menuitem' href='/resources/case-studies/'>Case Studies</a>" +
    "</div></div>";

  const navItems = Array.from(nav.querySelectorAll(".nav-item"));
  if (!navItems.length) return;
  const isTouchLike = () => window.matchMedia("(hover: none), (pointer: coarse)").matches;

  const closeItem = (item) => {
    const menu = item.querySelector(":scope > .dropdown-menu");
    if (!menu) return;
    item.classList.remove("open");
    menu.style.setProperty("display", "none", "important");
    menu.style.setProperty("pointer-events", "none", "important");
    menu.style.setProperty("opacity", "0", "important");
  };

  const openItem = (item) => {
    const menu = item.querySelector(":scope > .dropdown-menu");
    if (!menu) return;
    item.classList.add("open");
    menu.style.setProperty("display", "grid", "important");
    menu.style.setProperty("pointer-events", "auto", "important");
    menu.style.setProperty("opacity", "1", "important");
    menu.style.setProperty("transform", "translateY(0)", "important");
  };

  const closeAll = () => {
    navItems.forEach(closeItem);
  };

  closeAll();

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-item")) closeAll();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAll();
  });

  navItems.forEach((item) => {
    const trigger = item.querySelector(":scope > a");
    const menu = item.querySelector(":scope > .dropdown-menu");
    if (!trigger || !menu) return;

    item.addEventListener("mouseenter", () => {
      if (isTouchLike()) return;
      closeAll();
      openItem(item);
    });

    menu.addEventListener("click", (event) => event.stopPropagation());
    menu.addEventListener("pointerdown", (event) => event.stopPropagation());

    trigger.addEventListener("click", (event) => {
      if (!isTouchLike()) return;
      event.preventDefault();
      const alreadyOpen = item.classList.contains("open");
      closeAll();
      if (!alreadyOpen) openItem(item);
    });
  });
})();

(() => {
  if (document.getElementById("neural-overlay") || document.getElementById("subpage-neural-overlay")) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobileViewport = window.matchMedia("(max-width: 760px)").matches;
  if (prefersReducedMotion || mobileViewport) return;

  const overlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  overlay.setAttribute("class", "subpage-neural-overlay");
  overlay.setAttribute("id", "subpage-neural-overlay");
  overlay.setAttribute("viewBox", "0 0 1600 980");
  overlay.setAttribute("aria-hidden", "true");

  const lineRoot = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const nodeRoot = document.createElementNS("http://www.w3.org/2000/svg", "g");
  overlay.appendChild(lineRoot);
  overlay.appendChild(nodeRoot);
  document.body.prepend(overlay);

  const nodes = [
    [90, 84], [200, 138], [118, 240], [220, 332], [102, 442], [210, 548], [122, 688], [208, 826],
    [1508, 92], [1402, 164], [1492, 266], [1386, 358], [1498, 486], [1380, 594], [1490, 742], [1398, 858]
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [0, 2], [1, 3], [2, 4], [4, 6], [5, 7],
    [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [8, 10], [9, 11], [10, 12], [12, 14], [13, 15]
  ];

  const lineEls = edges.map(([a, b]) => {
    const [x1, y1] = nodes[a];
    const [x2, y2] = nodes[b];
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(x1));
    line.setAttribute("y1", String(y1));
    line.setAttribute("x2", String(x2));
    line.setAttribute("y2", String(y2));
    line.setAttribute("class", "sub-neural-line");
    lineRoot.appendChild(line);
    return line;
  });

  const nodeEls = nodes.map(([x, y]) => {
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", String(x));
    dot.setAttribute("cy", String(y));
    dot.setAttribute("r", "3.1");
    dot.setAttribute("class", "sub-neural-node");
    nodeRoot.appendChild(dot);
    return dot;
  });

  const maxScroll = () => Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const update = (now = performance.now()) => {
    const progress = Math.min(Math.max(window.scrollY / maxScroll(), 0), 1);
    const time = now * 0.001;
    const pulse = Math.sin(progress * Math.PI * 20 + time * 2.4);
    const sweep = (time * 34) % 92;
    const drift = progress * 36 + Math.sin(time * 1.2) * 5;
    overlay.style.transform = "translate3d(0," + drift.toFixed(2) + "px,0)";

    for (let i = 0; i < lineEls.length; i += 1) {
      const line = lineEls[i];
      const threshold = i / lineEls.length;
      const active = Math.abs(progress - threshold) < 0.22 || Math.sin(time * 2.3 + i * 0.35) > 0.94;
      line.setAttribute("stroke-dashoffset", String(30 - progress * 24 + i * 1.2 + pulse * 5 + sweep));
      line.classList.toggle("is-active", active);
      line.style.opacity = active ? "0.95" : "0.38";
    }

    for (let i = 0; i < nodeEls.length; i += 1) {
      const node = nodeEls[i];
      const active = Math.abs(progress - i / nodeEls.length) < 0.16 || Math.sin(time * 2.7 + i * 0.45) > 0.95;
      node.classList.toggle("is-hot", active);
      node.setAttribute("r", active ? "4.6" : "3.1");
      node.style.opacity = active ? "1" : "0.66";
    }
  };

  const tick = () => {
    update(performance.now());
    window.requestAnimationFrame(tick);
  };

  tick();
  window.addEventListener("resize", () => update(performance.now()));
})();

(() => {
  if (document.querySelector(".brand-wave-divider, .global-brand-wave-divider")) return;
  const footer = document.querySelector("footer.footer, footer");
  if (!footer || !footer.parentNode) return;

  const wave = document.createElement("div");
  wave.className = "global-brand-wave-divider brand-wave-divider-base";
  wave.setAttribute("aria-hidden", "true");
  wave.innerHTML = `
    <svg viewBox="0 0 1440 520" preserveAspectRatio="none">
      <path class="brand-wave-teal" d="M0,316 C178,266 312,364 508,344 C704,324 848,248 1044,274 C1218,296 1332,388 1440,366 L1440,520 L0,520 Z"></path>
      <path class="brand-wave-coral" d="M0,344 C164,300 306,380 500,360 C696,338 836,266 1024,288 C1208,312 1324,402 1440,384 L1440,520 L0,520 Z"></path>
      <path class="brand-wave-cyan" d="M0,372 C182,330 314,402 516,380 C710,358 844,292 1034,314 C1218,338 1332,420 1440,404 L1440,520 L0,520 Z"></path>
      <path class="brand-wave-magenta" d="M0,362 C176,320 312,396 512,372 C704,350 840,286 1030,304 C1214,326 1330,408 1440,392 L1440,520 L0,520 Z"></path>
      <path class="brand-wave-deep" d="M0,350 C172,308 304,386 500,364 C690,344 828,282 1018,298 C1208,316 1328,396 1440,378 L1440,520 L0,520 Z"></path>
      <path class="brand-wave-blue" d="M0,390 C186,350 320,418 528,394 C718,372 848,312 1036,330 C1218,350 1334,426 1440,412 L1440,520 L0,520 Z"></path>
    </svg>
  `;

  footer.parentNode.insertBefore(wave, footer);
})();
