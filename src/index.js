import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import CartPage from "./Pages/CartPage";
import Categories from "./Pages/Categories";
import DetailPage from "./Pages/DetailPage";
import OverviewPage from "./Pages/MemberPage/OverviewPage";
import TransactionsPage from "./Pages/MemberPage/TransactionsPage";
import TransactionDetailsPage from "./Pages/MemberPage/TransactionDetailsPage";
import Shop from "./Pages/Shop";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import SuccessPage from "./Pages/SuccessPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="shop" element={<Shop />} />
      <Route path="categories" element={<Categories />} />
      <Route path="detail" element={<DetailPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="success" element={<SuccessPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />

      <Route path="member" element={<OverviewPage />} />
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
