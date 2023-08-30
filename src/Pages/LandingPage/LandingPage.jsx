import React from "react";
import "./landingpage.css";
import Card from "../../components/MenuCard";
import CategoryCard from "../../components/CategoryCard";
import { Grid } from "@mui/material";
import tomyum from "./images/tomyum.png";
import stroberi from "./images/stroberi.png";
import cookies from "./images/cookies.png";
import greenck from "./images/greenck.png";
import soto from "./images/soto.png";
import spageti from "./images/spageti.png";
import asian from "./images/asian.png";
import colddrink from "./images/colddrink.png";
import cookies2 from "./images/cookiescc.png";
import dessert from "./images/dessert.png";
import western from "./images/western.png";
import eastern from "./images/eastern.png";
import hotdrink from "./images/hotdrink.png";
import junkfood from "./images/junkfood.png";

function LandingPage() {
  const menuItems = [
    {
      category: "Asian",
      name: "Tom Yum Thailand",
      price: "IDR 450.000",
      image: tomyum,
    },
    {
      category: "Cold Drink",
      name: "Strawberry Float",
      price: "IDR 150.000",
      image: stroberi,
    },
    {
      category: "Cookies",
      name: "Chocholate Cookies",
      price: "IDR 200.000",
      image: cookies,
    },
    {
      category: "Dessert",
      name: "Green Tea Cheesecake",
      price: "IDR 400.000",
      image: greenck,
    },
    {
      category: "Asian",
      name: "Soto Banjar Limau Kult",
      price: "IDR 150.000",
      image: soto,
    },
    {
      category: "Western",
      name: "Italian Spaghetti Bolognare",
      price: "IDR 450.000",
      image: spageti,
    },
  ];

  const categoryItems = [
    {
      name: "Asian",
      image: asian,
    },
    {
      name: "Cold Drink",
      image: colddrink,
    },
    {
      name: "Cookies",
      image: cookies2,
    },
    {
      name: "Dessert",
      image: dessert,
    },

    {
      name: "Eastern",
      image: eastern,
    },
    {
      name: "Hot Drink",
      image: hotdrink,
    },
    {
      name: "Junkfood",
      image: junkfood,
    },
    {
      name: "Western",
      image: western,
    },
  ];

  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <h1>Be the next great chef</h1>
          <p>
            We are able to awaken your cooking skills to become a classy chef
            and ready to dive into the professional world
          </p>
        </div>
      </section>
      <section className="about">
        <div className="about-card">
          <div className="card">
            <h1>200+</h1>
            <p>Various cuisines available in professional class</p>
          </div>
          <div className="card">
            <h1>50+</h1>
            <p>
              A chef who is reliable and has his own characteristics in cooking
            </p>
          </div>
          <div className="card">
            <h1>30+</h1>
            <p>Cooperate with trusted and upscale restaurants</p>
          </div>
        </div>
      </section>
      <section className="class">
        <div>
          <h1>More professional class</h1>
        </div>
        <div className="class-card">
          <Grid container spacing={3}>
            {menuItems.map((item) => (
              <Grid item xs={4} key={item.name}>
                <Card
                  category={item.category}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
      <section className="benefit">
        <div className="benefit-text">
          <h1>Gets your best benefit</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam.
          </p>
        </div>
      </section>
      <section className="category">
        <div>
          <h1>More food type as you can choose</h1>
        </div>
        <div className="category-card">
          <Grid container spacing={4}>
            {categoryItems.map((item) => (
              <Grid item xs={3} key={item.name}>
                <CategoryCard name={item.name} image={item.image} />
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
