// src/pages/about.js
import Link from 'next/link';

import { Stack, Button, Typography } from '@mui/material';

const list = () => {
    return (
        <Stack
            direction="column"
            justifyContent="top"
            alignItems="center"
            spacing={2}
            sx={{ minHeight: '100vh' }}
        >
            <Typography variant="h3">List of Incidents</Typography>
            <Typography>
                Below you may find the list of Incidents we got from users!
            </Typography>
        </Stack>
    );
};

export default list;
