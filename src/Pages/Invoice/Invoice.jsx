import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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

// create dummy data for invoice
function createData(no, no_invoice, date, total_course, total_price) {
  return { no, no_invoice, date, total_course, total_price };
}

const rows = [
  createData(1, "INV-0001", "2021-10-10", 2, 200000),
  createData(2, "INV-0002", "2021-10-10", 2, 200000),
  createData(3, "INV-0003", "2021-10-10", 2, 200000),
  createData(4, "INV-0004", "2021-10-10", 2, 200000),
  createData(5, "INV-0005", "2021-10-10", 2, 200000),
  createData(6, "INV-0006", "2021-10-10", 2, 200000),
];

const breadcrumbs = [
  <Typography key="1" color="text.inherit">
    Home
  </Typography>,
  <Typography key="2" color="text.primary">
    Invoice
  </Typography>,
];

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
  return (
    <div>
      <Breadcrumbs
        sx={{ my: 0, ml: 5, py: 0 }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Stack
        sx={{ borderBottom: 3, borderColor: "grey.300", mx: 10, pb: 5, pt: 0 }}
        direction="row"
      >
        <TableContainer component={Paper}>
          <Typography variant="h4" sx={{ py: 2 }}>
            Menu Invoice
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
              {rows.map((row) => (
                <StyledTableRow key={row.no}>
                  <StyledTableCell component="th" scope="row">
                    {row.no}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.no_invoice}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formatDate(row.date)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.total_course}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.total_price}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      href="/detail"
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
  );
};

export default Invoice;
