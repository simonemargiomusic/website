var darkTheme = document.getElementById("dark-mode-theme");

var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

setTheme(systemTheme);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });

function setTheme(mode) {
  if (mode === "dark") {
    darkTheme.disabled = false;
  } else if (mode === "light") {
    darkTheme.disabled = true;
  }
}