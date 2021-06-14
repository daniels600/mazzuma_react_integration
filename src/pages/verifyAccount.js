import React, { Component } from "react";
import axios from "axios";
// import Button from 'react-bootstrap/Button';


class VerifyAccount extends Component {
    constructor(props) {
		super(props);
	
		this.state = {
		  apikey: process.env.REACT_APP_MAZZUMA_API,
            option: "rmtv",
            username: "" 
		};
	
	  }

	
	  changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	  };
	
	  submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
		  .post("https://client.teamcyst.com/phase3/mazexchange-api.php", this.state)
		  .then((response) => {
			console.log(response.data);
			this.setState({ response: response.data });
		  })
		  .catch((error) => console.error(error));
	  };
	
	
	  render() {
		const { username } = this.state;
		return (
			<div className="card-body" style={{ display: "block", textAlign: "center" }}>
				
			
			<div>
			  {this.state.response != null ? (
				<div
				  class="alert alert-warning alert-dismissible fade show"
				  role="alert"
				>
				  <h1>{this.state.response["status"]}</h1>
				  <button
					type="button"
					class="close"
					data-dismiss="alert"
					aria-label="Close"
				  >
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
			  ) : (
				<p>
				  No transaction request sent yet. Kindly send by filling the form
				  below.
				</p>
			  )}
			</div>
			<form onSubmit={this.submitHandler}>
			  <div className="form-group">
				<label style={{paddingRight: '40px' }}>Account Username</label>
				<input
				  class="form-control py-4"
				  type="text"
				  placeholder="Enter the username"
				  name="price"
				  value={username}
				  onChange={this.changeHandler}
				/>
			  </div>
	
			  <button
				type="submit"
				name="submit"
				className="btn btn-primary btn-lg btn-block"
				required
			  >
				Send
			  </button>
			</form>
		  </div>
		);
	  }
}

export default VerifyAccount;