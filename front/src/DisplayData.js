// pages/data.js

import React from 'react';
import axios from 'axios';
import { Box, Typography, Paper } from '@mui/material';

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8090/api/collections/your_collection_name/records');
      this.setState({ records: response.data.items, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
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
        {records.map(record => (
          <Paper key={record.id} sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">Name: {record.name}</Typography>
            <Typography>Email: {record.email}</Typography>
            <Typography>Message: {record.message}</Typography>
          </Paper>
        ))}
      </Box>
    );
  }
}

export default DisplayData;

