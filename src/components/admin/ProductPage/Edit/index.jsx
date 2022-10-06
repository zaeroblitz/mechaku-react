import Swal from "sweetalert2";
import NumberFormat from "react-number-format";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateSelectedProduct } from "features/product/productSlice";

export default function EditProductComponents() {
  const [newData, setNewData] = useState({});
  const [imagesPreview, setImagesPreview] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brands);
  const grades = useSelector((state) => state.grades);
  const PRODUCT_THUMBNAIL_URL =
    "https://mechaku-server.zaerodev.my.id/uploads/products";

  const handleNameChange = (e) => {
    setNewData({
      ...newData,
      name: e.target.value,
    });
  };

  const handleCategoryChange = (e) => {
    setNewData({
      ...newData,
      category: e.target.value,
    });
  };

  const handleBrandChange = (e) => {
    setNewData({
      ...newData,
      brand: e.target.value,
    });
  };

  const handleGradeChange = (e) => {
    setNewData({
      ...newData,
      grade: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setNewData({
      ...newData,
      description: e.target.value,
    });
  };

  const handlePriceChange = (values) => {
    setNewData({
      ...newData,
      price: values.value,
    });
  };

  const handleQuantityChange = (e) => {
    setNewData({
      ...newData,
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

    // setData({
    //   ...data,
    //   images: dataImages,
    // });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newData.name ?? selectedProduct.data.name);
    formData.append(
      "category",
      newData.category ?? selectedProduct.data.category._id
    );
    formData.append("brand", newData.brand ?? selectedProduct.data.brand._id);
    formData.append("grade", newData.grade ?? selectedProduct.data.grade._id);
    formData.append(
      "description",
      newData.description ?? selectedProduct.data.details.description
    );
    formData.append(
      "price",
      newData.price ?? selectedProduct.data.details.price
    );
    formData.append(
      "quantity",
      newData.quantity ?? selectedProduct.data.details.quantity
    );

    const updateData = {
      id,
      data: formData,
    };

    dispatch(updateSelectedProduct(updateData));
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

  const renderedProductImages = () => {
    if (selectedProduct.data.details.images) {
      return (
        <div className="d-flex align-items-center">
          {selectedProduct.data.details.images.map((image, index) => (
            <img
              src={`${PRODUCT_THUMBNAIL_URL}/${image}`}
              key={index}
              className="preview-thumbnail me-2"
              alt=""
            />
          ))}
        </div>
      );
    }
  };

  const renderedPreviewImages = () => {
    if (imagesPreview) {
      return (
        <div className="d-block">
          <p className="form-label d-block">New Images Preview</p>
          <div className="d-flex flex-align-items-center">
            {imagesPreview.map((preview, index) => (
              <img
                src={preview}
                key={index}
                className="preview-thumbnail me-2"
                alt=""
              />
            ))}
          </div>
        </div>
      );
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
    if (!products.loading && !products.error && products.response === "202") {
      Swal.fire({
        title: "Success",
        text: "Successfully updated product data",
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
      {!selectedProduct.loading &&
        !selectedProduct.error &&
        Object.keys(selectedProduct.data).length !== 0 && (
          <section className="data-container">
            <form onSubmit={handleSubmit}>
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
                    defaultValue={selectedProduct.data.name}
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
                    defaultValue={selectedProduct.data.category._id}
                    onChange={handleCategoryChange}
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
                    defaultValue={selectedProduct.data.brand._id}
                    onChange={handleBrandChange}
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
                    defaultValue={selectedProduct.data.grade._id}
                    onChange={handleGradeChange}
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
                    defaultValue={selectedProduct.data.details.description}
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
                    defaultValue={selectedProduct.data.details.price}
                    onValueChange={handlePriceChange}
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
                    onChange={handleQuantityChange}
                    defaultValue={selectedProduct.data.details.quantity}
                    className="form-control"
                    required
                  />
                </div>

                {/* Images  */}
                <div className="form-group mb-4">
                  <label htmlFor="images" className="form-label">
                    Images
                  </label>
                  <div className="d-flex flex-column align-items-start">
                    {renderedProductImages()}
                    {renderedPreviewImages()}
                  </div>
                  <input
                    type="file"
                    id="images"
                    className="form-control"
                    onChange={handleImagesChange}
                    multiple
                  />
                </div>
                <button className="btn btn-add">Save Changes</button>
              </div>
            </form>
          </section>
        )}
    </>
  );
}
