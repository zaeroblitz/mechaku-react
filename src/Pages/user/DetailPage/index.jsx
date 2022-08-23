import React from "react";
import Breadcrumb from "components/user/DetailPage/Breadcrumb";
import DetailContent from "components/user/DetailPage/DetailContent";
import Recommendation from "components/user/DetailPage/Recommendation";
import Thumbnail from "components/user/DetailPage/Thumbnail";
import Footer from "components/user/Footer";
import Navbar from "components/user/Navbar";
import "./styles.css";

export default function DetailPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <main className="container-fluid">
        <div className="detail-container row justify-content-between">
          <div className="row justify-content-between">
            <Thumbnail />
            <DetailContent />
          </div>
        </div>
      </main>
      <Recommendation />
      <Footer />
    </>
  );
}
