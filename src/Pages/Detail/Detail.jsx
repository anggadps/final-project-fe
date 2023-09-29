import "./detail.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Box, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Card from "../../components/MenuCard";
import useAuth from "../../hooks/useAuth";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataIdCategory, setDataIdCategory] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [data, setData] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataSchedule, setDataSchedule] = useState([]);
  const [selectedScheduleId, setSelectedScheduleId] = useState(null);
  const { payload } = useAuth();
  axios.defaults.headers.common["Authorization"] = `Bearer ${payload.token}`;

  const addCart = (e) => {
    axios
      .post(process.env.REACT_APP_API_URL + `/Cart/AddCart`, {
        id_user: payload.id,
        id_course: id,
        id_schedule: selectedScheduleId,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/cart");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/Course/GetById?id=${id}`)
      .then((response) => {
        setData(response.data);

        const idCategory = response.data.id_category;
        setDataIdCategory(idCategory);
      })
      .catch((error) => console.log(error));

    axios
      .get(process.env.REACT_APP_API_URL + `/Schedule/GetById?id=${id}`)
      .then((response) => {
        setDataSchedule(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(dataSchedule);

  useEffect(() => {
    if (dataIdCategory !== undefined) {
      axios
        .get(
          process.env.REACT_APP_API_URL +
            `/Category/GetById?id=${dataIdCategory}`
        )
        .then((response) => {
          setDataCategory(response.data);
        })
        .catch((error) => console.log(error));

      axios
        .get(
          process.env.REACT_APP_API_URL +
            `/Course/GetByIdCategory?id=${dataIdCategory}`
        )
        .then((response) => {
          setMenuItems(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [dataIdCategory]);

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          gridGap: "16px",
          padding: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingX: 5,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: "16px",
            width: "400px",
            height: "266px",
            // backgroundColor: 'black'
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="placeholder"
            src={`https://localhost:7091/images/${data.img}`}
          />
        </Box>

        <Box
          sx={{
            padding: "16px",
            width: "700px",
            height: "266px",
          }}
        >
          <Typography variant="p" color="text.secondary">
            {dataCategory.name}
          </Typography>

          <Typography variant="h6" component="div" fontWeight="bold">
            {data.name}
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
            className="text-cornflowerBlue"
            marginTop={3}
          >
            Rp. {data.price}
          </Typography>
          <FormControl fullWidth sx={{ width: "500px", margin: "10px 0px" }}>
            <InputLabel id="select-label">Select Schedule</InputLabel>
            <Select
              labelId="select-label"
              label="Select Schedule"
              value={selectedScheduleId}
              onChange={(e) => setSelectedScheduleId(e.target.value)}
            >
              {dataSchedule.map((list) => (
                <MenuItem value={list.id} key={list.id}>
                  {list.schedule_date}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box>
            <Button
              variant="outlined"
              sx={{ width: 175, py: 1, px: 6 }}
              color="secondary"
              href=""
              onClick={() => addCart()}
            >
              Add Cart
            </Button>
            <Button
              variant="contained"
              sx={{ ml: 4, width: 175, py: 1, px: 6 }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>

        <Box
          xs={8}
          sx={{
            padding: "16px",
            width: { md: 700, lg: 1150 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "justify",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Description
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "1.15rem",
            }}
          >
            {data.description}
          </Typography>
        </Box>
      </Grid>
      <section className="menu">
        <div>
          <h1>Another menu in this class</h1>
        </div>
        <Grid container spacing={2}>
          {menuItems.map((item) => {
            return (
              <Grid item xs={13} sm={6} md={4} key={item.id}>
                <Card
                  category={item.category}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </div>
  );
};

export default Detail;
