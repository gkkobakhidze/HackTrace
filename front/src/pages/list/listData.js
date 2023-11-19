// src/pages/about.js
'use client'

// Example usage in a page
import React from 'react';
import IncidentsTable from '../../IncidentsTable';

import { Stack, Button, Typography } from '@mui/material';
import DisplayData from '../../DisplayData';
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


const ListData = () => {
    return (
        <Stack>
        <DisplayData></DisplayData>
      </Stack>
    );
  };
  
  export default ListData;
  