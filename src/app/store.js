import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import userReducer from "features/user/userSlice";
import cartReducer from "features/cart/cartSlice";
import brandReducer from "features/brand/brandSlice";
import gradeReducer from "features/grade/gradeSlice";
import courierReducer from "features/courier/courierSlice";
import paymentReducer from "features/payment/paymentSlice";
import productReducer from "features/product/productSlice";
import cartTotalReducer from "features/cart/cartTotalSlice";
import categoryReducer from "features/category/categorySlice";
import checkoutReducer from "features/checkout/checkoutSlice";
import transactionReducer from "features/transaction/transactionSlice";
import selectedCartReducer from "features/cart/selectedCartSlice";
import selectedBrandReducer from "features/brand/selectedBrandSlice";
import selectedGradeReducer from "features/grade/selectedGradeSlice";
import selectedCourierReducer from "features/courier/selectedCourierSlice";
import selectedPaymentReducer from "features/payment/selectedPaymentSlice";
import selectedProductReducer from "features/product/selectedProductSlice";
import featuredProductReducer from "features/product/featuredProductSlice";
import selectedCategoryReducer from "features/category/selectedCategorySlice";
import selectedTransactionReducer from "features/transaction/selectedTransactionSlice";
import createTransactionReducer from "features/checkout/createTransactionSlice";
import transactionStatusReducer from "features/transactionStatus/transactionStatusSlice";
import selectedTransactionStatusReducer from "features/transactionStatus/selectedTransactionStatusSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    carts: cartReducer,
    cartTotal: cartTotalReducer,
    brands: brandReducer,
    grades: gradeReducer,
    couriers: courierReducer,
    payments: paymentReducer,
    products: productReducer,
    checkout: checkoutReducer,
    categories: categoryReducer,
    transactions: transactionReducer,
    selectedCart: selectedCartReducer,
    selectedBrand: selectedBrandReducer,
    selectedGrade: selectedGradeReducer,
    selectedCourier: selectedCourierReducer,
    selectedPayment: selectedPaymentReducer,
    selectedProduct: selectedProductReducer,
    selectedCategory: selectedCategoryReducer,
    selectedTransaction: selectedTransactionReducer,
    createTransaction: createTransactionReducer,
    featuredProducts: featuredProductReducer,
    transactionStatus: transactionStatusReducer,
    selectedTransactionStatus: selectedTransactionStatusReducer,
  },
});

export default store;
