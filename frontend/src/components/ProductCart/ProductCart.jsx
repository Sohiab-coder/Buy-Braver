import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductCart = ({ product }) => {
  const options = {
    size: "small",
    value: product && product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link to={`/product/${product._id}`}>
      <div className="shop-item">
        <div className="product-img">
          <img src={`http://localhost:5000/${product.image}`} alt="" />
        </div>
        <div className="product-contact">
          <p className="product-name">{product.name}</p>
          <h4 className="product-price">${product.price}</h4>
          <div className="rattings">
            <Rating {...options} />
            <p className="detailsBlock-2-span">
              ({product && product.numOfReviews})
            </p>
          </div>
          <p className="product-cat">{product.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
