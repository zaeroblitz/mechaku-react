import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import "./index.css";
import Shop from "./Pages/Shop";
import Categories from "./Pages/Categories";
import DetailPage from "./Pages/DetailPage";
import CartPage from "./Pages/CartPage";
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
