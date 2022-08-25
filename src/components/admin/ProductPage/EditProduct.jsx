import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import NumberFormat from "react-number-format";
import { useNavigate, useParams } from "react-router-dom";
import { getBrands } from "apis/brands";
import { getAllCategories } from "apis/category";
import { getAllGrades } from "apis/grades";
import { getProductById } from "apis/products";
import { putProductData } from "apis/products";
import "./styles.css";

export default function EditProductComponents() {
  const [data, setData] = useState({});
  const [newData, setNewData] = useState({});
  const [brands, setBrands] = useState([]);
  const [grades, setGrades] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  const PRODUCT_THUMBNAIL_URL = "http://localhost:8000/uploads/products";

  const getProductData = useCallback(async () => {
    const response = await getProductById(id);

    setData(response.data);
  }, [id]);

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
      getProductData();
      getCategoriesData();
      getBrandsData();
      getGradesData();
    })();
  }, [getProductData, getCategoriesData, getBrandsData, getGradesData]);

  const onInputNameChange = (e) => {
    setNewData({
      ...newData,
      name: e.target.value,
    });
  };

  const onInputCategoriesChange = (e) => {
    setNewData({
      ...newData,
      category: e.target.value,
    });
  };

  const onInputBrandsChange = (e) => {
    setNewData({
      ...newData,
      brand: e.target.value,
    });
  };

  const onInputGradesChange = (e) => {
    setNewData({
      ...newData,
      grade: e.target.value,
    });
  };

  const onInputDescriptionChange = (e) => {
    setNewData({
      ...newData,
      description: e.target.value,
    });
  };

  const onInputPriceChange = (values) => {
    setNewData({
      ...newData,
      price: values.value,
    });
  };

  const onInputQuantityChange = (e) => {
    setNewData({
      ...newData,
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

  const onBackButtonClick = (e) => {
    e.preventDefault();

    navigate(-1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newData.name ?? data.name);
    formData.append("category", newData.category ?? data.category._id);
    formData.append("brand", newData.brand ?? data.brand._id);
    formData.append("grade", newData.grade ?? data.grade._id);
    formData.append(
      "description",
      newData.description ?? data.details.description
    );
    formData.append("price", newData.price ?? data.details.price);
    formData.append("quantity", newData.quantity ?? data.details.quantity);

    console.log(newData);

    const response = await putProductData(id, formData);

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

  const renderedProductImages = () => {
    if (data.details.images) {
      return data.details.images.map((image, index) => (
        <img
          src={`${PRODUCT_THUMBNAIL_URL}/${image}`}
          key={index}
          className="product-thumbnail"
          alt=""
        />
      ));
    }
  };

  const renderedPreviewImages = () => {
    if (imagesPreview) {
      return imagesPreview.map((preview, index) => (
        <img src={preview} key={index} className="product-thumbnail" alt="" />
      ));
    }
  };

  return (
    <div className="products-page-container col-lg-8">
      <h2 className="title">Edit Product</h2>
      <button className="btn btn-edit mb-4" onClick={onBackButtonClick}>
        Back
      </button>
      {Object.keys(data).length && (
        <form className="products-data-wrapper" onSubmit={onSubmit}>
          <div className="form-group">
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
                defaultValue={data.name}
                onChange={onInputNameChange}
                required
              />
            </div>

            {/* Categories */}
            <div className="form-group mb-4">
              <label htmlFor="categories" className="form-label">
                Category
              </label>

              {data.category && (
                <select
                  id="categories"
                  className="form-select"
                  defaultValue={data.category._id}
                  onChange={onInputCategoriesChange}
                  required
                >
                  <option value={"default"} disabled>
                    Select Category
                  </option>
                  {renderedCategoriesOption()}
                </select>
              )}
            </div>

            {/* Brands */}
            <div className="form-group mb-4">
              <label htmlFor="brands" className="form-label">
                Brand
              </label>

              {data.brand && (
                <select
                  id="brands"
                  className="form-select"
                  defaultValue={data.brand._id}
                  onChange={onInputBrandsChange}
                  required
                >
                  <option value={"default"} disabled>
                    Select Brand
                  </option>
                  {renderedBrandsOption()}
                </select>
              )}
            </div>

            {/* Grades */}
            <div className="form-group mb-4">
              <label htmlFor="grades" className="form-label">
                Grade
              </label>

              {data.grade && (
                <select
                  id="grades"
                  className="form-select"
                  defaultValue={data.grade._id}
                  onChange={onInputGradesChange}
                  required
                >
                  <option value={"default"} disabled>
                    Select Brand
                  </option>
                  {renderedGradesOption()}
                </select>
              )}
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
                defaultValue={data.details.description}
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
                defaultValue={data.details.price}
                onValueChange={onInputPriceChange}
                className="form-control"
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
                onChange={onInputQuantityChange}
                defaultValue={data.details.quantity}
                className="form-control"
                required
              />
            </div>

            {/* Images  */}
            <div className="form-group mb-4">
              <label htmlFor="images" className="form-label">
                Images
              </label>
              <div className="d-flex align-items-center">
                {renderedProductImages()}
              </div>
              <input
                type="file"
                id="images"
                className="form-control"
                onChange={onInputImagesChange}
                multiple
              />
            </div>
            <button className="btn btn-add-product">Save Changes</button>
          </div>
        </form>
      )}
    </div>
  );
}
