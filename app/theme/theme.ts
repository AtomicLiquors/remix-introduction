export const THEMES = {
  DARK: "dark",
  PINK: "pink",
} as const;

export const themeClasses = {
  text: {
    primary: "text-primary",
    secondary: "text-secondary",
  },

  bg: {
    primary: "bg-primary",
    secondary: "bg-secondary",
  },
};

type Theme = (typeof THEMES)[keyof typeof THEMES];

export const applyExistingTheme = () => {
  checkSystemThemeSetting();
  checkLocalStorage();
};

const checkSystemThemeSetting = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    switchTheme(THEMES.DARK);
};

const checkLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  if (theme !== null && Object.values(THEMES).includes(theme as Theme))
    switchTheme(theme as Theme);
};

export const switchTheme = (themeName: Theme) => {
  document.querySelector("html")?.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
};

export const clearTheme = () => {
  document.querySelector("html")?.removeAttribute("data-theme");
  localStorage.removeItem("theme");
};
