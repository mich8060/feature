import React, { useState } from 'react';
import './app.scss';

import Selectors from './components/selectors';

function App() {
	const sizes = [
		{
			'label': 4,
			'disabled': false
		},
		{
			'label':4.5,
			'disabled': false
		},
		{
			'label':5,
			'disabled': false,
		},
		{
			'label':5.5,
			'disabled': false,
		},
		{
			'label':6,
			'disabled': false,
		},
		{
			'label':6.5,
			'disabled': false,
		},
		{
			'label':7,
			'disabled': false,
		},
		{
			'label':7.5,
			'disabled': false,
		},
		{
			'label':8,
			'disabled': false,
		},
		{
			'label':8.5,
			'disabled': false,
		},
		{
			'label':9,
			'disabled': false,
		},
		{
			'label':9.5,
			'disabled': false,
		},
		{
			'label':10,
			'disabled': true,
		},
		{
			'label':10.5,
			'disabled': true,
		},
		{
			'label':11,
			'disabled': true,
		},
		{
			'label':11.5,
			'disabled': true,
		},
		{
			'label':12,
			'disabled': false,
		},
		{
			'label':12.5,
			'disabled': false,
		},
		{
			'label':13,
			'disabled': false,
		}
	];

	// 4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13

	const sizebuttons = sizes.map((size) => 
		<Selectors label={size.label} disabled={size.disabled} />
	)
	return (
		<div className="app">
			<div className="buybox">
				<div className="buybox--sizes">
					{sizebuttons}
				</div>
			</div>
		</div>
	);
}

export default App;
