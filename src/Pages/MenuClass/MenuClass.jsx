import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./menuclass.css";
import { Grid } from "@mui/material";
import Card from "../../components/MenuCard";
import axios from "axios";
import sushi from "./images/sushi.png";
import jajangmeyon from "./images/jajangmeyon.png";
import pempek from "./images/pempek.png";
import ramen from "./images/ramen.png";
import rendang from "./images/rendang.png";
import sate from "./images/sate.png";
import soto from "./images/soto.png";
import takoyaki from "./images/takoyaki.png";
import tomyum from "./images/tomyum.png";
import asian from "./images/asian.png";

const MenuClass = () => {
  const menuItems = [
    {
      id: 1,
      category: "Asian",
      name: "Sushi Salmon with Mentai",
      price: "IDR 200.000",
      image: sushi,
    },
    {
      id: 2,
      category: "Asian",
      name: "Ichiraku Ramen",
      price: "IDR 300.000",
      image: ramen,
    },
    {
      id: 3,
      category: "Asian",
      name: "Rendang Sapi",
      price: "IDR 200.000",
      image: rendang,
    },
    {
      id: 4,
      category: "Asian",
      name: "[Complit Package] Pempek Palembang",
      price: "IDR 600.000",
      image: pempek,
    },
    {
      id: 5,
      category: "Asian",
      name: "Soto Banjar Limau Kuit",
      price: "IDR 150.000",
      image: soto,
    },
    {
      id: 6,
      category: "Asian",
      name: "Tom Yum Thailand",
      price: "IDR 450.000",
      image: tomyum,
    },
    {
      id: 7,
      category: "Asian",
      name: "Takoyaki Octopus",
      price: "IDR 150.000",
      image: takoyaki,
    },
    {
      id: 8,
      category: "Asian",
      name: "Jajangmeyon",
      price: "IDR 250.000",
      image: jajangmeyon,
    },
    {
      id: 9,
      category: "Asian",
      name: "Sate Padang",
      price: "IDR 300.000",
      image: sate,
    },
  ];

  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://52.237.194.35:2022/api/product/GetCarByID?IdType=${id}`)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <section className="menu-class">
        <div className="header-bg">
          <img src={asian} alt="Header" />
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
