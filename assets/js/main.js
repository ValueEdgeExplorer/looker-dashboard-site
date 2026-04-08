(() => {
  const root = document.documentElement;
  const storageKey = "sme-ipo-theme";
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const themeButtonDesktop = document.getElementById("theme-toggle");
  const themeButtonMobile = document.getElementById("theme-toggle-mobile");
  const yearElement = document.getElementById("year");

  function setTheme(mode) {
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(storageKey, mode);
  }

  function initTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      return;
    }
    setTheme("light");
  }

  function toggleTheme() {
    const isDark = root.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }

  function toggleMenu() {
    if (!mobileMenu || !menuToggle) return;
    const isHidden = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    menuToggle.setAttribute("aria-expanded", String(isHidden));
  }

  initTheme();

  if (themeButtonDesktop) {
    themeButtonDesktop.addEventListener("click", toggleTheme);
  }

  if (themeButtonMobile) {
    themeButtonMobile.addEventListener("click", toggleTheme);
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
})();
