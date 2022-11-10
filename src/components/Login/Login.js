import './Login.css';
import React, { useState } from 'react';
import ButtonAppbar from '../ButtonAppBar';
import { Card, TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const history = useHistory();

  const isAuthenticated = localStorage.getItem('isAuthenticated');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', true);
      history.push('/addproduct');
    } else {
      alert('Login failed');
    }
  }

  if(isAuthenticated === "true") {
    history.push('/addproduct');
  } else{
    return (
      <>
        <ButtonAppbar />
        <div className='login-container'>
          <Card sx={{ maxWidth: 500 }}>
            <h1>Login Here 🚪</h1>
            <form onSubmit={handleLogin}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={username}
                autoComplete='off'
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type='submit' variant="contained">LOGIN</Button>
            </form>
          </Card>
        </div>
      </>
    )
  }
}

export default Login