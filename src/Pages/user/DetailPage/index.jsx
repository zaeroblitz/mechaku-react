import React, { useCallback, useEffect, useState } from "react";
import { getProductById } from "apis/products";
import { useParams } from "react-router-dom";

import Breadcrumb from "components/user/DetailPage/Breadcrumb";
import DetailContent from "components/user/DetailPage/DetailContent";
import Recommendation from "components/user/DetailPage/Recommendation";
import Thumbnail from "components/user/DetailPage/Thumbnail";
import Footer from "components/user/Footer";
import Navbar from "components/user/Navbar";
import "./styles.css";

export default function DetailPage() {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();

  const getProductDetail = useCallback(async () => {
    const response = await getProductById(id);

    setProductDetails(response.data);
  }, [id]);

  useEffect(() => {
    (async () => {
      getProductDetail();
    })();
  }, [getProductDetail]);

  useEffect(() => {
    if (productDetails) document.title = `Mechaku | ${productDetails.name}`;
  }, [productDetails]);

  return (
    <>
      <Navbar />
      <Breadcrumb />
      <main className="container-fluid">
        <div className="detail-container row justify-content-between">
          <div className="row justify-content-between">
            {Object.keys(productDetails).length && (
              <>
                <Thumbnail images={productDetails.details.images} />
                <DetailContent
                  id={productDetails._id}
                  name={productDetails.name}
                  price={productDetails.details.price}
                  category={productDetails.category.name}
                  grade={productDetails.grade.name}
                  brand={productDetails.brand.name}
                  stock={productDetails.details.quantity}
                  description={productDetails.details.description}
                />
              </>
            )}
          </div>
        </div>
      </main>
      <Recommendation />
      <Footer />
    </>
  );
}
