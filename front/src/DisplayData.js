// pages/data.js

import React from 'react';
import axios from 'axios';
import { Box, Typography,Stack, Paper } from '@mui/material';
import PocketBase from 'pocketbase'; // Import PocketBase
import IncidentsTable from './IncidentsTable';
import HackerTable from './HackerTable';

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      hackers:[],
      isLoading: true,
      error: null
    };
    this.client = new PocketBase('http://localhost:8090');

  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:8090/api/collections/incidents/records', {
            params: {
                limit: 40 // Assuming the API supports a limit parameter
            }
        });
        if (response.data) {
          this.setState({
            records:response.data.items,
          })
        } else {
            console.error("Invalid response format");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    try {
        const response = await axios.get('http://localhost:8090/api/collections/hacker/records', {
            params: {
                limit: 40 // Assuming the API supports a limit parameter
            }
        });
        if (response.data) {
          this.setState({
            hackers:response.data.items,
            isLoading:false,
          })
        } else {
            console.error("Invalid response format");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

  render() {
    const { records, isLoading, error } = this.state;

    if (isLoading) {
      return <Typography>Loading data...</Typography>;
    }

    if (error) {
      return <Typography>Error loading data: {error.message}</Typography>;
    }

    return (
      <Box sx={{ p: 2 }}>
      <Stack
        direction="column"
        justifyContent="top"
        alignItems="center"
        spacing={1}
        sx={{ minHeight: '40vh' }}
      >
        <Typography variant="h3">Identified Hackers</Typography>
        <HackerTable hackers={this.state.hackers} />
      </Stack>
      <Stack
        direction="column"
        justifyContent="top"
        alignItems="center"
        spacing={2}
        sx={{ minHeight: '100vh' }}
      >
        <Typography variant="h3">Latest Incidents</Typography>
        <IncidentsTable incidents={this.state.records} />
      </Stack>
      </Box>
    );
  }
}

export default DisplayData;

