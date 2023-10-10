import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
};

const Invoice = () => {
    const [invoice, setInvoice] = useState([]);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + `/Order/ViewInvoiceAdmin`)
            .then((response) => {
                let no_urut = 1;
                const dataWithNoUrut = response.data.map((item) => ({
                    ...item,
                    no: no_urut++,
                }));
                setInvoice(dataWithNoUrut);
            })
            .catch((error) => console.log(error));
    }, []);



    return (
        <div style={{ minHeight: "100vh" }}>
            <Stack
                sx={{ borderBottom: 3, borderColor: "grey.300", mx: 10, pb: 5, pt: 0 }}
                direction="row"
            >
                <TableContainer component={Paper}>
                    <Typography variant="h4" sx={{ py: 2 }}>
                        All Data Invoices
                    </Typography>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>
                                    <Typography sx={{ fontWeight: "bold" }}>No </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography sx={{ fontWeight: "bold" }}>
                                        No Invoice
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography sx={{ fontWeight: "bold" }}>Date</Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography sx={{ fontWeight: "bold" }}>
                                        Total Course
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography sx={{ fontWeight: "bold" }}>
                                        Total Price
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography sx={{ fontWeight: "bold" }}>Action</Typography>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoice.map((row) => (
                                <StyledTableRow key={row.no}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.no}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.no_invoice}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {formatDate(row.pay_date)}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.total_course}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.total_price}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                            <Button
                                                href={`detail-invoice/${row.id}`}
                                                variant="contained"
                                                sx={{ width: 170 }}
                                            >
                                                Details
                                            </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </div>
    )
}


export default Invoice;