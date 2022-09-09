import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import cartReducer from "features/cart/cartSlice";
import productReducer from "features/product/productSlice";
import cartTotalReducer from "features/cart/cartTotalSlice";
import featuredProductReducer from "features/product/featuredProductSlice";
import selectedProductReducer from "features/product/selectedProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    carts: cartReducer,
    products: productReducer,
    cartTotal: cartTotalReducer,
    selectedProduct: selectedProductReducer,
    featuredProducts: featuredProductReducer,
  },
});

export default store;
