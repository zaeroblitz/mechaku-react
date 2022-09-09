import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import "./index.css";

// User Area
import Homepage from "pages/user/Homepage";
import ShopPage from "pages/user/ShopPage";
import CartPage from "pages/user/CartPage";
import DetailPage from "pages/user/DetailPage";
import SignInPage from "pages/user/SignInPage";
import SignUpPage from "pages/user/SignUpPage";
import CheckoutPage from "pages/user/CheckoutPage";
import SignUpPhotoPage from "pages/user/SignUpPhotoPage";
import SuccessCheckoutPage from "pages/user/SuccessCheckoutPage";

// User Member Area
import MemberPage from "pages/member/MemberPage";
import SettingsPage from "pages/member/SettingsPage";
import OverviewPage from "pages/member/OverviewPage";
import TransactionsPage from "pages/member/TransactionsPage";
import TransactionDetailsPage from "pages/member/TransactionDetailsPage";

// Admin Area
import AdminPage from "pages/admin/AdminPage";
import AdminOverviewPage from "pages/admin/OverviewPage";

// Admin - Brands
import AdminBrandsPage from "pages/admin/BrandPage";
import AdminEditBrandsPage from "pages/admin/BrandPage/edit";
import AdminCreateBrandsPage from "pages/admin/BrandPage/create";

// Admin - Categories
import AdminCategoriesPage from "pages/admin/CategoryPage";
import AdminEditCategoryPage from "pages/admin/CategoryPage/edit";
import AdminCreateCategoryPage from "pages/admin/CategoryPage/create";

// Admin - Grades
import AdminGradesPage from "pages/admin/GradePage";
import AdminEditGradePage from "pages/admin/GradePage/edit";
import AdminCreateGradePage from "pages/admin/GradePage/create";

// Admin - Couriers
import AdminCouriersPage from "pages/admin/CourierPage";
import AdminCreateCourierPage from "pages/admin/CourierPage/create";
import AdminEditCourierPage from "pages/admin/CourierPage/edit";

// Admin -Payments
import AdminPaymentPage from "pages/admin/PaymentPage";
import AdminCreatePaymentPage from "pages/admin/PaymentPage/create";
import AdminEditPaymentPage from "pages/admin/PaymentPage/edit";

// Admin - Transaction Status
import AdminTransactionStatusPage from "pages/admin/TransactionStatusPage";
import AdminEditTransactionStatusPage from "pages/admin/TransactionStatusPage/edit";
import AdminCreateTransactionStatusPage from "pages/admin/TransactionStatusPage/create";

// Admin - Products
import AdminProductPage from "pages/admin/ProductPage";
import AdminEditProductPage from "pages/admin/ProductPage/edit";
import AdminCreateProductPage from "pages/admin/ProductPage/create";

// Admin - Users
import AdminUserPage from "pages/admin/UserPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* User Area */}
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-up-photo" element={<SignUpPhotoPage />} />
        <Route path="success" element={<SuccessCheckoutPage />} />

        {/* User - Member Area */}
        <Route path="member" element={<MemberPage />}>
          <Route index element={<OverviewPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route
            path="transactions/detail"
            element={<TransactionDetailsPage />}
          />
        </Route>

        {/* Admin Area */}
        <Route path="admin" element={<AdminPage />}>
          <Route index element={<AdminOverviewPage />} />

          {/* Brands   */}
          <Route path="brands" element={<AdminBrandsPage />} />
          <Route path="brands/create" element={<AdminCreateBrandsPage />} />
          <Route path="brands/edit/:id" element={<AdminEditBrandsPage />} />

          {/* Categories */}
          <Route path="categories" element={<AdminCategoriesPage />} />
          <Route
            path="categories/create"
            element={<AdminCreateCategoryPage />}
          />
          <Route
            path="categories/edit/:id"
            element={<AdminEditCategoryPage />}
          />

          {/* Grades */}
          <Route path="grades" element={<AdminGradesPage />} />
          <Route path="grades/create" element={<AdminCreateGradePage />} />
          <Route path="grades/edit/:id" element={<AdminEditGradePage />} />

          {/* Courier */}
          <Route path="couriers" element={<AdminCouriersPage />} />
          <Route path="couriers/create" element={<AdminCreateCourierPage />} />
          <Route path="couriers/edit/:id" element={<AdminEditCourierPage />} />

          {/* Payments */}
          <Route path="payments" element={<AdminPaymentPage />} />
          <Route path="payments/create" element={<AdminCreatePaymentPage />} />
          <Route path="payments/edit/:id" element={<AdminEditPaymentPage />} />

          {/* Products */}
          <Route path="products" element={<AdminProductPage />} />
          <Route path="products/create" element={<AdminCreateProductPage />} />
          <Route path="products/edit/:id" element={<AdminEditProductPage />} />

          {/* Users */}
          <Route path="users" element={<AdminUserPage />} />

          {/* Transaction Status */}
          <Route
            path="transaction-status"
            element={<AdminTransactionStatusPage />}
          />
          <Route
            path="transaction-status/create"
            element={<AdminCreateTransactionStatusPage />}
          />
          <Route
            path="transaction-status/edit/:id"
            element={<AdminEditTransactionStatusPage />}
          />
        </Route>

        {/* 404  */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
