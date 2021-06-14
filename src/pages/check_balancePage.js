import React, { Component } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

class CheckBalance extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			apikey: process.env.REACT_APP_MAZZUMA_API,
			option: "get_balance",
		  };

	  }
	
	
	  message  = () => {
		console.log("I clicked this")
		
		axios
		  .post("https://client.teamcyst.com/phase3/mazexchange-api.php", {
			apikey: process.env.REACT_APP_MAZZUMA_API,
			option: "get_balance",
		  })
		  .then((response) => {
			console.log(response.data);
			//this.setState({ response: response.data });
		  })
		  .catch((error) => console.error(error));
	  }
	
	  render() {
		// const { message } = this.state;
		return (
			<div className="card-body" style={{ display: "block", textAlign: "center" }}>
				<Button variant="primary" onClick={this.message}>Click to check balance</Button>

		  	</div>
		);
	  }

}

export default CheckBalance;
