import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./menuclass.css";
import { Grid } from "@mui/material";
import Card from "../../components/MenuCard";
import axios from "axios";
import asian from "./images/asian.png";

const MenuClass = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/Category/GetById?id=${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(process.env.REACT_APP_API_URL + `/Course/GetByIdCategory?id=${id}`)
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <section className="menu-class">
        <div className="header-bg">
          <img src={asian} alt="Header" />
        </div>
      </section>
      <section className="description">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </section>

      <section className="menu">
        <div>
          <h1>Another menu in this class</h1>
        </div>
        <Grid container spacing={2}>
          {menuItems.map((item) => {
            return (
              <Grid item xs={13} sm={6} md={4} key={item.id}>
                <Card
                  category={item.typeCar}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </div>
  );
};

export default MenuClass;
