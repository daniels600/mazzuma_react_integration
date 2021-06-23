/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const { REACT_APP_MAZZUMA_API } = process.env;

function CheckBalance(props) {
  const [state, setState] = useState({
    apikey: process.env.REACT_APP_MAZZUMA_API,
    option: "get_balance",
  });

  const message = () => {
    axios
      .post("https://client.teamcyst.com/phase3/mazexchange-api.php", state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    // const { message } = this.state;
    <div
      className="card-body"
      style={{ display: "block", textAlign: "center" }}
    >
      <Button variant="primary" onClick={message}>
        Click to check balance
      </Button>
    </div>
  );
}

export default CheckBalance;
