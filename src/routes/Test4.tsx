import Button from "@mui/material/Button";
import { AppBar, Toolbar, Container } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Test4() {
  return (
    <>
      <AppBar position="static" sx={{ color: '#F00' }}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }} variant="dense">
            <Box display="flex" alignItems="center">
              <Typography color="ButtonText">Left</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography color="ButtonText">Right</Typography>
              <Button variant="contained" color="primary">Contained</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Typography variant="h1">Responsive Design with MUI</Typography>
        <Typography variant="body1">
          This content is centered and adapts to different screen sizes.
        </Typography>
      </Container>
    </>
  );
}

