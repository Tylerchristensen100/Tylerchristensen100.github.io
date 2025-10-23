import { useState } from "react";
import UseDarkSide from "../hooks/useDarkSide";
// // import {DarkModeSwitch} from 'react-toggle-dark-mode';
// import { DarkModeSwitch } from 'react-toggle-dark-mode';

// function Switcher() {
//     const [colorTheme, setTheme] = UseDarkSide();
//     const [darkSide, setDarkSide] = useState( colorTheme === "light" ? true : false );

//     const toggleDarkMode = (checked) => {
//         setTheme(colorTheme);
//         setDarkSide(checked);
//     };
//     return (
//         <>
//             <div className="n-16 flex flex-col items-center">
//                 <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={40} />
//             </div>
//         </>
//     );
// }

// export default Switcher;

// DarkModeToggle.js
import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

/**
 * A custom toggle component to replace react-toggle-dark-mode.
 * It uses a hidden checkbox and a styled label to create the toggle effect.
 * @param {boolean} checked - The current dark mode state (true for dark, false for light).
 * @param {function} onChange - The function to call when the switch is toggled.
 * @param {number} size - The size of the icon (for styling purposes, here it affects the whole toggle).
 */
const Switcher = ({ size = 24 }) => {
  const [colorTheme, setTheme] = UseDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  // Simple styling example, you'd apply your own styling (e.g., Tailwind classes)
  const toggleStyle = {
    width: `${size * 2}px`,
    height: `${size}px`,
    borderRadius: `${size / 2}px`,
    backgroundColor: darkSide ? "#4B5563" : "#FCD34D", // Gray for dark, Yellow for light
    position: "relative",
    cursor: "pointer",
    transition: "background-color 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: darkSide ? "flex-end" : "flex-start",
    padding: "2px",
  };

  const iconStyle = {
    color: darkSide ? "#FCD34D" : "#4B5563", // Yellow icon on dark, Gray icon on light
    width: `${size - 4}px`, // Icon slightly smaller than the height of the container
    height: `${size - 4}px`,
    transition: "transform 0.3s, color 0.3s",
  };

  const toggle = (checked) => {
    setTheme(checked ? "dark" : "light");
    setDarkSide(checked);
  };

  // If you are using Tailwind CSS, you would use classes instead of inline styles.
  // For simplicity and direct replacement logic, a basic structure is provided.
  // The crucial part is the <input type="checkbox"> and the onChange/checked props.

  return (
    <label style={toggleStyle} onClick={() => toggle(!checked)}>
      {/* Hidden checkbox - for accessibility and state */}
      <input
        type="checkbox"
        checked={darkSide}
        onChange={() => {
          /* Handled by the label's onClick */
        }}
        aria-label="Toggle dark mode"
        style={{ display: "none" }}
      />

      {/* Icon representing the current state (Sun for Light, Moon for Dark) */}
      <div style={iconStyle}>{darkSide ? <MoonIcon /> : <SunIcon />}</div>
    </label>
  );
};

export default Switcher;
