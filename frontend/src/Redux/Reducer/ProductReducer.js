import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  {},
  {
    allProductRequest: (state) => {
      state.loading = true;
    },
    allProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    allProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    singleProductRequest: (state) => {
      state.loading = true;
    },
    singleProductSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    singleProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
