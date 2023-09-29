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
import useAuth from "../../hooks/useAuth";

const Cart = () => {
  const [course, setCourse] = useState([]);
  const [isCheckCart, setIsCheckCart] = useState([]);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const { payload } = useAuth();
  axios.defaults.headers.common["Authorization"] = `Bearer ${payload.token}`;

  const openPaymentModal = () => {
    setPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setPaymentModalOpen(false);
  };

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

  const deleteCart = () => {
    axios
      .delete(process.env.REACT_APP_API_URL + `/Cart`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log(isCheckCart);
  }, [isCheckCart]);

  const checkedCart = (row) => {
    console.log(row);
    const checkIsExist = isCheckCart.find((value) => value.id === row.id);
    if (checkIsExist) {
      const newData = isCheckCart.filter((value) => value.id !== row.id);
      setIsCheckCart(newData);
    } else {
      const data = {
        id: row.id,
        id_schedule: row.id_schedule,
        id_course: row.id_course,
        price: row.price,
      };
      setIsCheckCart([...isCheckCart, data]);
    }
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/Cart/GetCartByIdUser`)
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
                    <Checkbox
                      onChange={(e) => checkedCart(item)}
                      color="primary"
                    />
                    <Card sx={{ display: "flex", minWidth: 275 }}>
                      <CardMedia sx={{ flex: "0 0 100px" }}>
                        <img
                          src={`https://localhost:7091/images/${item.img}`}
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
                          {item.category_name}
                        </Typography>
                        <Typography variant="h5" component="div">
                          {item.course_name}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="primary"
                          component="div"
                        >
                          Rp.{item.price}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                        >
                          {formatDate(item.schedule_date)}
                        </Typography>
                      </CardContent>
                    </Card>
                  </TableCell>
                  <TableCell>
                    <DeleteForeverIcon
                      style={{ cursor: "pointer", color: "red", fontSize: 40 }}
                      onClick={() => deleteCart()}
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
