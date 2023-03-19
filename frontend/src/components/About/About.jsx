import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="baner">
        <div className="inner-baner">
          <div className="inner-baner-text">
            <h2>About Us</h2>
            <p>
              We specialize selling products online including on 3rdparty plat
              forms such as amazon, eBay Walmart and more. we work hard to
              ensure that all the products we sell fully represents the brands
              and help improve their image. we do not want to be just another
              seller we want you to sell more…
            </p>
          </div>
        </div>
      </div>
      <div className="about-2">
        <div className="container">
          <div className="about-2-container">
            <div className="about-2-left">
              <h2>We Are Your Favourite Store.</h2>
              <p>
                We are the leading company in United States to sell more online
                products and achieving our goals to help brands and distributors
                to not only selling their products but also building their image
                in such a valued market place. We ensure the brands to work with
                3rd party is just another example to set on and help buyers to
                purchase branded products they loved. It is our policy to help
                buyers and our valued customer to create a healthy and suitable
                place to shop with. We feel glad to serve and help more maximize
                the ways to build and get regular online customers at our
                platform. Thank You!
              </p>
            </div>
            <div className="about-2-right">
              <div className="about-2-right-img">
                <img src="/images/about.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter">
        <div className="container">
          <div className="counter-container">
            <div>
              <h2>5,000+</h2>
              <p>Curated Products</p>
            </div>
            <div>
              <h2>5,000+</h2>
              <p>Curated Products</p>
            </div>
            <div>
              <h2>40+</h2>
              <p>Product Categories</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-last">
        <div className="container">
          <div className="about-last-container">
            <div className="left-about-last"></div>
            <div className="right-about-last">
              <h3>Registered by</h3>
              <p className="web-name">BuyBraver LLC®</p>
              <p className="reg-no">Reg No : 804504127</p>
              <h2>We Deal With Various Quality Products!</h2>
              <img src="/images/leave.png" width={70} height={70} alt="" />
              <div className="right-about-last-2">
                <ul>
                  <li>
                    <BsCheckCircle /> <p>Home & Kitchen</p>
                  </li>
                  <li>
                    <BsCheckCircle /> <p>Home & Garden</p>
                  </li>
                  <li>
                    <BsCheckCircle /> <p>Home & Kitchen</p>
                  </li>
                  <li>
                    <BsCheckCircle /> <p>Sports & Outdoor</p>
                  </li>
                  <li>
                    <BsCheckCircle /> <p>Clothing</p>
                  </li>
                  <li>
                    <BsCheckCircle /> <p>DIY Supplies</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
