import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { toast } from "react-hot-toast";
import Loader from "../Layouts/Loader/Loader";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import "./product.css";
import { getSingleProduct } from "../../Redux/Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { itemAddToCart } from "../../Redux/Action/CartAction";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  const params = useParams();

  const options = {
    size: "large",
    value: product && product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const increaseQuantity = () => {
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const addToCartHandler = async () => {
    await dispatch(itemAddToCart(params.id, quantity));
    dispatch({ type: "calculat" });
    toast.success("Add To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = async () => {
    // await dispatch(ProductReview(params.id, rating, comment));
    // setOpen(false);
    // dispatch(getSingleProduct(params.id));
    // toast.success("Review Submitted Successfully");
  };

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
    dispatch({ type: "calculat" });
  }, [dispatch, params.id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="container">
            <div className="product-details">
              <div className="product-details-left">
                <img
                  src={`http://localhost:5000/${product && product.image}`}
                  alt=""
                />
              </div>
              <div className="product-details-right">
                <h3>{product && product.name}</h3>
                <div className="product-details-rattings">
                  <Rating {...options} />
                  <p className="product-details-span">
                    ({product && product.numOfReviews} Reviews)
                  </p>
                </div>
                <h2>${product && product.price}</h2>
                <div className="qty-btns">
                  <button onClick={decreaseQuantity}>-</button>
                  <input readOnly type="number" value={quantity} />
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <div className="add-to-cart-btn">
                  <button onClick={addToCartHandler}>Add To Cart</button>
                  <button onClick={submitReviewToggle}>Add Reviews</button>
                </div>
              </div>
            </div>
            <Dialog
              aria-labelledby="simple-dialog-title"
              open={open}
              onClose={submitReviewToggle}
            >
              <DialogTitle>Submit Review</DialogTitle>
              <DialogContent className="submitDialog">
                <Rating
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  size="large"
                />

                <textarea
                  className="submitDialogTextArea"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </DialogContent>
              <DialogActions>
                <Button onClick={submitReviewToggle} color="secondary">
                  Cancel
                </Button>
                <Button onClick={reviewSubmitHandler} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </section>
        </>
      )}
    </>
  );
};

export default SingleProduct;
