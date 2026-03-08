(() => {
  const navItems = Array.from(document.querySelectorAll(".nav-item")).filter((item) => item.querySelector(".dropdown-menu"));
  if (!navItems.length) return;

  const closeAll = () => {
    navItems.forEach((item) => item.classList.remove("open"));
  };

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-item")) closeAll();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAll();
  });

  navItems.forEach((item) => {
    const trigger = item.querySelector(":scope > a");
    const menu = item.querySelector(":scope > .dropdown-menu");
    if (!trigger) return;

    if (menu) {
      menu.addEventListener(
        "wheel",
        (event) => {
          event.stopPropagation();
        },
        { passive: true },
      );
    }

    trigger.addEventListener("click", (event) => {
      const isOpen = item.classList.contains("open");
      if (isOpen) return;
      event.preventDefault();
      closeAll();
      item.classList.add("open");
    });
  });
})();
