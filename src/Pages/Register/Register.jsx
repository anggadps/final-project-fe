import React from "react";
import "./register.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Input from "../../components/Input";
import { Button } from "@mui/material";

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

function Register() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="formDiv">
          <form action="">
            <h1>Are you ready become a professional cheff?</h1>
            <p>Please register first</p>
            <div className="inputDiv">
              <Input labelInput="Name" inputName="name" inputType="text" />
              <Input labelInput="Email" inputName="email" inputType="email" />
              <Input
                labelInput="Password"
                inputName="password"
                inputType="password"
              />
              <Input
                labelInput="Confirm Password"
                inputName="confirmPassword"
                inputType="password"
              />
            </div>
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
          </form>
          <p>
            Have account? <a href="/">Login here</a>{" "}
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Register;
