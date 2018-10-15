//List of all API endpoints: https://crime-data-explorer.fr.cloud.gov/api

let fetch = require('node-fetch');

fetch('https://api.usa.gov/crime/fbi/sapi/api/agencies?api_key=HAXTadCkitJGnuHi40UxsyMobt04eI2ZtkALlItR').then(response => {
	return response.json();
}).then(data => {
	// console.log(Object.keys(data));
	console.log(data);
}).catch(error => {
	console.log(error);
});