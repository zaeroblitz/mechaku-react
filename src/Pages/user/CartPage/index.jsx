import React from "react";
import Breadcrumb from "components/user/CartPage/Breadcrumb";
import CartTable from "components/user/CartPage/CartTable";
import CartTotal from "components/user/CartPage/CartTable/CartTotal";
import ShippingDetail from "components/user/CartPage/ShippingDetail";
import Footer from "components/user/Footer";
import Navbar from "components/user/Navbar";
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
