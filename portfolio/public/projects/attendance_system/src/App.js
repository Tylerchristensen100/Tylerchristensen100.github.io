import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Table from "./components/Table";
function App() {

  return (
    <main className="text-gray-400 bg-gray-900 body-font" id="outer-container">
      <Navbar />
      <div id="page-wrap" className="container">
       <Table />
      </div>
    </main>
  );
}

export default App;
