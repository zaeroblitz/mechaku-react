import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

// User Area
import ShopPage from "pages/user/ShopPage";
import CartPage from "pages/user/CartPage";
import DetailPage from "pages/user/DetailPage";
import SignInPage from "pages/user/SignInPage";
import SignUpPage from "pages/user/SignUpPage";
import SuccessPage from "pages/user/SuccessPage";
import SignUpPhotoPage from "pages/user/SignUpPhotoPage";

// User Member/Setting Area
import SettingsPage from "pages/member/SettingsPage";
import OverviewPage from "pages/member/OverviewPage";
import TransactionsPage from "pages/member/TransactionsPage";
import TransactionDetailsPage from "pages/member/TransactionDetailsPage";

// Admin Area
import AdminOverviewPage from "pages/admin/OverviewPage";

// Brands
import AdminBrandsPage from "pages/admin/BrandPage";
import AdminCreateBrandsPage from "pages/admin/BrandPage/create";
import AdminEditBrandsPage from "pages/admin/BrandPage/edit";

// Categories
import AdminCategoriesPage from "pages/admin/CategoryPage";
import AdminCreateCategoryPage from "pages/admin/CategoryPage/create";
import AdminEditCategoryPage from "pages/admin/CategoryPage/edit";

// Grades
import AdminGradesPage from "pages/admin/GradePage";
import AdminCreateGradePage from "pages/admin/GradePage/create";
import AdminEditGradePage from "pages/admin/GradePage/edit";

// Couriers
import AdminCouriersPage from "pages/admin/CourierPage";
import AdminCreateCourierPage from "pages/admin/CourierPage/create";
import AdminEditCourierPage from "pages/admin/CourierPage/edit";

// Payments
import AdminPaymentPage from "pages/admin/PaymentPage";
import AdminCreatePaymentrPage from "pages/admin/PaymentPage/create";
import AdminEditPaymentPage from "pages/admin/PaymentPage/edit";

// Products
import AdminProductPage from "pages/admin/ProductPage";
import AdminCreateProductPage from "pages/admin/ProductPage/create";
import AdminEditProductPage from "pages/admin/ProductPage/edit";

// Users
import AdminUserPage from "pages/admin/UserPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* User Area */}
      <Route path="/" element={<App />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="detail/:id" element={<DetailPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="sign-up-photo" element={<SignUpPhotoPage />} />
      <Route path="success" element={<SuccessPage />} />

      {/* User - Member Area */}
      <Route path="member" element={<OverviewPage />} />
      <Route path="member/settings" element={<SettingsPage />} />
      <Route path="member/transactions" element={<TransactionsPage />} />
      <Route
        path="member/transactions/detail"
        element={<TransactionDetailsPage />}
      />

      {/* Admin Area */}
      <Route path="admin" element={<AdminOverviewPage />} />

      {/* Brands */}
      <Route path="admin/brands" element={<AdminBrandsPage />} />
      <Route path="admin/brands/create" element={<AdminCreateBrandsPage />} />
      <Route path="admin/brands/edit/:id" element={<AdminEditBrandsPage />} />

      {/* Categories */}
      <Route path="admin/categories" element={<AdminCategoriesPage />} />
      <Route
        path="admin/categories/create"
        element={<AdminCreateCategoryPage />}
      />
      <Route
        path="admin/categories/edit/:id"
        element={<AdminEditCategoryPage />}
      />

      {/* Grades */}
      <Route path="admin/grades" element={<AdminGradesPage />} />
      <Route path="admin/grades/create" element={<AdminCreateGradePage />} />
      <Route path="admin/grades/edit/:id" element={<AdminEditGradePage />} />

      {/* Courier */}
      <Route path="admin/couriers" element={<AdminCouriersPage />} />
      <Route
        path="admin/couriers/create"
        element={<AdminCreateCourierPage />}
      />
      <Route
        path="admin/couriers/edit/:id"
        element={<AdminEditCourierPage />}
      />

      {/* Courier */}
      <Route path="admin/payments" element={<AdminPaymentPage />} />
      <Route
        path="admin/payments/create"
        element={<AdminCreatePaymentrPage />}
      />
      <Route
        path="admin/payments/edit/:id"
        element={<AdminEditPaymentPage />}
      />

      {/* Products */}
      <Route path="admin/products" element={<AdminProductPage />} />
      <Route
        path="admin/products/create"
        element={<AdminCreateProductPage />}
      />
      <Route
        path="admin/products/edit/:id"
        element={<AdminEditProductPage />}
      />

      {/* Users */}
      <Route path="admin/users" element={<AdminUserPage />} />

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
);
