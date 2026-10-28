const themeToggle = document.querySelector("#themeToggle");
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});
