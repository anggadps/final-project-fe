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
    const [userLevel, setUserLevel] = useState([]);


    const getUserLevel = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/UserLevel`)
            .then((response) => {
                setUserLevel(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    React.useEffect(() => {
        getUserLevel();
    }, []);

    const [data, setData] = useState({

        Name: "",
        id_user_level: "",
        Email: "",
        Password: "",
    });

    //   get all category

    const handleSave = () => {
        const formData = new FormData();
        formData.append("Name", data.Name);
        formData.append("id_user_level", data.id_user_level);
        formData.append("Email", data.Email);
        formData.append("Password", data.Password);

        // Send a POST request to your server to add the course data
        axios
            .post(`${process.env.REACT_APP_API_URL}/User/CreateUserByAdmin`, formData, {
                headers: {
                    "Content-Type": "application/json", // Set the correct content type for FormData
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
            id_user_level: "",
            Email: "",
            Password: "",
        }); // Reset form fields when closing the modal
    };

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" sx={{ width: 175 }}>
                Add New User
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
                            Add New User
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
                            label="User Name"
                            variant="outlined"
                            fullWidth
                            name="Name"
                            value={data.Name}
                            onChange={handleChange}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">User Level</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.id_user_level}
                                label="User Level"
                                onChange={(e) => setData({ ...data, id_user_level: e.target.value })}
                            >
                                {userLevel.map((item) => {
                                    return (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.name}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="Email"
                            value={data.Email}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            name="Password"
                            type="password"
                            value={data.Password}
                            onChange={handleChange}
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