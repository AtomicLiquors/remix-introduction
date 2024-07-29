const dark = 'dark';

export const applyDarkTheme = () => {
  if (
    localStorage.theme === dark ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    alert("2kooong2");
    document.documentElement.classList.add(dark);
  } else {
    document.documentElement.classList.remove(dark);
  }
}

export const toggleDarkTheme = () => {
    if (document.documentElement.classList.contains(dark)) {
        document.documentElement.classList.remove(dark);
    } else {
        document.documentElement.classList.add(dark);
        localStorage.setItem('theme', dark);
    }
}