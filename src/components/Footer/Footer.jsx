import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import phone from "./images/phone.png";
import mail from "./images/mail.png";
import instagram from "./images/instagram.png";
import tele from "./images/tele.png";
import youtube from "./images/youtube.png";
import { Outlet, Link } from "react-router-dom";

function Footer() {
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://52.237.194.35:2022/api/product/GetTypeProduct")
      .then((response) => {
        setCategoryItems(response.data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="about-us">
            <h1>About Us</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="product">
            <h1>Product</h1>
            <div className="product-point">
              <ul>
                {categoryItems.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <p>
                      <Link reloadDocument to={`/menuclass/${item.id}`}>
                        {item.type_name}
                      </Link>
                    </p>
                  </li>
                ))}
              </ul>
              <ul>
                {categoryItems.slice(4, 8).map((item) => (
                  <li key={item.id}>
                    <p>
                      <Link reloadDocument to={`/menuclass/${item.id}`}>
                        {item.type_name}
                      </Link>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="address">
            <div className="address-text">
              <h1>Address</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
              </p>
            </div>
            <div className="address-contact">
              <h1>Contact Us</h1>
              <div className="link">
                <a href="/">
                  <img src={phone} alt="" />
                </a>
                <a href="/">
                  <img src={instagram} alt="" />
                </a>
                <a href="/">
                  <img src={youtube} alt="" />
                </a>
                <a href="/">
                  <img src={tele} alt="" />
                </a>
                <a href="/">
                  <img src={mail} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Outlet />
    </div>
  );
}

export default Footer;
