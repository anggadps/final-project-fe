import React from "react";
import "./createpassword.css";
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

function CreatePassword() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="formDiv">
          <form action="">
            <h1>Create Password</h1>
            <p></p>
            <div className="inputDiv">
              <Input labelInput="Email" inputName="email" inputType="email" />
              <Input
                labelInput="Password"
                inputName="password"
                inputType="password"
              />
            </div>
            <div className="buttonDiv">
              <Button
                variant="outlined"
                type="submit"
                color="secondary"
                sx={{ py: 1, px: 6 }}
              >
                Submit
              </Button>
              <Button variant="contained" type="submit" sx={{ py: 1, px: 6 }}>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CreatePassword;
