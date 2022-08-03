import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import "./index.css";
import LandingPage from "./routes/LandingPage";
import Shop from "./routes/Shop";
import Categories from "./routes/Categories";
import DetailPage from "./routes/DetailPage";
import Discover from "./routes/Discover";
import Workshop from "./routes/Workshop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<LandingPage />} />
      <Route path="shop" element={<Shop />} />
      <Route path="categories" element={<Categories />} />
      <Route path="detail" element={<DetailPage />} />
      <Route path="discover" element={<Discover />} />
      <Route path="workshop" element={<Workshop />} />
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
