var axios = require('axios');

var authKey = "8f2a45ea5128489a94834b44f4c7ec93"

var helpers = {

	runQuery: function(searchTerm, startYear, endYear){

		console.log(searchTerm);


		var authKey = "8f2a45ea5128489a94834b44f4c7ec93"
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm.searchTerm + "&begin_date=" + searchTerm.startYear + "&end_date=" + searchTerm.endYear + "&api-key=" + authKey;
		console.log(queryURL);
		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
		})

	},


	getHistory: function(){

		return axios.get('/api')
			.then(function(response){

				console.log(response);
				return response;
			});
	},


	postHistory: function(location){

		return axios.post('/api', {location: location})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}



module.exports = helpers;

