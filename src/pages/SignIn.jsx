import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const defaultTheme = createTheme();

export const SignIn = () => {

  const {signInUser, msg, setMsg,} = useContext(UserContext);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signInUser(data.get('email'), data.get('password'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Bejelentkezés
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail cím"
              name="email"
              autoComplete="email"
              autoFocus
              className='fields'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Jelszó"
              type="password"
              id="password"
              autoComplete="current-password"
              className='fields'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
Bejelentkezés
            </Button> 
          </Box>
        </Box>
        {msg && <Typography>{msg}</Typography>}        
      </Container>
    </ThemeProvider>
  );
}