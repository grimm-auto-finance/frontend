/**
 * A function to check whether the current theme is dark.
 */
export function isThemeDark(): boolean {
  let storageTheme = localStorage.getItem("theme");
  if (storageTheme !== null) {
    return storageTheme === "dark";
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return true;
  }
  return false;
}

/**
 * Set the theme
 * @param theme Whether to set the theme to dark (true) or light (false)
 */
export function setTheme(darkTheme: boolean) {
  if (darkTheme) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
