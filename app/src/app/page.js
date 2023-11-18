// src/pages/index.js
import Link from 'next/link';
import { Stack, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ minHeight: '100vh' }}
    >
      <Typography variant="h3">
        Home Page
      </Typography>
    </Stack>
  );
};

export default Home;


