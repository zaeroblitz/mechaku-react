import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/ShopPage/Breadcrumb";
import Filter from "../../components/ShopPage/Filter";
import ShopList from "../../components/ShopPage/ShopList";
import "./styles.css";

export default function Shop() {
  return (
    <>
      <Navbar current="Shop" />
      <Breadcrumb />
      <main className="container-fluid">
        <div className="shop-container row justify-content-between">
          <div className="col-md-3">
            <Filter />
          </div>
          <div className="col-md-9">
            <ShopList />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}