import { Stack, Typography, List, ListItem, Box } from '@mui/material';


import { TextField, Button,  } from '@mui/material';
import axios from 'axios';
import React from 'react';
import PocketBase from 'pocketbase'; // Import PocketBase

import { useState } from 'react';
import { TestFunction } from './scripts';

export class TestPage extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      test_value:""
    };

  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    this.setState(prev_state=> {
        const new_state = {...prev_state};
        new_state[name] = value;
        return new_state;
    });
  };
  

  render() {
    return (
      <Box sx={{ minHeight: '100vh', maxWidth: 'lg', mx: 'auto', p: 4 }}>
      <Typography variant="h2" gutterBottom component="div">
        TestPage
      </Typography>
      
        <TextField
          margin="dense"
          id="test_value"
          label="Test Value"
          name="test_value"
          type="text"
          value={this.state.test_value}
          onChange={this.handleChange}
          placeholder="test_value"
          fullWidth
          />
      <Button onClick={() => {TestFunction(this.state.test_value)}}>
        Click me
      </Button>
    </Box>
      );
    };
  }

export default TestPage;