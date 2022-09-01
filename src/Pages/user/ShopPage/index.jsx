import React, { useEffect } from "react";
import Footer from "components/user/Footer";
import Navbar from "components/user/Navbar";
import Breadcrumb from "components/user/ShopPage/Breadcrumb";
import Filter from "components/user/ShopPage/Filter";
import ShopList from "components/user/ShopPage/ShopList";
import "./styles.css";

export default function ShopPage() {
  useEffect(() => {
    document.title = "Mechaku | Shop";
  }, []);

  return (
    <>
      <Navbar current="Shop" />
      <Breadcrumb />
      <main className="container-fluid">
        <div className="shop-container row justify-content-between">
          <Filter />
          <ShopList />
        </div>
      </main>
      <Footer />
    </>
  );
}
