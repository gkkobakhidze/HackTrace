// src/pages/about.js
import Link from 'next/link';

import { Stack,Button, Typography } from '@mui/material';

const About = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ minHeight: '100vh' }}
    >
      <Typography variant="h3">About Us</Typography>
      <Typography>
        This is the about page, using Material UI's Stack component for layout.
      </Typography>
    </Stack>
  );
};

export default About;
