// src/pages/index.js
import Link from 'next/link';
import { Stack, Typography, Button } from '@mui/material';
import IncidentSubmit from "./IncidentSubmit";
const Home = () => {
  return (
    
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    sx={{ minHeight: '100vh' }}
    >
      <IncidentSubmit></IncidentSubmit>
    </Stack>
  );
};

export default Home;
