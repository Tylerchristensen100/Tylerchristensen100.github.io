import { useState } from "react";

function SideBar() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={toggle} className="burger-button">
          <img src="./img/burger.svg" alt="Hamburger Menu button" />
        </button>
        <div className="menu" data-open={isOpen}>
          <ul>
            <li>
              <a
                className="menu-item title-font font-medium text-white text-xl md:mb-0 pt-8"
                href="#about"
              >
                Tyler Christensen
              </a>
            </li>
            <li>
              <a
                className="menu-item mr-5 text-white"
                href="#projects"
                onClick={closeSideBar}
              >
                Past Work
              </a>
            </li>
            <li>
              <a
                className="menu-item mr-5 text-white"
                href="#skills"
                onClick={closeSideBar}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="menu-item mr-5 text-white"
                href="#contact"
                onClick={closeSideBar}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
