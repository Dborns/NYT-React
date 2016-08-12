var React = require('react');

var Search = React.createClass({

	getInitialState: function(){
		return {
			searchTerm: "",
			startYear: "",
			endYear: ""
		}
	},
 
	handleChangeTerm: function(event){

    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	handleChangeStartYear: function(event){

    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},
 
	handleChangeEndYear: function(event){

    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	handleClick: function(e){

		console.log("CLICK");
		console.log(this.state.searchTerm);
		console.log(this.state.startYear);
		console.log(this.state.endYear);
		

		this.props.setTerm({
			searchTerm: this.state.searchTerm,
			startYear: this.state.startYear,
			endYear: this.state.endYear
		});

	},

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search</h3>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>

								
								<input type="text" className="form-control text-center" id="searchTerm" onChange= {this.handleChangeTerm} required/>
								<br />
								<h4 className=""><strong>Start Year</strong></h4>

								
								<input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChangeStartYear} required/>
								<br />
								<h4 className=""><strong>End Year</strong></h4>

								
								<input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChangeEndYear} required/>
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Search</button>
							</div>

						</form>
				</div>
			</div>



		)
	}
});

module.exports = Search;