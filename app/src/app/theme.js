// src/theme.js
import { createTheme } from '@mui/material/styles';

// Create and export the theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default theme;
