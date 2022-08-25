import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";
import { getBrands } from "apis/brands";
import { getAllGrades } from "apis/grades";
import { postProductData } from "apis/products";
import { getAllCategories } from "apis/category";
import "./styles.css";

export default function CreateProductComponents() {
  const [data, setData] = useState("");
  const [brands, setBrands] = useState([]);
  const [grades, setGrades] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const navigate = useNavigate();

  const getCategoriesData = useCallback(async () => {
    const response = await getAllCategories();

    setCategories(response.data);
  }, []);

  const getBrandsData = useCallback(async () => {
    const response = await getBrands();

    setBrands(response.data);
  }, []);

  const getGradesData = useCallback(async () => {
    const response = await getAllGrades();

    setGrades(response.data);
  }, []);

  useEffect(() => {
    (async () => {
      getCategoriesData();
      getBrandsData();
      getGradesData();
    })();
  }, [getCategoriesData, getBrandsData, getGradesData]);

  const onInputNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const onInputCategoriesChange = (e) => {
    setData({
      ...data,
      category: e.target.value,
    });
  };

  const onInputBrandsChange = (e) => {
    setData({
      ...data,
      brand: e.target.value,
    });
  };

  const onInputGradesChange = (e) => {
    setData({
      ...data,
      grade: e.target.value,
    });
  };

  const onInputDescriptionChange = (e) => {
    setData({
      ...data,
      description: e.target.value,
    });
  };

  const onInputPriceChange = (values) => {
    setData({
      ...data,
      price: values.value,
    });
  };

  const onInputQuantityChange = (e) => {
    setData({
      ...data,
      quantity: e.target.value,
    });
  };

  const onInputImagesChange = (e) => {
    const files = e.target.files;

    let blobFiles = [];
    let dataImages = [];
    for (const file of files) {
      const blobFile = URL.createObjectURL(file);
      blobFiles.push(blobFile);
      dataImages.push(file);
    }

    setImagesPreview(blobFiles);

    setData({
      ...data,
      images: dataImages,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(data.images);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("brand", data.brand);
    formData.append("grade", data.grade);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    data.images.forEach((image) => {
      formData.append("images", image);
    });

    const response = await postProductData(formData);

    if (response.status === "success") {
      Swal.fire({
        title: "Success!",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/products");
        }
      });
    }
  };

  const onBackButtonClick = (e) => {
    e.preventDefault();

    navigate(-1);
  };

  const renderedCategoriesOption = () => {
    return categories.map((category) => (
      <option key={category._id} value={category._id}>
        {category.name}
      </option>
    ));
  };

  const renderedBrandsOption = () => {
    return brands.map((brand) => (
      <option key={brand._id} value={brand._id}>
        {brand.name}
      </option>
    ));
  };

  const renderedGradesOption = () => {
    return grades.map((grade) => (
      <option key={grade._id} value={grade._id}>
        {grade.name}
      </option>
    ));
  };

  const renderedImagesPreview = () => {
    if (imagesPreview) {
      return imagesPreview.map((preview, index) => (
        <img src={preview} key={index} className="product-thumbnail" alt="" />
      ));
    }
  };

  return (
    <div className="products-page-container col-lg-8">
      <h2 className="title">Add New Product</h2>
      <button
        className="btn btn-warning btn-edit mb-5"
        onClick={onBackButtonClick}
      >
        Back
      </button>
      <form className="products-data-wrapper" onSubmit={onSubmit}>
        {/* Name  */}
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name..."
            className="form-control"
            onChange={onInputNameChange}
            required
          />
        </div>

        {/* Categories */}
        <div className="form-group mb-4">
          <label htmlFor="categories" className="form-label">
            Category
          </label>
          <select
            id="categories"
            className="form-select"
            defaultValue={"default"}
            onChange={onInputCategoriesChange}
            required
          >
            <option value={"default"} disabled>
              Select Category
            </option>
            {renderedCategoriesOption()}
          </select>
        </div>

        {/* Brands */}
        <div className="form-group mb-4">
          <label htmlFor="brands" className="form-label">
            Brand
          </label>
          <select
            id="brands"
            className="form-select"
            defaultValue={"default"}
            onChange={onInputBrandsChange}
            required
          >
            <option value={"default"} disabled>
              Select Brand
            </option>
            {renderedBrandsOption()}
          </select>
        </div>

        {/* Grades */}
        <div className="form-group mb-4">
          <label htmlFor="grades" className="form-label">
            Grade
          </label>
          <select
            id="grades"
            className="form-select"
            defaultValue={"default"}
            onChange={onInputGradesChange}
            required
          >
            <option value={"default"} disabled>
              Select Brand
            </option>
            {renderedGradesOption()}
          </select>
        </div>

        {/* Description */}
        <div className="form-group mb-4">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            rows="3"
            placeholder="Enter product description..."
            className="form-control"
            onChange={onInputDescriptionChange}
            required
          ></textarea>
        </div>

        {/* Price  */}
        <div className="form-group mb-4">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <NumberFormat
            prefix="Rp. "
            decimalSeparator=","
            thousandSeparator="."
            className="form-control"
            onValueChange={onInputPriceChange}
          />
        </div>

        {/* Quantity  */}
        <div className="form-group mb-4">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            placeholder="Enter product quantity..."
            className="form-control"
            onChange={onInputQuantityChange}
            required
          />
        </div>

        {/* Images  */}
        <div className="form-group mb-4">
          <label htmlFor="images" className="form-label">
            Images
          </label>
          <div className="d-flex align-items-center">
            {renderedImagesPreview()}
          </div>
          <input
            type="file"
            id="images"
            className="form-control"
            onChange={onInputImagesChange}
            multiple
            required
          />
        </div>

        <button className="btn btn-add-product">Submit</button>
      </form>
    </div>
  );
}
