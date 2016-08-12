ar React = require('react');

var Search = require('./Children/Search');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

var helpers = require('./utils/helpers.js');


var Main = React.createClass({

	getInitialState: function(){
		return {
			searchTerm: "",
			startYear: "",
			endYear: "", 
			results: "",
			saved: [] 
		}
	},	


	setTerm: function(searchTerm, startYear, endYear){
		this.setState({
			searchTerm: searchTerm,
			startYear: startYear,
			endYear: endYear
		})
	},

	componentDidUpdate: function(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");
			
			
			helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear)
				.then(function(data){
					if (data != this.state.results)
					{
						console.log("Results", data);

						this.setState({
							results: data
						})

						
						helpers.postHistory(this.state.searchTerm)
							.then(function(data){
								console.log("Updated!");

							
								helpers.getHistory()
									.then(function(response){
										console.log("Saved Articles", response.data);
										if (response != this.state.saved){
											console.log ("Saved", response.data);

											this.setState({
												saved: response.data
											})
										}
									}.bind(this))	
							}.bind(this)
						)
					}
				}.bind(this))
				
			}
	},

	componentDidMount: function(){

		helpers.getHistory()
			.then(function(response){
				if (response != this.state.saved){
					console.log ("Saved", response.data);

					this.setState({
						saved: response.data
					})
				}
			}.bind(this))
	},

	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron bg-primary">
						<h2 className="text-center">New York Times Article Search</h2>
						<p className="text-center"><em>Enter a search term to find articles written about that topic (ex: "Olympics").</em></p>
					</div>
				</div>

				<div className="row">

					<div className="col-md-12">
					
						<Search setTerm={this.setTerm}/>

					</div>

				</div>

				<div className="row">

					<div className="col-md-12">
				
						<Results results={this.state.results} />

					</div>

				</div>

				<div className="row">

					<Saved saved={this.state.saved}/> 

				</div>

			</div>
		)
	}
});

module.exports = Main;