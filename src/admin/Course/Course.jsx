import React, { useEffect, useState } from "react";
import axios from "axios";
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
import Box from "@mui/material/Box";
import ActionModal from "../../components/ActionModal";
import ActionDelete from "../../components/ActionDelete";
import AddModal from "../../components/AddModal";

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

function Course() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/Course`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => console.log(error));

    fetchCourseList();
  }, []);

  const fetchCourseList = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/Course")
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course list:", error);
      });
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
            All Courses
          </Typography>
          <AddModal />
        </Box>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <Typography sx={{ fontWeight: "bold" }}>Image</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography sx={{ fontWeight: "bold" }}>Name</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography sx={{ fontWeight: "bold" }}>Category</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography sx={{ fontWeight: "bold" }}>Description</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography sx={{ fontWeight: "bold" }}>Price</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography sx={{ fontWeight: "bold" }}>Action</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {course.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">
                  <Box
                    component="img"
                    sx={{ height: 60, width: 60 }}
                    src={`https://localhost:7091/images/${row.img}`}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.category_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="center">{row.price}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ display: "flex", gap: "20px", mx: "auto" }}
                >
                  <ActionModal course={course} />
                  <ActionDelete id={row.id} onCourseDeleted={fetchCourseList} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Course;
