import React from 'react';
import { render } from 'react-dom';
import { hello, goodbye } from './lib';

render(
	<main>
		{ hello } 
		{ goodbye }
	</main>,
	document.getElementById('my-app')
)