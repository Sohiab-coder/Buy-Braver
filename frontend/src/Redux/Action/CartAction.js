import axios from "axios";

export const itemAddToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);
  dispatch({
    type: "addToCart",
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.image,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const shippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: "shippingInfo",
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
