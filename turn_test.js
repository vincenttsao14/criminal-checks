let fetch = require('node-fetch');
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIiLCJzdWIiOiJEZE1vUWVyNi1NaEFGa1hyMW84SVVxdU81cHZCMDhZQnVmUUNjOHI3QWZNNnNOR09zQ3FhRnh0dDRMRC0za05sIiwiZXhwIjoxNTcxMzM1NTMwLCJhdWQiOiI0TkYtUld2Y3VvNnFoUm5CenpzclQ0SHVKSDFMRVlWUSIsImlhdCI6MTUzOTc5OTUzMH0.nRGAtUTsApFx0yUfnsBuBrnatOA-glHlnIl0kpZySzE';
let data = {
  "email_candidate": "true",
  "redirect_url": "https://turning.io",
  "last_name": "Sadler",
  "reference_id": "ABC12345",
  "email": "contact@turning.io",
  "callback_url": "https://localhost:8000",
  "phone_number": "18884998876",
  "first_name": "Alec"
};

fetch('https://api.turning.io/v1/person/search_async', {
	method: 'POST',
	headers: {
	    'Authorization': `Bearer ${token}`,
	    'Content-Type': 'application/json; charset=utf-8'		
	},
	body: JSON.stringify(data)	
}).then(response => {
	return response.json();
}).then(data => {
	console.log(data);
}).catch(error => {
	console.log(error);
});