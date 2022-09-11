import { useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import BrandItem from "./BrandItem";

export default function BrandsOverview() {
  const brands = useSelector((state) => state.brands);

  const showLoadingSpinner = () => {
    if (brands.loading && brands.response === "loading") {
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
  };

  const showBrandItems = () => {
    if (!brands.loading && brands.data.length) {
      const brandsData = brands.data;

      return brandsData.map((brand, index) => (
        <BrandItem
          key={brand._id}
          id={brand._id}
          no={index + 1}
          name={brand.name}
          thumbnail={brand.thumbnail}
        />
      ));
    }
  };

  return (
    <>
      {showLoadingSpinner()}
      {!brands.loading && brands.data.length && (
        <section className="data-container">
          <table className="table table-borderless table-hover">
            <thead>
              <tr className="align-middle">
                <th>No.</th>
                <th>Name</th>
                <th>Thumbnail</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>{showBrandItems()}</tbody>
          </table>
        </section>
      )}
    </>
  );
}
