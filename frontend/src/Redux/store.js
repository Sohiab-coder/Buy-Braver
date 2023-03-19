import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Reducer/ProductReducer";
import { cartReducer } from "./Reducer/CartReducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
