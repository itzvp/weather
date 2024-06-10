"use client"; // This directive makes this component a Client Component

import { useEffect } from "react";

const ThemeInitializer = () => {
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      document.documentElement.classList.add(localTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  return null;
};

export default ThemeInitializer;
