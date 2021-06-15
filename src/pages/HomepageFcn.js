import React, { useState } from "react";
import axios from "axios";

function HomePage(props) {

    const [state, setState ] = useState({
        price: "",
        sender_number: "",
        recipient_number: "",
        apikey: process.env.REACT_APP_MAZZUMA_API,
        network: "mtn",
        option: "rmtv",
    });
    
    let orderID = Math.floor(Math.random() * 10000) + 1;
    localStorage.setItem('orderID', orderID);

    function changeHandler(e) {
        setState({ 
            [e.target.name]: e.target.value 
        });
    }
    
    function submitHandler(e) {
        e.preventDefault();
        axios
            .post("https://client.teamcyst.com/api_call.php", state)
            .then((response) => {
            console.log(response.data);
            setState({ response: response.data });
            })
            .catch((error) => console.error(error));
    }
    
    function message() {
        console.log(this.data)
        axios
            .post("https://client.teamcyst.com/phase3/mazexchange-api.php", this.data)
            .then((response) => {
            console.log(response.data);
            })
            .catch((error) => console.error(error));
    }

    const { price, sender_number, recipient_number } = state;
     
    return (
        <div className="card-body">
            <div className="container my-3 bg-light">
                <div class="col-md-12 text-center">
                <button type="button" className="btn btn-primary mr-3" onClick={message}> 
                    Check Balance
                </button>
                <button type="button" className="btn btn-success">
                    Validate Account
                </button>
                </div>
            </div>
            <div>
                {state.response != null ? (
                <div
                    class="alert alert-warning alert-dismissible fade show"
                    role="alert"
                >
                    <h1>{state.response["status"]}</h1>
                    <button
                    type="button"
                    className="close"
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
                    <label>Price</label>
                    <input
                        className="form-control py-4"
                        type="text"
                        placeholder="Enter the price"
                        name="price"
                        value={price}
                        onChange={changeHandler}
                    />
                    </div>
                <div className="form-group">
                    <label>Sender's contact</label>
                    <input
                        className="form-control py-4"
                        type="text"
                        placeholder="Enter sender's number"
                        name="sender_number"
                        value={sender_number}
                        onChange={changeHandler}
                    />
                </div>

                <div className="form-group">
                    <label>Recipient's contact</label>
                    <input
                        className="form-control py-4"
                        type="text"
                        placeholder="Enter recipient's number"
                        name="recipient_number"
                        value={recipient_number}
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

export default HomePage; 
