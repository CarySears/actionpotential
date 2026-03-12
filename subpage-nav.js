(() => {
  const STYLE_ID = "shared-nav-breadcrumb-styles";
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .nav-links > a.is-current,
      .nav-item > a.is-current,
      .nav-item.is-current > a {
        color: var(--brand-1, #79c5c7) !important;
        text-decoration: underline;
        text-decoration-color: rgba(121, 197, 199, 0.82);
        text-decoration-thickness: 2px;
        text-underline-offset: 0.42em;
      }
      .breadcrumbs {
        width: min(1120px, calc(100% - 2rem));
        margin: 0.58rem auto 0;
        color: var(--muted, #c7d5ec);
        overflow-x: hidden;
      }
      .breadcrumbs ol {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.14rem;
        margin: 0;
        padding: 0;
      }
      .breadcrumbs li {
        display: inline-flex;
        align-items: center;
        font-size: 0.78rem;
        min-width: 0;
      }
      .breadcrumbs li + li::before {
        content: "›";
        opacity: 0.58;
        margin: 0 0.42rem;
      }
      .breadcrumbs a {
        color: inherit;
        opacity: 0.88;
      }
      .breadcrumbs a:hover {
        opacity: 1;
      }
      .breadcrumbs .is-current {
        color: var(--text, #ecf2ff);
        font-weight: 600;
        opacity: 1;
        overflow-wrap: anywhere;
      }
      @media (max-width: 760px) {
        .breadcrumbs {
          margin-top: 0.45rem;
          width: min(1120px, calc(100% - 1rem));
        }
        .breadcrumbs li {
          font-size: 0.72rem;
        }
      }
      @media (max-width: 390px) {
        .breadcrumbs li {
          font-size: 0.68rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const nav = document.querySelector(".nav-links[aria-label='Primary navigation']");
  if (!nav) return;
  const header = nav.closest(".site-header");
  const navBar = nav.closest(".nav");
  const managedByHomeScript = nav.id === "mobile-primary-nav";

  const navModel = [
    {
      label: "Services",
      href: "/services/index.html",
      children: [
        { label: "All Services", href: "/services/index.html" },
        { label: "Visibility Engine", href: "/services/visibility-engine.html" },
        { label: "Behavioral Engine", href: "/services/behavioral-engine.html" },
        { label: "Smart Websites", href: "/services/smart-websites.html" },
        { label: "SEO + AI Search", href: "/services/ai-search.html" },
        { label: "Paid Media + Retargeting", href: "/services/paid-media.html" },
      ],
    },
    {
      label: "AI Operations Suite",
      href: "/platform/ai-operations-suite.html",
      children: [
        { label: "Platform Overview", href: "/platform/ai-operations-suite.html" },
        { label: "CRM", href: "/platform/crm.html" },
      ],
    },
    {
      label: "Who We Serve",
      href: "/who-we-empower/index.html",
      children: [
        { label: "Industries", href: "/who-we-empower/industries/index.html" },
        { label: "Locations", href: "/who-we-empower/locations/index.html" },
      ],
    },
    { label: "Results", href: "/results/index.html" },
    {
      label: "Company",
      href: "/who-we-are/index.html",
      children: [
        { label: "Who We Are", href: "/who-we-are/index.html" },
        { label: "Resources", href: "/resources/index.html" },
        { label: "FAQs", href: "/resources/faq/index.html" },
        { label: "Blog", href: "/resources/blog/index.html" },
        { label: "Case Studies", href: "/resources/case-studies/index.html" },
      ],
    },
  ];

  const renderItem = (item) => {
    if (!item.children?.length) {
      return `<a href="${item.href}">${item.label}</a>`;
    }
    const children = item.children
      .map((child) => `<a role="menuitem" href="${child.href}">${child.label}</a>`)
      .join("");
    return (
      `<div class="nav-item">` +
      `<a href="${item.href}">${item.label}</a>` +
      `<div class="dropdown-menu" role="menu" aria-label="${item.label}">${children}</div>` +
      `</div>`
    );
  };

  nav.innerHTML = navModel.map(renderItem).join("");

  let mobileMenuToggle = navBar ? navBar.querySelector(".mobile-menu-toggle") : null;
  if (!managedByHomeScript && !mobileMenuToggle && navBar && header) {
    if (!nav.id) nav.id = "global-primary-nav";
    mobileMenuToggle = document.createElement("button");
    mobileMenuToggle.type = "button";
    mobileMenuToggle.className = "mobile-menu-toggle";
    mobileMenuToggle.setAttribute("aria-label", "Toggle navigation menu");
    mobileMenuToggle.setAttribute("aria-controls", nav.id);
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenuToggle.textContent = "Menu";
    navBar.appendChild(mobileMenuToggle);
  }

  const syncMenuToggleState = () => {
    if (!mobileMenuToggle || !header) return;
    const isOpen = header.classList.contains("menu-open");
    mobileMenuToggle.textContent = isOpen ? "Close" : "Menu";
    mobileMenuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  if (!managedByHomeScript && mobileMenuToggle && header) {
    mobileMenuToggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      header.classList.toggle("menu-open");
      syncMenuToggleState();
    });

    nav.addEventListener("click", (event) => {
      const targetLink = event.target.closest("a[href]");
      if (!targetLink) return;
      if (window.matchMedia("(max-width: 760px)").matches) {
        header.classList.remove("menu-open");
        syncMenuToggleState();
      }
    });

    document.addEventListener("click", (event) => {
      if (!header.contains(event.target)) {
        header.classList.remove("menu-open");
        syncMenuToggleState();
      }
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 761px)").matches) {
        header.classList.remove("menu-open");
        syncMenuToggleState();
      }
    });

    syncMenuToggleState();
  }

  const navItems = Array.from(nav.querySelectorAll(".nav-item"));
  const isTouchLike = () => window.matchMedia("(hover: none), (pointer: coarse)").matches;

  const canonicalPath = (value) => {
    let pathname = value;
    try {
      pathname = new URL(value, window.location.origin).pathname;
    } catch {
      pathname = value;
    }
    pathname = decodeURIComponent(pathname).replace(/\/{2,}/g, "/");
    if (!pathname.startsWith("/")) pathname = `/${pathname}`;
    if (pathname.length > 1 && pathname.endsWith("/")) pathname = pathname.slice(0, -1);
    return pathname.toLowerCase();
  };

  const pathVariants = (value) => {
    const base = canonicalPath(value);
    const variants = new Set([base]);
    if (base === "/") {
      variants.add("/index.html");
      return variants;
    }
    if (base.endsWith("/index.html")) {
      const dir = base.slice(0, -"index.html".length - 1);
      variants.add(dir || "/");
      variants.add(`${dir}/`);
    } else if (!/\.[a-z0-9]+$/i.test(base)) {
      variants.add(`${base}.html`);
      variants.add(`${base}/index.html`);
      variants.add(`${base}/`);
    }
    if (base.endsWith(".html")) {
      const noExt = base.slice(0, -".html".length);
      variants.add(noExt);
      variants.add(`${noExt}/`);
    }
    return variants;
  };

  const currentVariants = pathVariants(window.location.pathname);
  const navLinks = Array.from(nav.querySelectorAll("a[href]"));
  let activeLinks = navLinks.filter((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto:")) return false;
    const variants = pathVariants(href);
    for (const variant of variants) {
      if (currentVariants.has(variant)) return true;
    }
    return false;
  });

  if (!activeLinks.length) {
    const path = canonicalPath(window.location.pathname);
    const sectionMap = [
      ["/services", "/services/index.html"],
      ["/platform", "/platform/ai-operations-suite.html"],
      ["/who-we-empower", "/who-we-empower/index.html"],
      ["/results", "/results/index.html"],
      ["/who-we-are", "/who-we-are/index.html"],
      ["/resources", "/resources/index.html"],
    ];
    const match = sectionMap.find(([prefix]) => path.startsWith(prefix));
    if (match) {
      const top = nav.querySelector(`a[href="${match[1]}"]`);
      if (top) activeLinks = [top];
    }
  }

  activeLinks.forEach((link) => {
    link.classList.add("is-current");
    link.setAttribute("aria-current", "page");
    const item = link.closest(".nav-item");
    if (item) item.classList.add("is-current");
  });

  const breadcrumbId = "page-breadcrumbs";
  const existingBreadcrumbs = document.getElementById(breadcrumbId);
  if (existingBreadcrumbs) existingBreadcrumbs.remove();

  const currentPath = canonicalPath(window.location.pathname);
  if (!["/", "/index.html"].includes(currentPath)) {
    const breadcrumbNodes = [{ label: "Home", href: "/" }];
    const currentLink = activeLinks
      .slice()
      .sort((a, b) => canonicalPath(a.getAttribute("href") || "").length - canonicalPath(b.getAttribute("href") || "").length)
      .pop();

    if (currentLink) {
      const parentItem = currentLink.closest(".nav-item");
      const parentLink = parentItem ? parentItem.querySelector(":scope > a") : null;
      if (parentLink && parentLink !== currentLink) {
        breadcrumbNodes.push({
          label: (parentLink.textContent || "").trim(),
          href: parentLink.getAttribute("href") || null,
        });
      }
      breadcrumbNodes.push({
        label: (currentLink.textContent || "").trim(),
        href: null,
      });
    } else {
      const fallbackLabel = (document.title || "Current Page").split("|")[0].trim();
      breadcrumbNodes.push({ label: fallbackLabel, href: null });
    }

    const deduped = breadcrumbNodes.filter(
      (node, index, arr) =>
        index === 0 ||
        node.label.toLowerCase() !== arr[index - 1].label.toLowerCase() ||
        node.href !== arr[index - 1].href,
    );

    if (deduped.length > 1) {
      const breadcrumbs = document.createElement("nav");
      breadcrumbs.className = "breadcrumbs";
      breadcrumbs.id = breadcrumbId;
      breadcrumbs.setAttribute("aria-label", "Breadcrumb");
      const list = document.createElement("ol");

      deduped.forEach((node, index) => {
        const item = document.createElement("li");
        const isCurrent = index === deduped.length - 1 || !node.href;
        if (isCurrent) {
          const span = document.createElement("span");
          span.className = "is-current";
          span.textContent = node.label;
          item.appendChild(span);
        } else {
          const link = document.createElement("a");
          link.href = node.href;
          link.textContent = node.label;
          item.appendChild(link);
        }
        list.appendChild(item);
      });

      breadcrumbs.appendChild(list);
      const header = document.querySelector(".site-header");
      const main = document.querySelector("main");
      if (main && main.parentNode) {
        main.parentNode.insertBefore(breadcrumbs, main);
      } else if (header?.parentNode) {
        header.parentNode.insertBefore(breadcrumbs, header.nextSibling);
      }
    }
  }

  const closeItem = (item) => {
    item.classList.remove("open");
  };

  const openItem = (item) => {
    item.classList.add("open");
  };

  const closeAll = () => {
    navItems.forEach(closeItem);
  };

  closeAll();

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-item")) closeAll();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
      if (header) {
        header.classList.remove("menu-open");
        syncMenuToggleState();
      }
    }
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
    menu.addEventListener(
      "wheel",
      (event) => {
        event.stopPropagation();
      },
      { passive: true },
    );

    trigger.addEventListener("click", (event) => {
      if (!isTouchLike()) return;
      const itemHeader = item.closest(".site-header");
      if (itemHeader && itemHeader.classList.contains("menu-open")) return;
      event.preventDefault();
      const alreadyOpen = item.classList.contains("open");
      closeAll();
      if (!alreadyOpen) openItem(item);
    });
  });
})();

(() => {
  const CHAT_STYLE_ID = "chat-brand-shell-styles";
  if (!document.getElementById(CHAT_STYLE_ID)) {
    const style = document.createElement("style");
    style.id = CHAT_STYLE_ID;
    style.textContent = `
      .chat-brand-shell {
        position: fixed;
        display: none;
        pointer-events: none;
        border-radius: 18px;
        z-index: 2147483644;
        background: linear-gradient(135deg, rgba(121, 197, 199, 0.34), rgba(46, 166, 212, 0.32), rgba(217, 58, 164, 0.32));
        box-shadow: 0 0 0 1px rgba(121, 197, 199, 0.62), 0 12px 28px rgba(5, 12, 24, 0.52);
      }
      .chat-brand-shell.fallback-shell {
        opacity: 0.95;
      }
      .chat-brand-shell::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        border: 1px solid rgba(255, 139, 102, 0.55);
        opacity: 0.85;
      }
      .chat-brand-shell::after {
        content: "";
        position: absolute;
        inset: 6px;
        border-radius: 12px;
        border: 1px solid rgba(121, 197, 199, 0.34);
        opacity: 0.86;
      }
      .chat-brand-label {
        position: fixed;
        display: none;
        align-items: center;
        justify-content: center;
        gap: 0.35rem;
        min-height: 32px;
        padding: 0.42rem 0.74rem;
        border-radius: 999px;
        border: 1px solid rgba(121, 197, 199, 0.52);
        background: linear-gradient(130deg, rgba(10, 18, 32, 0.93), rgba(16, 30, 52, 0.92));
        color: #e8f2ff;
        font-size: 0.76rem;
        font-weight: 700;
        letter-spacing: 0.015em;
        z-index: 2147483645;
        pointer-events: auto;
        cursor: pointer;
        user-select: none;
        box-shadow: 0 10px 22px rgba(5, 12, 24, 0.52);
      }
      .chat-brand-label::before {
        content: "";
        width: 7px;
        height: 7px;
        border-radius: 999px;
        background: linear-gradient(135deg, #79c5c7, #2ea6d4, #d93aa4);
        box-shadow: 0 0 0 1px rgba(121, 197, 199, 0.3), 0 0 8px rgba(46, 166, 212, 0.5);
      }
      .chat-launcher-branded {
        border-radius: 16px !important;
        box-shadow: 0 0 0 1px rgba(121, 197, 199, 0.3), 0 10px 22px rgba(4, 10, 22, 0.45) !important;
      }
      @media (max-width: 760px) {
        .chat-brand-label {
          min-height: 30px;
          padding: 0.38rem 0.66rem;
          font-size: 0.72rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const shell = document.createElement("div");
  shell.className = "chat-brand-shell";
  shell.setAttribute("aria-hidden", "true");
  document.body.appendChild(shell);

  const label = document.createElement("button");
  label.className = "chat-brand-label";
  label.type = "button";
  label.textContent = "AI Concierge";
  label.setAttribute("aria-label", "Open chat");
  document.body.appendChild(label);

  let launcherEl = null;

  const isVisible = (el) => {
    if (!(el instanceof Element)) return false;
    const styles = window.getComputedStyle(el);
    if (styles.display === "none" || styles.visibility === "hidden") return false;
    if (Number(styles.opacity || "1") <= 0.01) return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  };

  const isLauncherCandidate = (el) => {
    if (!(el instanceof Element)) return false;
    if (!isVisible(el)) return false;
    const styles = window.getComputedStyle(el);
    if (!["fixed", "sticky", "absolute"].includes(styles.position)) return false;
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (rect.width < 32 || rect.width > 180 || rect.height < 32 || rect.height > 180) return false;
    if (rect.left > vw - 140 && rect.top > vh - 180) return true;
    return false;
  };

  const getCandidates = () =>
    Array.from(
      document.querySelectorAll(
        [
          "iframe[src*='leadconnector']",
          "iframe[src*='chat-widget']",
          "[id*='chat-widget']",
          "[class*='chat-widget']",
          "[id*='leadconnector']",
          "[class*='leadconnector']",
        ].join(","),
      ),
    );

  const findLauncher = () => getCandidates().find((node) => isLauncherCandidate(node)) || null;

  const safeInsetBottom = () => {
    const value = window.getComputedStyle(document.documentElement).getPropertyValue("env(safe-area-inset-bottom)");
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const showFallbackShell = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const size = mobile ? 56 : 60;
    const right = mobile ? 12 : 16;
    const bottom = (mobile ? 12 : 16) + safeInsetBottom();
    const left = Math.max(8, vw - right - size);
    const top = Math.max(8, vh - bottom - size);

    shell.classList.add("fallback-shell");
    shell.style.display = "block";
    shell.style.left = `${Math.round(left - 6)}px`;
    shell.style.top = `${Math.round(top - 6)}px`;
    shell.style.width = `${Math.round(size + 12)}px`;
    shell.style.height = `${Math.round(size + 12)}px`;

    const rightInset = mobile ? 10 : 14;
    const labelTop = Math.max(8, top - 36);
    label.style.display = "inline-flex";
    label.style.left = "auto";
    label.style.right = `${Math.round(rightInset)}px`;
    label.style.top = `${Math.round(labelTop)}px`;
  };

  const hideBrandElements = () => {
    shell.style.display = "none";
    label.style.display = "none";
  };

  const updateBrandShell = () => {
    const nextLauncher = findLauncher();
    if (!nextLauncher) {
      launcherEl = null;
      showFallbackShell();
      launcherEl = null;
      return;
    }

    launcherEl = nextLauncher;
    launcherEl.classList.add("chat-launcher-branded");
    shell.classList.remove("fallback-shell");

    const rect = launcherEl.getBoundingClientRect();
    const pad = 7;
    shell.style.display = "block";
    shell.style.left = `${Math.round(rect.left - pad)}px`;
    shell.style.top = `${Math.round(rect.top - pad)}px`;
    shell.style.width = `${Math.round(rect.width + pad * 2)}px`;
    shell.style.height = `${Math.round(rect.height + pad * 2)}px`;

    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const rightInset = mobile ? 10 : 14;
    const labelTop = Math.max(8, rect.top - 36);
    label.style.display = "inline-flex";
    label.style.left = "auto";
    label.style.right = `${Math.round(rightInset)}px`;
    label.style.top = `${Math.round(labelTop)}px`;
  };

  label.addEventListener("click", () => {
    const target = launcherEl || findLauncher() || getCandidates().find((node) => isVisible(node));
    if (!target) return;
    target.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    );
  });

  const observer = new MutationObserver(() => {
    window.requestAnimationFrame(updateBrandShell);
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class", "aria-hidden"],
  });

  window.addEventListener("resize", updateBrandShell, { passive: true });
  window.addEventListener("orientationchange", updateBrandShell, { passive: true });

  updateBrandShell();
  window.setInterval(updateBrandShell, 1200);
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

(() => {
  const footer = document.querySelector("footer.footer, footer");
  if (!footer) return;
  const wrap = footer.querySelector(".footer-wrap");
  if (!wrap || wrap.querySelector(".footer-tagline")) return;

  const existingFooterLinks = wrap.querySelector(".footer-links");
  const existingEmail = wrap.querySelector("a[href^='mailto:']");
  const footerLinks = existingFooterLinks ? existingFooterLinks.cloneNode(true) : document.createElement("div");
  footerLinks.classList.add("footer-links");

  if (!existingFooterLinks) {
    const emailLink = document.createElement("a");
    emailLink.href = existingEmail ? existingEmail.getAttribute("href") : "mailto:hello@actionpotential.ai";
    emailLink.textContent = existingEmail ? existingEmail.textContent : "hello@actionpotential.ai";
    footerLinks.appendChild(emailLink);
  }

  const ensureFooterLink = (href, text) => {
    if (footerLinks.querySelector(`a[href='${href}']`)) return;
    if (footerLinks.childNodes.length) footerLinks.appendChild(document.createTextNode(" · "));
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    footerLinks.appendChild(link);
  };

  ensureFooterLink("/privacy/", "Privacy");
  ensureFooterLink("/terms/", "Terms");
  ensureFooterLink("mailto:hello@actionpotential.ai", "hello@actionpotential.ai");

  const footerBrand = document.createElement("div");
  footerBrand.className = "footer-brand";
  footerBrand.innerHTML = `
    <span><strong>ActionPotential.AI</strong> · Behavioral AI Marketing & Automation</span>
    <span class="footer-tagline">
      <span class="tagline-static">From potential...</span>
      <svg class="footer-tagline-apulse" viewBox="0 0 220 28" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="footerZGradientSubpage" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#79C5C7"></stop>
            <stop offset="0.28" stop-color="#2EA6D4"></stop>
            <stop offset="0.56" stop-color="#00A79D"></stop>
            <stop offset="0.8" stop-color="#FF8B66"></stop>
            <stop offset="1" stop-color="#D93AA4"></stop>
          </linearGradient>
          <radialGradient id="footerZDotGradientSubpage" cx="50%" cy="50%" r="60%">
            <stop offset="0" stop-color="#FFFFFF"></stop>
            <stop offset="0.42" stop-color="#FF8B66"></stop>
            <stop offset="0.75" stop-color="#D93AA4"></stop>
            <stop offset="1" stop-color="#1B75BB"></stop>
          </radialGradient>
        </defs>
        <path
          class="footer-tagline-ap-glow"
          d="M2 18 H64 C76 18 82 10 90 5 C98 1 104 1 108 18 C112 29 122 30 132 18 H166 C176 18 184 22 194 21 H218"
        ></path>
        <path
          class="footer-tagline-ap-track"
          d="M2 18 H64 C76 18 82 10 90 5 C98 1 104 1 108 18 C112 29 122 30 132 18 H166 C176 18 184 22 194 21 H218"
        ></path>
        <circle class="footer-tagline-ap-dot" r="2.8">
          <animateMotion
            dur="2.9s"
            repeatCount="indefinite"
            path="M2 18 H64 C76 18 82 10 90 5 C98 1 104 1 108 18 C112 29 122 30 132 18 H166 C176 18 184 22 194 21 H218"
          ></animateMotion>
        </circle>
      </svg>
      <span class="tagline-animated">to action.</span>
    </span>
  `;

  wrap.innerHTML = "";
  wrap.appendChild(footerBrand);
  wrap.appendChild(footerLinks);
})();

(() => {
  const bookingUrl = "https://link.actionpotential.ai/widget/booking/ksD7NPYqg5JoFugUIJnm";
  const links = document.querySelectorAll("a[href]");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (href === bookingUrl || href.startsWith(bookingUrl + "?")) {
      link.textContent = "Book Free AI Audit";
      link.setAttribute("aria-label", "Book Free AI Audit");
    }
  });
})();
