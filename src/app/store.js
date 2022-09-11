import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import cartReducer from "features/cart/cartSlice";
import brandReducer from "features/brand/brandSlice";
import gradeReducer from "features/grade/gradeSlice";
import courierReducer from "features/courier/courierSlice";
import paymentReducer from "features/payment/paymentSlice";
import productReducer from "features/product/productSlice";
import cartTotalReducer from "features/cart/cartTotalSlice";
import categoryReducer from "features/category/categorySlice";
import selectedBrandReducer from "features/brand/selectedBrandSlice";
import selectedGradeReducer from "features/grade/selectedGradeSlice";
import selectedCourierReducer from "features/courier/selectedCourierSlice";
import selectedPaymentReducer from "features/payment/selectedPaymentSlice";
import selectedProductReducer from "features/product/selectedProductSlice";
import featuredProductReducer from "features/product/featuredProductSlice";
import selectedCategoryReducer from "features/category/selectedCategorySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    carts: cartReducer,
    cartTotal: cartTotalReducer,
    brands: brandReducer,
    grades: gradeReducer,
    couriers: courierReducer,
    payments: paymentReducer,
    products: productReducer,
    categories: categoryReducer,
    selectedBrand: selectedBrandReducer,
    selectedGrade: selectedGradeReducer,
    selectedCourier: selectedCourierReducer,
    selectedPayment: selectedPaymentReducer,
    selectedProduct: selectedProductReducer,
    selectedCategory: selectedCategoryReducer,
    featuredProducts: featuredProductReducer,
  },
});

export default store;
