import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
  } from 'react-router-dom';
import './app.scss';

import Home from './pages/Home/';
import PDP from './pages/PDP/';

import PageBreadcrumb from './pages/Breadcrumb/';

import Header from './pages/Header/'
import RaffleHero from './pages/RaffleHero/';
import Catalog from './pages/Catalog';

function App() {

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/header" element={<Header />} />
					<Route path="/PDP" element={<PDP />} />
					<Route path="/raffleHero" element={<RaffleHero />} />
					<Route path="/breadcrumb" element={<PageBreadcrumb />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
