// src/themes/appTheme.tsx
import { createTheme } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';

const appTheme = createTheme({
  palette: {
    primary: {
      main: blue[500], // Customize your primary color
    },
    secondary: {
      main: pink[500], // Customize your secondary color
    },
    error: {
      main: pink.A400, // Error color customization
    },
    background: {
      default: '#f0f0f0', // Default background color
      paper: '#ffffff',   // Paper background color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Define font family
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: blue[700],
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: blue[600],
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
  },
});

export default appTheme;
