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
import RaffleHero from './pages/RaffleHero/';
import Catalog from './pages/Catalog';

function App() {

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Catalog" element={<Catalog />} />
					<Route path="/Header" element={<Header />} />
					<Route path="/PDP" element={<PDP />} />
					<Route path="/RaffleHero" element={<RaffleHero />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
