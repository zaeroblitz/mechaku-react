import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { getProductById } from "apis/products";
import { useCallback, useEffect, useState } from "react";

import Thumbnail from "components/user/DetailPage/Thumbnail";
import Breadcrumb from "components/user/DetailPage/Breadcrumb";
import DetailContent from "components/user/DetailPage/DetailContent";
import Recommendation from "components/user/DetailPage/Recommendation";

export default function DetailPage() {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  const title = productDetails && `Mechaku | ${productDetails.name}`;

  const getProductDetail = useCallback(async () => {
    const response = await getProductById(id);

    setProductDetails(response.data);
  }, [id]);

  useEffect(() => {
    (async () => {
      getProductDetail();
    })();
  }, [getProductDetail]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Breadcrumb />
      <div className="container-fluid">
        <div className="row justify-content-between my-5">
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
      <Recommendation />
    </>
  );
}
