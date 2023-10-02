import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import tokenDecode from "jwt-decode";


const LoginAdmin = () => {
  const navigate = useNavigate();
  

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { login } = useAuth();
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_API_URL + "/User/Login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        const decode = tokenDecode(response.data.token); 
        if(decode.role === "admin"){
          console.log(decode.role)
          login(response.data)
          // navigate("/admin/dashboard"); 
        } else {
          console.log("Please login with User Admin!")
        }
        
        
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Email"
          name="email"
          onChange={inputOnchange} // Ubah inputOnchange menjadi onChange
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          onChange={inputOnchange} // Ubah inputOnchange menjadi onChange
          type="password"
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Button variant="contained" onClick={onSubmit}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginAdmin;