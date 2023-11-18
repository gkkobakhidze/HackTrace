// src/pages/about.js
import Link from 'next/link';

// Example usage in a page
import React from 'react';
import IncidentsTable from '../IncidentsTable';

const incidents = [
    {
        id:"1",
        tx:"0x70abc3275512221e5bb8b623775ba3afb72704e8beb3129b71fcf8237d6063d4",
        sender:"abc",
        recipient:"xyz",
        identified_hacker_id:"hacker-1",
        methods_of_hack:"discord",
        related_domains:"app.uniswap.xyz",
    },
    {
        id:"1",
        tx:"0x70abc3275512221e5bb8b623775ba3afb72704e8beb3129b71fcf8237d6063d4",
        sender:"abc",
        recipient:"xyz",
        identified_hacker_id:"hacker-1",
        methods_of_hack:"discord",
        related_domains:"app.uniswap.xyz",
    },
    {
        id:"1",
        tx:"0x70abc3275512221e5bb8b623775ba3afb72704e8beb3129b71fcf8237d6063d4",
        sender:"abc",
        recipient:"xyz",
        identified_hacker_id:"hacker-1",
        methods_of_hack:"discord",
        related_domains:"app.uniswap.xyz",
    },
  // ... other incidents
];
import { Stack, Button, Typography } from '@mui/material';


const List = () => {
    return (
      <Stack
        direction="column"
        justifyContent="top"
        alignItems="center"
        spacing={2}
        sx={{ minHeight: '100vh' }}
      >
        <Typography variant="h3">List of Incidents</Typography>
        <Typography component="div">
          Below you may find the list of identified hackers and latest incidents!
        </Typography>
        <IncidentsTable incidents={incidents} />
      </Stack>
    );
  };
  
  export default List;
  