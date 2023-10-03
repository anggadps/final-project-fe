import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios"; // Import axios for making API requests
import { FormControl } from "@mui/material";

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

export default function AddModal({ onClose, onAdd }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const getCategory = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/Category/GetAllByAdmin`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  React.useEffect(() => {
    getCategory();
  }, []);
  const [data, setData] = useState({
    Name: "",
    Price: "",
    Description: "",
    Img: "",
    ImageFile: null,
    id_category: "",
  });

  //   get all category

  const handleSave = () => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Price", data.Price);
    formData.append("Description", data.Description);
    formData.append("id_category", data.id_category);
    formData.append("ImageFile", data.ImageFile); // Append the image file

    // Send a POST request to your server to add the course data
    axios
      .post(`${process.env.REACT_APP_API_URL}/Course`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type for FormData
        },
      })
      .then((response) => {
        // Handle successful save
        onAdd(response.data); // Notify the parent component that data has been added
        handleClose(); // Close the modal
        window.location.reload();
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  //   handle for open and close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({
      Name: "",
      Price: "",
      Description: "",
      Img: "",
      ImageFile: null,
      id_category: "",
    }); // Reset form fields when closing the modal
  };

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
              name="Name"
              value={data.Name}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.id_category || ""}
                label="Category"
                onChange={(e) => setData({ ...data, id_category: e.target.value })}
              >
                {category.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="Description"
              value={data.Description}
              onChange={handleChange}
            />
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              name="Price"
              value={data.Price}
              onChange={handleChange}
            />
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                setData({
                  ...data,
                  ImageFile: file,
                });
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
