import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import lightBlue from '@mui/material/colors/lightBlue';
import Grid from '@mui/material/Grid';

import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function NavBar() {

const theme = createTheme({
    palette: {
        primary:{
            main: '#FFFFF',
          },
        },
    });

  return (
    <ThemeProvider theme={theme}>

    <AppBar position="relative" color="primary">
        <Toolbar>
            <Grid direction='row' container spacing={2}>
                <Grid component={RouterLink} to="/" item xs={4}>
                    <Typography  align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Submit Info
                    </Typography>
                </Grid>
                <Grid component={RouterLink} to="/about" item xs={4}>
                    <Typography  align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        About
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
    </ThemeProvider>

  );
}

