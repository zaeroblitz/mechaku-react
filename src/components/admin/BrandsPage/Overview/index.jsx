import BrandItem from "./BrandItem";

export default function BrandsOverview({ brandsData }) {
  const renderedBrandItems = () => {
    return brandsData.map((brand, index) => (
      <BrandItem
        key={brand._id}
        id={brand._id}
        no={index + 1}
        name={brand.name}
        thumbnail={brand.thumbnail}
      />
    ));
  };

  return (
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
        <tbody>{renderedBrandItems()}</tbody>
      </table>
    </section>
  );
}
