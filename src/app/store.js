import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import cartReducer from "features/cart/cartSlice";
import brandReducer from "features/brand/brandSlice";
import productReducer from "features/product/productSlice";
import cartTotalReducer from "features/cart/cartTotalSlice";
import categoryReducer from "features/category/categorySlice";
import selectedBrandReducer from "features/brand/selectedBrandSlice";
import selectedProductReducer from "features/product/selectedProductSlice";
import featuredProductReducer from "features/product/featuredProductSlice";
import selectedCategoryReducer from "features/category/selectedCategorySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    carts: cartReducer,
    cartTotal: cartTotalReducer,
    brands: brandReducer,
    products: productReducer,
    categories: categoryReducer,
    selectedBrand: selectedBrandReducer,
    selectedProduct: selectedProductReducer,
    selectedCategory: selectedCategoryReducer,
    featuredProducts: featuredProductReducer,
  },
});

export default store;
