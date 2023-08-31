import React from "react";
import "./index.css";
import phone from "./images/phone.png";
import mail from "./images/mail.png";
import instagram from "./images/instagram.png";
import tele from "./images/tele.png";
import youtube from "./images/youtube.png";
import { Outlet } from "react-router-dom";

function Footer() {
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
                <li>
                  <p>Asian</p>
                </li>
                <li>
                  <p>Cold Drink</p>
                </li>
                <li>
                  <p>Cookies</p>
                </li>
                <li>
                  <p>Desert</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Eastern</p>
                </li>
                <li>
                  <p>Hot Drink</p>
                </li>
                <li>
                  <p>Junkfood</p>
                </li>
                <li>
                  <p>Western</p>
                </li>
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
