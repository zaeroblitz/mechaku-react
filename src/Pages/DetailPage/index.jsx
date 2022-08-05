import React from "react";
import Breadcrumb from "../../components/DetailPage/Breadcrumb";
import DetailContent from "../../components/DetailPage/DetailContent";
import Recommendation from "../../components/DetailPage/Recommendation";
import Thumbnail from "../../components/DetailPage/Thumbnail";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
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
