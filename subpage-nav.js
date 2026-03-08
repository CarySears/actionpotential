(() => {
  const navItems = Array.from(document.querySelectorAll(".nav-item")).filter((item) => item.querySelector(".dropdown-menu"));
  if (!navItems.length) return;

  const isTouchLike = () => window.matchMedia("(hover: none), (pointer: coarse)").matches;

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
    if (!trigger) return;
    trigger.addEventListener("click", (event) => {
      if (!isTouchLike()) return;
      event.preventDefault();
      const willOpen = !item.classList.contains("open");
      closeAll();
      if (willOpen) item.classList.add("open");
    });
  });
})();
