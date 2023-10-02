import React, { useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


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

    const [data, setData] = useState({
        Name: "",
        Logo: "",
        ImageFile: null,
    });

    const handleSave = () => {
        const formData = new FormData();
        formData.append("Name", data.Name);
        formData.append("ImageFile", data.ImageFile); // Append the image file

        // Send a POST request to your server to add the Category data
        axios
            .post(`${process.env.REACT_APP_API_URL}/Payment`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set the correct content type for FormData
                },
            })
            .then((response) => {
                // Handle successful save
                onAdd(response.data); // Notify the parent component that data has been added
                handleClose(); // Close the modal
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
            Is_active: "",
            Logo: "",
            ImageFile: null,
        }); // Reset form fields when closing the modal
    };

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" sx={{ width: 175 }}>
                Add Payment
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
                            Add Payment Method
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
                        {/* Add form fields for editing Category data */}

                        <TextField
                            label="Payment Method Name"
                            variant="outlined"
                            fullWidth
                            name="Name"
                            value={data.Name}
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