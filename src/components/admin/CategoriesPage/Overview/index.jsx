import { useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import CategoryItem from "./CategoryItem";

export default function CategoriesOverview() {
  const categories = useSelector((state) => state.categories);

  const showLoadingSpinner = () => {
    if (categories.loading) {
      return (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <GridLoader color="#333333" />
        </div>
      );
    }
  };

  const showCategoriesList = () => {
    if (!categories.loading && !categories.error && categories.data.length) {
      const categoriesData = categories.data;
      return categoriesData.map((category, index) => (
        <CategoryItem
          key={category._id}
          id={category._id}
          no={index + 1}
          name={category.name}
          thumbnail={category.thumbnail}
        />
      ));
    }
  };

  return (
    <>
      {showLoadingSpinner()}
      {!categories.loading && !categories.error && categories.data.length && (
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
            <tbody>{showCategoriesList()}</tbody>
          </table>
        </section>
      )}
    </>
  );
}
