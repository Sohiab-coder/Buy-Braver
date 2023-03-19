import axios from "axios";

export const getAllProduct =
  (category = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "allProductRequest" });

      const { data } = await axios.get(
        `/api/v1/allproducts?category=${category}`
      );

      dispatch({ type: "allProductSuccess", payload: data.products });
    } catch (error) {
      dispatch({
        type: "allProductFail",
        payload: error.response.data.message,
      });
    }
  };

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "singleProductRequest" });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({ type: "singleProductSuccess", payload: data.product });
  } catch (error) {
    dispatch({
      type: "singleProductFail",
      payload: error.response.data.message,
    });
  }
};
