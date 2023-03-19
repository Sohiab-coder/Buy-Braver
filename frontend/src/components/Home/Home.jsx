import React from "react";
import { AiFillShop, AiOutlineBarChart } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="home">
        <div className="home-heading">
          <h1>We deal in</h1>
        </div>
        <div className="home-para">
          <p>
            An exciting place for the whole family to shop. Favorite brands and
            hottest trends.
          </p>
        </div>
        <div className="home-btn">
          <button>
            <Link to={"/shop"}>VIEW OUR SHOP</Link>
          </button>
        </div>
      </div>
      <section id="home-2">
        <div className="home-2">
          <div className="container">
            <div className="home-2-boxes home-2-boxes-container">
              <div className="home-2-box-item">
                <div className="circle">
                  <div className="inner-circle">
                    <BsCurrencyDollar />
                  </div>
                </div>
                <div className="contact">
                  <h4>Follow MAP</h4>
                  <p>
                    Brand have the right to decide the price and we can ensure
                    that price is maintained.
                  </p>
                </div>
              </div>
              <div className="home-2-box-item">
                <div className="circle">
                  <div className="inner-circle">
                    <AiOutlineBarChart />
                  </div>
                </div>
                <div className="contact">
                  <h4>Maximizing Sales</h4>
                  <p>
                    We’ll increase or maximize your products sales by selling on
                    amazon, ebay etc.
                  </p>
                </div>
              </div>
              <div className="home-2-box-item">
                <div className="circle">
                  <div className="inner-circle">
                    <AiFillShop />
                  </div>
                </div>
                <div className="contact">
                  <h4>Building your brand</h4>
                  <p>
                    We’ll not only sell your products online. We’ll build your
                    brand image and increase your sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="home-3">
        <div className="home-3 container">
          <div className="home-3-heading">
            <h1>Explore Our Unique Products</h1>
          </div>
          <div className="home-3-collection">
            <span>
              <a href="#header">All Clothing Collection</a>
            </span>
            <span>
              <a href="#header">All Beauty Collection</a>
            </span>
          </div>
          <div className="home-3-2-page">
            <div className="home-3-box">
              <div className="home-3-item">
                <div className="home-3-item-left">
                  <h5>Beauty Products</h5>
                  <p>
                    Hurry up! This is short time offer on all Beauty Products.
                  </p>
                  <a href="#header">Explore beauty products</a>
                </div>
                <div className="home-3-item-right">
                  <h1>30% OFF</h1>
                </div>
              </div>
              <div className="home-3-item">
                <div className="home-3-item-left">
                  <h5>Pet Supplies</h5>
                  <p>Hurry up! This is short time offer on all Pet Supplies.</p>
                  <a href="#header">Explore pet supplies</a>
                </div>
                <div className="home-3-item-right">
                  <h1>30% OFF</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="home-4">
        <div className="home-4">
          <div className="home-category container">
            <div className="home-category-box">
              <Link to="/shop/Pet-Supplies">
                <div className="home-category-item">
                  <img src="/images/pet-supplies.jpg" alt="" />
                  <h4>Pet Supplies</h4>
                  <button>View Category</button>
                </div>
              </Link>
              <Link to="/shop/home-kitchen">
                <div className="home-category-item">
                  <img src="/images/must-have-kitchen-gadets.jpg" alt="" />
                  <h4>Home & Kitchen</h4>
                  <button>View Category</button>
                </div>
              </Link>
              <Link to="/shop/clothing">
                <div className="home-category-item">
                  <img
                    src="/images/beauty-gf86766d16_1920-1536x1025.jpg"
                    alt=""
                  />
                  <h4>Beauty</h4>
                  <button>View Category</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
