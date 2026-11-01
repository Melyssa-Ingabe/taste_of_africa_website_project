// ==========================================
// Tastes of Africa - script.js
// ==========================================

// ---------- 1. DARK / LIGHT MODE TOGGLE ----------
const themeToggle = document.getElementById("theme-toggle");

// Switch the button icon: moon in light mode, sun in dark mode
function updateThemeIcon(isDark) {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

// On page load: restore the saved theme (works on every page)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}
updateThemeIcon(document.body.classList.contains("dark"));

// On click: toggle the theme and remember the choice
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon(isDark);
  });
}