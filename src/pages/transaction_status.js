import React, {Component} from 'react';
import axios from "axios";


class TransactionStatus extends Component {
    
    componentDidMount() {
        console.log("Checking transaction status")
        let orderId = localStorage.getItem('orderID');
        axios
		  .get(`https://client.teamcyst.com/checktransaction.php?orderID=${orderId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': '*'
            }
          })
		  .then((response) => {
			console.log(response.data);
			
		  })
		  .catch((error) => console.error(error));
    }
 
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Transaction Status</h1>
                <p></p>

            </div>
        );
    }

}

export default TransactionStatus;