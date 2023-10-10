import { useEffect, useState } from "react"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddModalUser from "../../components/AddModalUser";
import ActionModalUser from "../../components/ActionModalUser";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
        backgroundColor: theme.palette.grey[300],
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));


const User = () => {
    const [User, setUser] = useState([]);


    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + `/User`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const addUser = (newUser) => {
        setUser([...User, newUser]);
      };

    const getStatusStyle = (isActive) => {
        if (isActive) {
            return { color: "green" }; // Active 
        } else {
            return { color: "red" }; // Inactive 
        }
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h4" sx={{ py: 2 }}>
                        All Data Users
                    </Typography>
                    <AddModalUser onAdd={addUser} />
                </Box>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">
                                <Typography sx={{ fontWeight: "bold" }}>User Name</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Typography sx={{ fontWeight: "bold" }}>User Level</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Typography sx={{ fontWeight: "bold" }}>Status</Typography>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Typography sx={{ fontWeight: "bold" }}>Action</Typography>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {User.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell align="center">{row.name}</StyledTableCell>
                                <StyledTableCell align="center">{row.user_level}</StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                

                                <StyledTableCell align="center">
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            ...getStatusStyle(row.is_active),
                                        }}
                                    >
                                        {row.is_active ? "Active" : "Inactive"}
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <ActionModalUser user={row} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default User;