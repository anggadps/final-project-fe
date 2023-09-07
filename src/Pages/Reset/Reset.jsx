import React from "react";
import "./reset.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Navbar from "../../components/Navbar/Navbar-guest";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Reset() {
  const navigate = useNavigate();

  const [alert, setAlert] = React.useState({
    open: false,
  });
  const { open } = alert;

  const [data, setData] = useState({
    email: "",
  });

  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // on submit form console.log(data)
  const onSubmit = (e) => {
    e.preventDefault();
    if (data.email.includes("@")) {
      navigate("/createpassword");
    } else {
      setAlert({ ...alert, open: true });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="formDiv">
        <form action="" onSubmit={onSubmit}>
          <h1>Reset Password</h1>
          <p>Send OTP code to your email address</p>
          <div className="inputDiv">
            <Input
              labelInput="Email"
              inputName="email"
              // inputType="email"
              inputOnchange={inputOnchange}
            />
          </div>
          <div className="buttonDiv">
            <Button variant="outlined" color="secondary" type="reset">
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Confirm
            </Button>
            <Snackbar open={open} autoHideDuration={100}>
              <Alert severity="error" sx={{ width: "100%" }}>
                You have entered an invalid e-mail address. Please try again.
              </Alert>
            </Snackbar>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reset;
