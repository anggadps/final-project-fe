import React from "react";
import "./login.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from "react-router-dom";



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const navigate = useNavigate();


  const [alert, setAlert] = React.useState({
    open : false,
  });
  const { open } = alert;

  
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // on submit form console.log(data)
  const onSubmit = (e) => {
    e.preventDefault();
    if (data.email.includes("@")) {
      navigate("/")
    } else {
      setAlert({...alert, open : true});
    }
  };
  return (
    <div>
      <div className="formDiv">
        <form onSubmit={onSubmit}>
          <h1>Welcome Back! Cheff</h1>
          <p>Please login first</p>
          <div className="inputDiv">
            <Input 
              labelInput="Email"
              inputName="email"
              // inputType="email"
              inputOnchange={inputOnchange}
            />
            <Input
              labelInput="Password"
              inputOnchange={inputOnchange}
              inputName="password"
              inputType="password"
            />
            <p>
              Forgot Password? <a href="/reset">Click here</a>{" "}
            </p>
          </div>
          <Button 
          variant="contained" 
          type="submit" 
          sx={{ py: 1, px: 6 }}>
            Login
          </Button>
          <Snackbar open={open} autoHideDuration={100}>
            <Alert 
            severity="error" 
            sx={{ width: '100%' }}>
              You have entered an invalid e-mail address. Please try again.
            </Alert>
          </Snackbar>
        </form>
        <p>
          Dont have account? <a href="/register">Sign Up here</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
