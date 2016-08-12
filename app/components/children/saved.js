var React = require('react');

var Saved = React.createClass({

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Saved Articles</h3>
				</div>
				<div className="panel-body text-center">

					{}
					{this.props.saved.map(function(search, i)
						{
							return <p key={i}>{search.title}</p> 
						}
					)}
				</div>
			</div>

		)
	}
});


module.exports = Saved;

