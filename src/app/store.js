import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import cartReducer from "features/cart/cartSlice";
import brandReducer from "features/brand/brandSlice";
import productReducer from "features/product/productSlice";
import cartTotalReducer from "features/cart/cartTotalSlice";
import selectedBrandReducer from "features/brand/selectedBrandSlice";
import featuredProductReducer from "features/product/featuredProductSlice";
import selectedProductReducer from "features/product/selectedProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    carts: cartReducer,
    brands: brandReducer,
    products: productReducer,
    cartTotal: cartTotalReducer,
    selectedBrand: selectedBrandReducer,
    selectedProduct: selectedProductReducer,
    featuredProducts: featuredProductReducer,
  },
});

export default store;
