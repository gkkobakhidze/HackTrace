// src/pages/index.js

import { Stack, Typography } from '@mui/material';

import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import React from 'react';
import PocketBase from 'pocketbase'; // Import PocketBase

import { useState } from 'react';

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
  
  handleSubmit = async (event) => {
    console.log("ah")
  };
  

  handleChange = (e) => {
    let { value, name } = e.target;
    
    const prevItem = this.state.active_item;
    const activeItem = { ...prevItem, [name]: value };

    this.setState({
      active_item: activeItem,
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
    <Typography variant='h3'>
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
        InputProps={{
          style: { color: 'white' } // Changes the text color
        }}
        InputLabelProps={{
          style: { color: 'white' } // Changes the label color
        }}
      />
      <Typography>
        Hack Contact Method
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="methods_of_hack"
        name="methods_of_hack"
        value={this.state.methods_of_hack}
        onChange={this.handleChange}
        InputProps={{
          style: { color: 'white' } // Changes the text color
        }}
        InputLabelProps={{
          style: { color: 'white' } // Changes the label color
        }}
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
        InputProps={{
          style: { color: 'white' } // Changes the text color
        }}
        InputLabelProps={{
          style: { color: 'white' } // Changes the label color
        }}
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