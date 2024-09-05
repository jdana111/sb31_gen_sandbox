// Test05 (MUI Grid Sandbox)
// Source = https://mui.com/components/grid/
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Test05() {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Item 1</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Item 2</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Item 3</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Test05;
