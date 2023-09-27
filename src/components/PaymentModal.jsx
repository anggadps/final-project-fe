import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = React.useState(false); // State for the payment modal

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              Gopay
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              OVO
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Dana
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Mandiri
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              BCA
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
              BNI
            </Typography>
          </Box>

          {/* Buttons Container */}
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              variant="outlined"
              sx={{ width: 155 }}
              color="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button variant="contained" sx={{ width: 155 }}>
              Pay Now
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Payment Method Modal */}
    </div>
  );
}
