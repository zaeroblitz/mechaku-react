import CategoryItem from "./CategoryItem";

export default function CategoriesOverview({ categoriesData }) {
  const renderedCategoriesList = () => {
    return categoriesData.map((category, index) => (
      <CategoryItem
        key={category._id}
        id={category._id}
        no={index + 1}
        name={category.name}
        thumbnail={category.thumbnail}
      />
    ));
  };

  return (
    <section className="data-container">
      {categoriesData.length !== 0 && (
        <table className="table table-borderless table-hover">
          <thead>
            <tr className="align-middle">
              <th>No.</th>
              <th>Name</th>
              <th>Thumbnail</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>{renderedCategoriesList()}</tbody>
        </table>
      )}
    </section>
  );
}
