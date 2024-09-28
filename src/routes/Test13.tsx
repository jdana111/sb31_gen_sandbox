// Test13 (MUI JSS-Based Styling)
// Source: ChatGPT
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Typography, Button } from '@mui/material';

const useStyles = makeStyles({
  root: {
    padding: '16px',
    margin: '16px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    color: '#125435',
    marginBottom: '8px',
  },
  subheader: {
    color: '#EB3D00',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  bodyText: {
    color: '#333',
    marginBottom: '16px',
  },
  primaryButton: {
    backgroundColor: '#125435',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0f4b2f',
    },
  },
  secondaryButton: {
    borderColor: '#EB3D00',
    color: '#EB3D00',
    '&:hover': {
      borderColor: '#d83500',
      color: '#fff',
      backgroundColor: '#EB3D00',
    },
    marginLeft: '8px',
  },
});

const Test13: React.FC = () => {
  const classes = useStyles(); // Initialize the useStyles hook

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h1" className={classes.header}>
        Welcome to Test13 Component
      </Typography>
      <Typography variant="h2" className={classes.subheader}>
        This is an H2 Heading
      </Typography>
      <Typography variant="body1" className={classes.bodyText}>
        This is some body text styled using the custom useStyles hook.
      </Typography>
      <Button variant="contained" className={classes.primaryButton}>
        Primary Button
      </Button>
      <Button variant="outlined" className={classes.secondaryButton}>
        Secondary Button
      </Button>
    </Paper>
  );
};

export default Test13;
