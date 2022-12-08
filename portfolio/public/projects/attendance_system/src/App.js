import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Getter from "./components/Getter";
import Footer from "./components/Footer";
function App() {
  const [active, setActive] = useState(window.location.href.split("#")[1]);

  return (
    <main className="text-gray-400 bg-gray-900 body-font" id="outer-container">
      <Navbar active={active} setActive={setActive} />
      <div id="page-wrap" className="container-fluid">
          <Getter active={active} />        
      </div>
      <Footer />
    </main>
  );
}

export default App;
