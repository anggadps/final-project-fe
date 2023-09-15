import React from "react";
import "./reset.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Navbar from "../../components/Navbar/Navbar-guest";
import axios from "axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" severity="success" {...props} />;
});

function Reset() {

  const [btnDisable, setBtnDisable] = useState(false);

  

  const [alert, setAlert] = React.useState({
    open: false,
    severity: "",
    message: ""
  });

  const [data, setData] = useState({
    email: "",
  });


  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (data.email.includes("@")) {
      setBtnDisable(true)
      axios
        .post(`https://localhost:7091/api/User/ForgetPassword?email=${data.email}`)
        .then((response) => {
          setAlert({ ...alert, open: true, severity: "success", message: "Success, Please check your email for confirmation." })
          setBtnDisable(false)
          setData({email: ""});
        })
        .catch(error => {
          setBtnDisable(false)
        })
    } else {
      setAlert({ ...alert, open: true, severity: "error", message: "You have entered an invalid e-mail address. Please try again."});
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
              inputOnchange={inputOnchange}
            />
          </div>
          <div className="buttonDiv">
            <Button variant="outlined" color="secondary" type="reset">
              Cancel
            </Button>
            <Button variant="contained" type="submit" disabled={btnDisable}>
              Confirm
            </Button>
            <Snackbar open={alert.open} autoHideDuration={100}>
              <Alert severity={alert.severity} sx={{ width: "100%" }}>
                {alert.message}
              </Alert>
            </Snackbar>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reset;
