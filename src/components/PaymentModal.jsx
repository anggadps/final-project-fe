import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 374,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = React.useState(false);
  const [payment, setPayment] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const { payload } = useAuth();
  axios.defaults.headers.common["Authorization"] = `Bearer ${payload.token}`;

  // console.log(props.isCheckCart);

  const addOrder = () => {
    const cart = props.isCheckCart;

    const orderDetails = cart.map((cartItem) => ({
      id_schedule: cartItem.id_schedule,
      id_course: cartItem.id_course,
      price: cartItem.price,
      total_course: cartItem.total_course,
    }));

    const createOrder = orderDetails;

    axios
      .post(process.env.REACT_APP_API_URL + `/Order`, createOrder)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/Payment`)
      .then((response) => {
        setPayment(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePaymentModalOpen = () => setPaymentModalOpen(true); // Open the payment modal
  const handlePaymentModalClose = () => setPaymentModalOpen(false); // Close the payment modal

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ width: 175 }}>
        Pay Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Select Payment Method
            </Typography>
          </Box>

          <Box
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <List sx={{ px: 1 }}>
              {payment.map((item, index) => (
                <ListItem sx={{ py: 0 }} disableGutters key={index}>
                  <ListItemButton>
                    <Box
                      component="img"
                      sx={{ height: 60, width: 60 }}
                      src={`https://localhost:7091/images/${item.logo}`}
                    />
                    <ListItemText sx={{ px: 2 }} primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              variant="outlined"
              sx={{ width: 155 }}
              color="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ width: 155 }}
              onClick={() => addOrder()}
            >
              Pay Now
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Payment Method Modal */}
    </div>
  );
}
