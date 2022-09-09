import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import { useDispatch, useSelector } from "react-redux";

import Thumbnail from "components/user/DetailPage/Thumbnail";
import Breadcrumb from "components/user/DetailPage/Breadcrumb";
import DetailContent from "components/user/DetailPage/DetailContent";
import Recommendation from "components/user/DetailPage/Recommendation";
import {
  fetchSelectedProduct,
  cleanedUp,
} from "features/product/selectedProductSlice";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProduct);
  const title = Object.keys(product.data).length
    ? `Mechaku | ${product.data.name}`
    : "Mechaku | Your Mecha Store";

  useEffect(() => {
    dispatch(fetchSelectedProduct(id));

    return () => {
      dispatch(cleanedUp());
    };
  }, [dispatch, id]);

  const showLoadingSpinner = () => {
    if (product.loading) {
      return (
        <div className="w-100 mt-4 text-center">
          <GridLoader color="#333" />
        </div>
      );
    }
  };

  const showContent = () => {
    if (!product.loading && Object.keys(product.data).length) {
      return (
        <>
          <Thumbnail images={product.data.details.images} />
          <DetailContent
            id={product.data._id}
            name={product.data.name}
            price={product.data.details.price}
            category={product.data.category.name}
            grade={product.data.grade.name}
            brand={product.data.brand.name}
            stock={product.data.details.quantity}
            description={product.data.details.description}
          />
        </>
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Breadcrumb />
      <div className="container-fluid">
        <div className="row justify-content-between my-5">
          {showLoadingSpinner()}
          {showContent()}
        </div>
      </div>
      <Recommendation />
    </>
  );
}
