import React, { useEffect } from "react";
import "./shop.css";
import ProductCart from "../ProductCart/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../Redux/Action/ProductAction";
import Loader from "../Layouts/Loader/Loader";

const Shop = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <section className="shop">
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="shop-container">
            {products &&
              products.map((product) => <ProductCart key={product._id} product={product} />)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Shop;
