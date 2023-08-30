import React from "react";
import "./login.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";

function Login() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="formDiv">
          <form action="">
            <h1>Welcome Back! Cheff</h1>
            <p>Please login first</p>
            <div className="inputDiv">
              <Input labelInput="Email" inputName="email" inputType="email" />
              <Input labelInput="Password" inputName="password" inputType="password" />
              <p>
                Forgot Password? <a href="/createpassword">Click here</a>{" "}
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
    </div>
  );
}

export default Login;
