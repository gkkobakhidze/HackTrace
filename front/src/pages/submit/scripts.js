import axios from "axios";

export function cleanData(tx){

    // Remove the first two characters ('0x') from the transaction ID
    let modifiedTx = tx.substring(2);

    // API URL with the modified transaction ID
    const apiUrl = `https://api.blockcypher.com/v1/eth/main/txs/${modifiedTx}`;

    // Making a GET request to the API
    axios.get(apiUrl)
        .then(response => {
            // Output the response data to the console
            console.log(response.data);
        })
        .catch(error => {
            // Handle any errors here
            console.error('Error fetching data:', error);
        });
    return tx;

}