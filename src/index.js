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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="detail" element={<DetailPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="success" element={<SuccessPage />} />

      <Route path="member" element={<OverviewPage />} />
      <Route path="member/settings" element={<SettingsPage />} />
      <Route path="member/transactions" element={<TransactionsPage />} />
      <Route
        path="member/transactions/detail"
        element={<TransactionDetailsPage />}
      />

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
