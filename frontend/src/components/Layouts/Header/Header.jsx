import React from "react";
import "./header.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header id="header">
      <div className="top-header">
        <div className="container top-header-conatiner">
          <div className="top-header-left">
            <div className="phone">
              <a href="tel:+1 512 333 2684">
                <BsFillTelephoneFill />
                +1 512 333 2684
              </a>
            </div>
            <div className="email">
              <Link to="mailto:admin@buybraver.com">
                <AiOutlineMail />
                admin@buybraver.com
              </Link>
            </div>
          </div>
          <div className="top-header-right">
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
      </div>
      <div className="bottom-header">
        <div className="container bottom-header-container">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="menu">
            <ul className="list-item">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <button>
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="cart">
            <Link to={"/cart"}>
              <Badge badgeContent={cartItems.length} color="primary">
                <MdOutlineShoppingCart />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
