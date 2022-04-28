// import logo from './logo.ico';
import './App.css';
import React from 'react';
import {useState} from 'react';

import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Resume from './pages/resume';
import About from './pages/about';
import Streak from './pages/streak';

const App = () => {
 return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/streak" element={<Streak />} />
        <Route element={<Home />} />
      </Routes>
    </Router>
  )
}
  
export default App
