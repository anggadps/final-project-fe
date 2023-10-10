import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

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

const breadcrumbs = [
  <Typography key="1" color="text.inherit">
    Home
  </Typography>,
  <Typography key="2" color="text.inherit">
    Invoice
  </Typography>,
  <Typography key="3" color="text.primary">
    Detail Invoice
  </Typography>,
];

const DetailInvoice = () => {
  const { id } = useParams();
  const [invoiceDetail, setInvoiceDetail] = useState([]);
  const { payload } = useAuth();
  axios.defaults.headers.common["Authorization"] = `Bearer ${payload.token}`;

  const noInvoice = invoiceDetail.length > 0 ? invoiceDetail[0].no_invoice : "";
  const payDate = invoiceDetail.length > 0 ? invoiceDetail[0].pay_date : "";
  const totalPrice =
    invoiceDetail.length > 0 ? invoiceDetail[0].total_price : "";

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/Order/ViewInvoiceDetail?id=${id}`)
      .then((response) => {
        let no_urut = 1;
        const dataWithNoUrut = response.data.map((item) => ({
          ...item,
          no: no_urut++,
        }));
        setInvoiceDetail(dataWithNoUrut);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Box sx={{ pt: 4, px: 10, mb: 20 }}>
        <Breadcrumbs
          sx={{ mx: 0, px: 0 }}
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Typography
          variant="h6"
          sx={{ color: "#4F4F4F", fontWeight: "bold", mt: 2 }}
        >
          Details Invoice
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: { sm: "space-between", xs: "flex-start" },
            alignItems: { sm: "flex-end" },
            mt: 2,
          }}
        >
          <Box>
            <Typography>No. Invoice : {noInvoice} </Typography>
            <Typography>Date : {formatDate(payDate)} </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ color: "#4F4F4F", fontWeight: "bold", mt: { sm: 0, xs: 1 } }}
          >
            Total Price : Rp. {totalPrice}
          </Typography>
        </Box>
        <TableContainer sx={{ mt: 3 }} component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">No</StyledTableCell>
                <StyledTableCell align="center">Course Name</StyledTableCell>
                <StyledTableCell align="center">Type</StyledTableCell>
                <StyledTableCell align="center">Schedule</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoiceDetail.map((row) => (
                <StyledTableRow>
                  <StyledTableCell align="center">{row.no}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.course_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.category_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formatDate(row.schedule_date)}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.price}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default DetailInvoice;
