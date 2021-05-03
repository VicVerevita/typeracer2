import React from 'react'
import './App.css';
import FirstBlock from "./components/FirstBlock/FirstBlock";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
		<div className="App">
			<Navbar />
			<FirstBlock />
		</div>
	);
}

export default App;
