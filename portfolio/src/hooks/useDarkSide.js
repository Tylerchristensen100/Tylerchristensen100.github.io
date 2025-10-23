import { useEffect, useState } from "react";

function UseDarkSide() {
  // 1. Use LAZY INITIALIZATION to safely read from localStorage only once.
  // This reduces hook calls and makes the initial state declaration stable.
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Return the initial theme. Default is 'dark'.
    return savedTheme || "dark";
  });
  
  // 2. Compute the OPPOSITE theme directly from the state (NOT A HOOK).
  // This is the class we need to REMOVE from the document.
  const oppositeTheme = theme === "dark" ? "light" : "dark";

  // 3. Effect to apply the theme to the DOM whenever 'theme' changes.
  // This is the only useEffect, making the hook count stable (1 useState, 1 useEffect).
  useEffect(() => {
    console.log("Theme applied to DOM:", theme);
    
    try {
      const root = window.document.documentElement;
      
      // 1. Remove the opposite theme class
      root.classList.remove(oppositeTheme);
      
      // 2. Add the current theme class
      root.classList.add(theme);

      // Save theme to localStorage
      localStorage.setItem("theme", theme);
      
    } catch (e) {
      console.error("Error applying theme:", e);
    }
  }, [theme, oppositeTheme]);

  // The wrapper function is no longer strictly necessary but is cleaner for component usage.
  // We return [oppositeTheme, setter]
  const themeSetter = (newTheme) => {
    setTheme(newTheme);
  };

  return [oppositeTheme, themeSetter];
}

export default UseDarkSide;
