import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HandshakeIcon from '@mui/icons-material/Handshake';

export default function ButtonAppBar() {

  const isAuthenticated = localStorage.getItem('isAuthenticated');

  let button;

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', false);
    window.location.reload();
  }

  if (isAuthenticated === "true") {
    button = <Button variant='contained' color='error' onClick={handleLogout}>Logout</Button>;
  } else {
    button = <Button variant='contained'>LOGIN</Button>;
  }
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HandshakeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Helping Hand Admin
          </Typography>
          {button}
          <div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}