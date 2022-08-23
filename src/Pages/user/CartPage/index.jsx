import React from "react";
import Breadcrumb from "components/CartPage/Breadcrumb";
import CartTable from "components/CartPage/CartTable";
import CartTotal from "components/CartPage/CartTable/CartTotal";
import ShippingDetail from "components/CartPage/ShippingDetail";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import "./styles.css";

export default function CartPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <main className="cart-container">
        <div className="row justify-content-between container-fluid">
          <div className="col-7 col">
            <CartTable />
            <CartTotal />
          </div>
          <div className="col-4">
            <ShippingDetail />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
