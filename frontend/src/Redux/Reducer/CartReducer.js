import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    totalPrice: localStorage.getItem("price")
      ? JSON.parse(localStorage.getItem("price"))
      : 0,
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.product === item.product) {
            if (i.quantity > 1) {
              i.quantity = item.quantity;
            } else {
              i.quantity += 1;
            }
          }
        });
      } else {
        state.cartItems.push(item);
      }
    },

    increment: (state, action) => {
      const item = state.cartItems.find((i) => i.product === action.payload);
      if (item.quantity >= 1) {
        state.cartItems.forEach((i) => {
          if (i.product === item.product) {
            i.quantity += 1;
          }
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.product === action.payload);

      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.product === item.product) {
            i.quantity -= 1;
          }
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    delete: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.product !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    calculat: (state) => {
      let add = 0;
      state.cartItems.forEach((i) => {
        add += i.price * i.quantity;
      });
      state.totalPrice = add;
      localStorage.setItem("price", JSON.stringify(state.totalPrice));
    },

    shippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
  }
);
