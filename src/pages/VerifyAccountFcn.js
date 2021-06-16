import React, { useState } from "react";
import axios from "axios";

function VerifyAccount(props) {

    const [state, setState ] = useState(
        {
            apikey: process.env.REACT_APP_MAZZUMA_API,
            option: "rmtv",
            username: "" 
        }
    ); 

    const changeHandler = e => {
		setState(
            {
                [e.target.name]: e.target.value 
            }
        );
	};

    const submitHandler = e => {
        e.preventDefault();
		console.log(state);
		axios
            .post("https://client.teamcyst.com/phase3/mazexchange-api.php", state)
		    .then((response) => {
			console.log(response.data);
			this.setState({ response: response.data });
		    })
		    .catch((error) => console.error(error));
    }; 

    const { username } = state;

    return (
        <div className="card-body" style={{ display: "block", textAlign: "center" }}>
			<div>
			    {state.response != null ? (
				<div
				  class="alert alert-warning alert-dismissible fade show"
				  role="alert"
				>
                    <h1>{state.response["status"]}</h1>
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
			<form onSubmit={submitHandler}>
                <div className="form-group">
                    <label style={{paddingRight: '40px' }}>Account Username</label>
                    <input
                    class="form-control py-4"
                    type="text"
                    placeholder="Enter the username"
                    name="price"
                    value={username}
                    onChange={changeHandler}
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

export default VerifyAccount;