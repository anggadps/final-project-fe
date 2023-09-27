import React, { useState, useEffect } from "react";
import "./cart.css";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PaymentModal from "../../components/PaymentModal";

const Cart = () => {
  const [course, setCourse] = useState([]);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const openPaymentModal = () => {
    setPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/Course`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox color="primary" />
                  Pilih Semua
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {course.map((item) => (
                <TableRow key={item.id}>
                  <TableCell
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "2rem",
                    }}
                  >
                    <Checkbox color="primary" />
                    <Card sx={{ display: "flex", minWidth: 275 }}>
                      <CardMedia sx={{ flex: "0 0 100px" }}>
                        <img
                          src="http://via.placeholder.com/600"
                          alt="Header"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </CardMedia>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {item.id_category}
                        </Typography>
                        <Typography variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="primary"
                          component="div"
                        >
                          Rp.{item.price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </TableCell>
                  <TableCell>
                    <DeleteForeverIcon
                      style={{ cursor: "pointer", color: "red", fontSize: 40 }}
                      onClick={() => console.log("delete")}
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "2rem",
                    padding: "2rem",
                    marginTop: "8rem",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <Typography variant="h5" component="div">
                      Total Price
                    </Typography>
                    <Typography variant="h5" component="div" color="primary">
                      Rp.
                      {course.reduce((total, item) => total + item.price, 0)}
                    </Typography>
                  </Box>
                  <Box>
                    <PaymentModal
                      handleClose={closePaymentModal}
                      course={course}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Payment Method Modal */}
      </div>
    </>
  );
};

export default Cart;
