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

// User Member/Setting Area
import SettingsPage from "pages/member/SettingsPage";
import OverviewPage from "pages/member/OverviewPage";
import TransactionsPage from "pages/member/TransactionsPage";
import TransactionDetailsPage from "pages/member/TransactionDetailsPage";

// Admin Area
import AdminOverviewPage from "pages/admin/OverviewPage";
import AdminBrandsPage from "pages/admin/BrandPage";
import AdminCreateBrandsPage from "pages/admin/BrandPage/create";
import AdminEditBrandsPage from "pages/admin/BrandPage/edit";
import AdminCategoriesPage from "pages/admin/CategoryPage";
import AdminCreateCategoryPage from "pages/admin/CategoryPage/create";
import AdminEditCategoryPage from "pages/admin/CategoryPage/edit";
import AdminGradesPage from "pages/admin/GradePage";
import AdminCreateGradePage from "pages/admin/GradePage/create";
import AdminEditGradePage from "pages/admin/GradePage/edit";
import AdminProductPage from "pages/admin/ProductPage";
import AdminCreateProductPage from "pages/admin/ProductPage/create";
import AdminEditProductPage from "pages/admin/ProductPage/edit";
import AdminUserPage from "pages/admin/UserPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* User Area */}
      <Route path="/" element={<App />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="detail" element={<DetailPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
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
      <Route path="admin/brands" element={<AdminBrandsPage />} />
      <Route path="admin/brands/create" element={<AdminCreateBrandsPage />} />
      <Route path="admin/brands/edit/:id" element={<AdminEditBrandsPage />} />
      <Route path="admin/categories" element={<AdminCategoriesPage />} />
      <Route
        path="admin/categories/create"
        element={<AdminCreateCategoryPage />}
      />
      <Route
        path="admin/categories/edit/:id"
        element={<AdminEditCategoryPage />}
      />
      <Route path="admin/grades" element={<AdminGradesPage />} />
      <Route path="admin/grades/create" element={<AdminCreateGradePage />} />
      <Route path="admin/grades/edit/:id" element={<AdminEditGradePage />} />
      <Route path="admin/products" element={<AdminProductPage />} />
      <Route
        path="admin/products/create"
        element={<AdminCreateProductPage />}
      />
      <Route
        path="admin/products/edit/:id"
        element={<AdminEditProductPage />}
      />
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
