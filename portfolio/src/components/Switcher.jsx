import { useState, useEffect } from "react";
import UseDarkSide from "../hooks/useDarkSide";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const Switcher = ({ size = 36 }) => {
  const [theme, setTheme] = UseDarkSide();
  const [darkSide, setDarkSide] = useState(theme === "dark");

  useEffect(() => {
    setDarkSide(theme === "dark");
  }, [theme]);

  const toggleStyle = {
    width: `${size * 2}px`,
    height: `${size}px`,
    borderRadius: `${size / 2}px`,
    backgroundColor: darkSide ? "#4B5563" : "#FCD34D",
    position: "relative",
    cursor: "pointer",
    transition: "background-color 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: darkSide ? "flex-end" : "flex-start",
    padding: "2px",
  };

  const iconStyle = {
    color: darkSide ? "#FCD34D" : "#4B5563",
    width: `${size - 4}px`,
    height: `${size - 4}px`,
    transition: "transform 0.3s, color 0.3s",
  };

  const handleClick = (checked) => {
    setTheme(checked ? "dark" : "light");
    setDarkSide(checked);
  };

  return (
    <label style={toggleStyle} onClick={() => handleClick(!darkSide)}>
      <input
        type="checkbox"
        checked={darkSide}
        onChange={() => {}}
        aria-label="Toggle dark mode"
        style={{ display: "none" }}
      />

      <div style={iconStyle}>{darkSide ? <MoonIcon /> : <SunIcon />}</div>
    </label>
  );
};

export default Switcher;
