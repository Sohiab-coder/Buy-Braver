import React, { useEffect } from "react";
import "./shop.css";
import ProductCart from "../ProductCart/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../Redux/Action/ProductAction";
import { useParams } from "react-router-dom";
import Loader from "../Layouts/Loader/Loader";

const ShopCategory = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);
  const params = useParams();

  useEffect(() => {
    dispatch(getAllProduct(params.category));
  }, [dispatch, params.category]);
  return (
    <section className="shop">
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="shop-container">
            {products &&
              products.map((product) => <ProductCart product={product} />)}
          </div>
        </div>
      )}
    </section>
  );
};
export default ShopCategory;
