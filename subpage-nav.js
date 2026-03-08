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
  const closeTimers = new WeakMap();

  const closeItem = (item) => {
    const menu = item.querySelector(":scope > .dropdown-menu");
    if (!menu) return;
    const timer = closeTimers.get(item);
    if (timer) window.clearTimeout(timer);
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

  const cancelClose = (item) => {
    const timer = closeTimers.get(item);
    if (timer) {
      window.clearTimeout(timer);
      closeTimers.delete(item);
    }
  };

  const scheduleClose = (item, delay = 160) => {
    cancelClose(item);
    const timer = window.setTimeout(() => closeItem(item), delay);
    closeTimers.set(item, timer);
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
      cancelClose(item);
      closeAll();
      openItem(item);
    });

    item.addEventListener("mouseleave", () => {
      if (isTouchLike()) return;
      scheduleClose(item);
    });

    menu.addEventListener("mouseenter", () => {
      if (isTouchLike()) return;
      cancelClose(item);
    });

    menu.addEventListener("mouseleave", () => {
      if (isTouchLike()) return;
      scheduleClose(item);
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
