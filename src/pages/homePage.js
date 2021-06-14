import React, {Component} from 'react';
import axios from "axios";


class HomePage extends Component{
	constructor(props) {
		super(props);

		let orderID = Math.floor(Math.random() * 10000) + 1;
	
		this.state = {
		  price: "",
		  sender_number: "",
		  recipient_number: "",
		  apikey: process.env.REACT_APP_MAZZUMA_API,
		  network: "mtn",
			option: "rmtv",
		orderID: orderID,
		  
		};
	
		localStorage.setItem('orderID', orderID);
	  }
	  
	
	  
	
	  changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	  };
	
	  submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
		  .post("https://client.teamcyst.com/api_call.php", this.state)
		  .then((response) => {
			console.log(response.data);
			this.setState({ response: response.data });
		  })
		  .catch((error) => console.error(error));
	  };
	
	  message  = () => {
		console.log(this.data)
		
		axios
		  .post("https://client.teamcyst.com/phase3/mazexchange-api.php", this.data)
		  .then((response) => {
			console.log(response.data);
			//this.setState({ response: response.data });
		  })
		  .catch((error) => console.error(error));
	  }
	
	  render() {
		const { price, sender_number, recipient_number } = this.state;
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
				<label style={{paddingRight: '40px' }}>Price</label>
				<input
				  class="form-control py-4"
				  type="text"
				  placeholder="Enter the price"
				  name="price"
				  value={price}
				  onChange={this.changeHandler}
				/>
			  </div>
	
			  <div className="form-group">
				<label style={{paddingRight: '40px' }}>Sender's contact</label>
				<input
				  class="form-control py-4"
				  type="text"
				  placeholder="Enter sender's number"
				  name="sender_number"
				  value={sender_number}
				  onChange={this.changeHandler}
				/>
			  </div>
	
			  <div className="form-group">
				<label style={{paddingRight: '40px' }}>Recipient's contact</label>
				<input
				  class="form-control py-4"
				  type="text"
				  placeholder="Enter recipient's number"
				  name="recipient_number"
				  value={recipient_number}
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

export default HomePage;
