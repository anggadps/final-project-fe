import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./menuclass.css";
import { Grid } from "@mui/material";
import Card from "../../components/MenuCard";
import axios from "axios";
import asian from "./images/asian.png";
import Navbar from "../../components/Navbar/Navbar-user";

const MenuClass = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [data, setData] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://52.237.194.35:2022/api/product/GetCarByID?IdType=${id}`)
      .then((response) => {
        setData(response.data);
      });

    axios
      .get("http://52.237.194.35:2022/api/product/GetCarsLimit")
      .then((response) => {
        setMenuItems(response.data);
      });

    axios
      .get("http://52.237.194.35:2022/api/product/GetCarsLimit")
      .then((response) => {
        setMenuItems(response.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <section className="menu-class">
        <div className="header-bg">
          <img src={asia} alt="Header" />
        </div>
      </section>
      <section className="description">
        <h1>{data.type_name}</h1>
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
