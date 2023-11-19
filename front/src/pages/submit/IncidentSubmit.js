// src/pages/index.js

import { Stack, Typography } from '@mui/material';
import { cleanData } from './scripts';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import React from 'react';
import PocketBase from 'pocketbase'; // Import PocketBase

import { useState } from 'react';
import { match } from 'assert';

export class IncidentSubmit extends React.Component {
  constructor(props) {

    super(props);
    this.state = {

        tx: '', 
        method_of_hack: '',
        related_domain: '' 
    };
    this.client = new PocketBase('http://localhost:8090');

  }
  
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:8090/api/collections/hacker/records', {
            params: {
                limit: 40 // Assuming the API supports a limit parameter
            }
        });
        if (response.data) {
          this.setState({
            hackers:response.data.items,
          })
        } else {
            console.error("Invalid response format");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  
  handleSubmit = async (event) => {

    event.preventDefault();
    let modifiedTx = this.state.tx.substring(2);

    // API URL with the modified transaction ID
    const apiUrl = `https://api.blockcypher.com/v1/eth/main/txs/${modifiedTx}`;

    // Making a GET request to the API
    axios.get(apiUrl)
        .then( response  => {
            // Output the response data to the console
            const pb = new PocketBase('http://127.0.0.1:8090');
            const { method_of_hack, related_domain } = this.state;

            const sendr = response.data.inputs[0].addresses[0]
            const recip = response.data.outputs[0].addresses[0]
            let matchingHacker = this.state.hackers.find(hacker => {
              let normalizedKnownAddress = hacker.known_addresses.trim().toLowerCase();
              let normalizedRecipient = (recip.startsWith('0x') ? recip : '0x' + recip).toLowerCase();
              return normalizedKnownAddress === normalizedRecipient;
            });
            
            if (matchingHacker) {
              try {
                this.client.collection('hacker').update(matchingHacker.id, {
                  "incident_count": matchingHacker.incident_count+1,
                  "hack_methods": `${matchingHacker.hack_methods} ${this.state.method_of_hack}`,
                  "related_domains": `${matchingHacker.related_domains} ${this.state.related_domain}`
                });
                const record = this.client.collection('incidents').create({
                  tx: this.state.tx,
                  method_of_hack: method_of_hack,
                  related_domain: related_domain,
                  sender:`0x${sendr}`,
                  recipient:`0x${recip}`,
                  related_hacker:matchingHacker.id,
                });
  
              } catch (error) {
                console.error('Error submitting incident:', error);
              }
              
            }
            else {

            try {
              const record = this.client.collection('incidents').create({
                tx: this.state.tx,
                method_of_hack: method_of_hack,
                related_domain: related_domain,
                sender:`0x${sendr}`,
                recipient:`0x${recip}`,
              });

              console.log('Record created:', record);
            } catch (error) {
              console.error('Error submitting incident:', error);
            }

            }
        })
        .catch(error => {
            // Handle any errors here
            console.error('Error fetching data:', error);
        });
    
  };

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    this.setState(prev_state=> {
        const new_state = {...prev_state};
        new_state[name] = value;
        return new_state;
    });
  };

  render()  {
    return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ minHeight: '100vh' }}
    >
    <Typography variant='h4'>
      Got Hacked? Submit your incident info:
    </Typography>
      <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography>
          Transaction Hash
        </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="tx"
        name="tx"
        autoFocus
        value={this.state.tx}
        onChange={this.handleChange}
      />
      <Typography>
        Hack Contact Method
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="method_of_hack"
        name="method_of_hack"
        value={this.state.method_of_hack}
        onChange={this.handleChange}
      />
      <Typography>
        Domain or site of hack
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="related_domain"
        name="related_domain"
        autoComplete="related_domain"
        value={this.state.related_domain}
        onChange={this.handleChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Submit
      </Button>
    </Box>
    </Stack>
    )
  };
};
export default IncidentSubmit;