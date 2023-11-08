import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
  } from 'react-router-dom';
import './app.scss';

import Home from './pages/Home/';
import PDP from './pages/PDP/'

import Header from './pages/Header/'

function App() {

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Header" element={<Header />} />
					<Route path="/PDP" element={<PDP />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
