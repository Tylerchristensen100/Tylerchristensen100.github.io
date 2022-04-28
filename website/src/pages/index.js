import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const Home = () => {
return (
	<>
	<h1>My Projects</h1>
	<a href="./projects/Resume/index.html" target="_blank">Resume</a><br />
	<a href="./projects/frostPoint/index.html">Frost Point</a><br />
	<a href="./projects/badUSB/hacked.bat">Bad USB</a><br />
	</>
);
};

export default Home;