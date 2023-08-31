import React from "react";
import "./login.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FABC1D",
    },
    secondary: {
      main: "#5B4947",
    },
  },
});

function Login() {
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
    console.log(data);
  };
  return (
    <div>
      <div className="formDiv">
        <form action="" onSubmit={onSubmit}>
          <h1>Welcome Back! Cheff</h1>
          <p>Please login first</p>
          <div className="inputDiv">
            <Input
              labelInput="Email"
              inputName="email"
              inputType="email"
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
          <Button variant="contained" type="submit" sx={{ py: 1, px: 6 }}>
            Login
          </Button>
        </form>
        <p>
          Dont have account? <a href="/register">Sign Up here</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
