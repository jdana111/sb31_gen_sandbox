// Test12 (MUI Themes)
// Source: ChatGPT
import React from 'react';
import { ThemeProvider, CssBaseline, Typography, Button, Paper } from '@mui/material';
import appTheme from './../themes/appTheme';

const Test12: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      // <CssBaseline /> Ensures that CssBaseline is applied
      <Paper style={{ padding: '16px', margin: '16px' }} elevation={3}>
        <Typography variant="h1">Welcome to Test12 Component</Typography>
        <Typography variant="h2">This is an H2 Heading</Typography>
        <Typography variant="body1">
          This is some body text. It's styled according to the custom theme defined in appTheme.tsx.
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary" style={{ marginLeft: '8px', marginTop: '16px' }}>
          Secondary Button
        </Button>
      </Paper>
    </ThemeProvider>
  );
};

export default Test12;
