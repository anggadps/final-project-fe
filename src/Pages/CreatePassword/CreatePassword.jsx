import React from "react";
import "./createpassword.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from "react-router-dom";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CreatePassword() {
  const navigate = useNavigate();

  const [alert, setAlert] = React.useState({
    open: false,
  });
  const { open } = alert;

  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });

  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // on submit form console.log(data)
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data.password.length)
    if (data.password.length >= 8) {
      navigate("/")
    } else {
      setAlert({ ...alert, open: true });
    }
    
  };
  return (
    <div>
      <div className="formDiv">
        <form action="" onSubmit={onSubmit}>
          <h1>Create Password</h1>
          <p></p>
          <div className="inputDiv">
            <Input
              labelInput="New Password"
              inputName="password"
              inputType="password"
              inputOnchange={inputOnchange}
            />
            <Input
              inputOnchange={inputOnchange}
              labelInput="Confirm New Password"
              inputName="confirmPassword"
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
              Cancel
            </Button>
            <Button variant="contained" type="submit" sx={{ py: 1, px: 6 }}>
              Login
            </Button>
            <Snackbar open={open} autoHideDuration={100}>
              <Alert
                severity="error"
                sx={{ width: '100%' }}>
                Password at least 8 digit.
              </Alert>
            </Snackbar>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePassword;
