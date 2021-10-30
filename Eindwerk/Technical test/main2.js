"use strict";

import LocationFinder from './Location.js';

let btnLocation = document.getElementById('getLocation')
btnLocation.addEventListener('click', e => {
	e.preventDefault();
	let location = new LocationFinder();
	console.log('Locatie', location);
	let container = document.getElementById('textContainer');
	container.insertAdjacentHTML('beforeend', location);
})
