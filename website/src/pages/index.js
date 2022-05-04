import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const Home = () => {
return (
	<>
		<h1>My Projects</h1>
		<a href="./projects/Resume/" target="_blank">Resume</a><br />
		<a href="./projects/frostPoint/"target="_blank">Frost Point</a><br />
		<a href="./projects/badUSB/hacked.bat" target="_blank">Bad USB</a><br />
		<a href="./projects/devotional/"target="_blank">Young adult Devotional</a><br />
	</>
);
};

export default Home;