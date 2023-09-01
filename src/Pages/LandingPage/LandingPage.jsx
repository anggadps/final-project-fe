import React, { useEffect, useState } from "react";
import "./landingpage.css";
import Card from "../../components/MenuCard";
import CategoryCard from "../../components/CategoryCard";
import { Grid } from "@mui/material";
import axios from "axios";

function LandingPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://52.237.194.35:2022/api/product/GetCarsLimit")
      .then((response) => {
        setMenuItems(response.data);
      });

    axios
      .get("http://52.237.194.35:2022/api/product/GetTypeProduct")
      .then((response) => {
        setCategoryItems(response.data);
      });
  }, []);

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
              <Grid item xs={12} sm={6} md={4} key={item.id}>
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
          <Grid container spacing={2}>
            {categoryItems.map((item) => (
              <Grid item xs={6} sm={4} md={3} key={item.id}>
                <CategoryCard
                  name={item.type_name}
                  image={item.image}
                  id={item.id}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
