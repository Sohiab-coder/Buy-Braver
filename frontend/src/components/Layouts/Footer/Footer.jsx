import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="left-footer">
        <img src="/images/logo-2.png" alt="" />
        <p>
          We specialize selling products online including on 3rd party plat
          forms such as amazon, eBay Walmart and more.
        </p>
        <h3>Registered by</h3>
        <h4>BuyBraver LLC®</h4>
        <div className="footer-links">
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <AiFillTwitterCircle />
          </a>
          <a href="/">
            <AiFillInstagram />
          </a>
        </div>
      </div>
      <div className="center-footer">
        <h2 className="footer-links-heading">Quick Links</h2>
        <ul className="footer-list-item">
          <li>
            <button onClick={() => navigate("/")}>
              <a href="#header">Home</a>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/shop")}>
              <a href="#header">Shop</a>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/about")}>
              <a href="#header">About Us</a>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/contact")}>
              <a href="#header">Contact Us</a>
            </button>
          </li>
        </ul>
      </div>
      <div className="right-footer">
        <h2 className="footer-links-heading">Categories</h2>
        <ul className="footer-list-item">
          <li>
            <button onClick={() => navigate("/shop/Pet-Supplies")}>
              <a href="#header">Pet Supplies</a>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/shop/Home-Garden")}>
              <a href="#header">Home & Garden</a>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/shop/home-kitchen")}>
              <a href="#header">Home & Kitchen</a>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/shop/sports-outdoor")}>
              <a href="#header">Sports & Outdoor</a>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/shop/clothing")}>
              <a href="#header">Clothing</a>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/shop/diy-supplies")}>
              <Link to="#header">DIY Supplies</Link>
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
