import Swal from "sweetalert2";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createNewProduct } from "features/product/productSlice";

export default function CreateProductComponents() {
  const [data, setData] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brands);
  const grades = useSelector((state) => state.grades);

  const handleNameChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleCategoriesChange = (e) => {
    setData({
      ...data,
      category: e.target.value,
    });
  };

  const handleBrandsChange = (e) => {
    setData({
      ...data,
      brand: e.target.value,
    });
  };

  const handleGradesChange = (e) => {
    setData({
      ...data,
      grade: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setData({
      ...data,
      description: e.target.value,
    });
  };

  const handlePriceChange = (values) => {
    setData({
      ...data,
      price: values.value,
    });
  };

  const handleQuantityChange = (e) => {
    setData({
      ...data,
      quantity: e.target.value,
    });
  };

  const handleImagesChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    dispatch(createNewProduct(formData));
  };

  const renderedCategoriesOption = () => {
    if (categories.data.length) {
      return categories.data.map((category) => (
        <option key={category._id} value={category._id}>
          {category.name}
        </option>
      ));
    }
  };

  const renderedBrandsOption = () => {
    if (brands.data.length) {
      return brands.data.map((brand) => (
        <option key={brand._id} value={brand._id}>
          {brand.name}
        </option>
      ));
    }
  };

  const renderedGradesOption = () => {
    if (grades.data.length) {
      return grades.data.map((grade) => (
        <option key={grade._id} value={grade._id}>
          {grade.name}
        </option>
      ));
    }
  };

  const renderedImagesPreview = () => {
    if (imagesPreview) {
      return imagesPreview.map((preview, index) => (
        <img
          src={preview}
          key={index}
          className="preview-thumbnail me-2"
          alt=""
        />
      ));
    }
  };

  const showSweetAlert = () => {
    // Loading
    if (
      products.loading &&
      !products.error &&
      products.response === "loading"
    ) {
      Swal.fire({
        title: "Loading...",
        text: "Please wait a moment",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
      });
    }

    // Success
    if (!products.loading && !products.error && products.response === "201") {
      Swal.fire({
        title: "Success!",
        text: "Successfully added a new product data",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "OK!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/products");
        }
      });
    }

    // Error
    if (!products.loading && products.error && products.response === "error") {
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "OK!",
      });
    }
  };

  return (
    <>
      {showSweetAlert()}
      <section className="data-container">
        <form onSubmit={handleSubmit}>
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
              onChange={handleNameChange}
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
              onChange={handleCategoriesChange}
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
              onChange={handleBrandsChange}
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
              onChange={handleGradesChange}
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
              onChange={handleDescriptionChange}
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
              onValueChange={handlePriceChange}
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
              onChange={handleQuantityChange}
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
              onChange={handleImagesChange}
              multiple
              required
            />
          </div>

          <button className="btn btn-add">Submit</button>
        </form>
      </section>
    </>
  );
}
