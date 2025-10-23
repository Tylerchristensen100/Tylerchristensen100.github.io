import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/nav/Navbar";
import SideBar from "./components/nav/SideBar";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <main className="text-gray-400 bg-gray-900 body-font" id="outer-container">
      {isDesktop ? (
        <Navbar />
      ) : (
        <SideBar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      )}
      <div id="page-wrap">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;
