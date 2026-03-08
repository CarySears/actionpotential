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
