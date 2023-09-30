import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

export default function AddModal({ course, onClose }) {
  const [open, setOpen] = useState(false);
  const [editedCourse, setEditedCourse] = useState(course);

  const handleSave = () => {
    // Add logic to save the edited course data (e.g., make an API call)
    // After saving, close the modal and update the course list
    // You can use axios or any other method to send the edited data to the server
    // Example:
    // axios.put(`${process.env.REACT_APP_API_URL}/Course/${editedCourse.id}`, editedCourse)
    //   .then((response) => {
    //     // Handle successful save
    //     onClose();
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     console.error(error);
    //   });
  };

  //   handle for open and close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{ width: 175 }}>
        Add Course
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
              Add Course
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
            {/* Add form fields for editing course data */}
            <TextField
              label="Course Name"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setEditedCourse({ ...editedCourse, name: e.target.value })
              }
            />
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              onChange={(e) =>
                setEditedCourse({
                  ...editedCourse,
                  category_name: e.target.value,
                })
              }
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              onChange={(e) =>
                setEditedCourse({
                  ...editedCourse,
                  description: e.target.value,
                })
              }
            />
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              onChange={(e) =>
                setEditedCourse({
                  ...editedCourse,
                  price: parseFloat(e.target.value),
                })
              }
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
