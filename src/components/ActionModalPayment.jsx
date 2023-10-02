import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";

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

export default function EditPaymentModal({ Payment, onClose }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    Name: "",
    Is_active: "",
    ImageFile: null,
  });

  useEffect(() => {
    setData({
      Name: Payment.name,
      Is_active: Payment.is_active,
    });
  }, [Payment]);

  const handleSave = () => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/Payment?id=${Payment.id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        // Handle successful save
        handleClose();
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ width: 155 }}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Payment Method
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
            <TextField
              label="Payment Method Name"
              variant="outlined"
              fullWidth
              value={data.Name}
              onChange={(e) => setData({ ...data, Name: e.target.value })}
            />

            <FormControl variant="outlined" fullWidth>
              <InputLabel id="is-active-label">Status</InputLabel>
              <Select
                labelId="is-active-label"
                id="is-active-select"
                value={data.Is_active}
                onChange={(e) => setData({ ...data, Is_active: e.target.value })}
                label="Description"
              >
                <MenuItem value={true}>Active</MenuItem>
                <MenuItem value={false}>Inactive</MenuItem>
              </Select>
            </FormControl>

            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                setData({ ...data, ImageFile: file });
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
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
              onClick={handleSave}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
