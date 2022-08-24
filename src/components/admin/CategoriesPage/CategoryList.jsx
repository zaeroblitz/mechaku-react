import { getAllCategories } from "apis/category";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import CategoryItem from "./CategoryItem";
import "./styles.css";

export default function CategoryList() {
  const [categoriesList, setCategoriesList] = useState([]);

  const getCategoriesData = useCallback(async () => {
    const categoriesData = await getAllCategories();
    setCategoriesList(categoriesData.data);
  }, [getAllCategories]);

  useEffect(() => {
    getCategoriesData();
  }, []);

  const renderedCategoriesList = () => {
    return categoriesList.map((category, index) => (
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
    <div className="categories-data-wrapper">
      <table className="table table-borderless table-hover">
        <thead>
          <tr className="align-middle">
            <th>No.</th>
            <th>Name</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderedCategoriesList()}</tbody>
      </table>
    </div>
  );
}
