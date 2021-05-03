import React from 'react'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import TextFetch from "./components/TextFetch/TextFetch";

function App() {
  return (
		<div className="App">
			<Navbar />
			<TextFetch />
		</div>
	);
}

export default App;
