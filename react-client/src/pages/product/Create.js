import axios from "axios";
import React, { useState } from "react";
import BrandInput from "./components/BrandInput";
import CategoryInput from "./components/CategoryInput";
import ImageInput from "./components/ImageInput";

export default function Create() {
  const initialFormData = {
    name: "default",
    price: 0,
    in_stock: 0,
    description: "123",
    categories: ["one", "two"],
    brands: ["b1", "b2"],
    images: [],
  };
  const [isAPILoading, setIsAPILoading] = useState(false);
  const [apiError, setApiError] = useState(" * are required field");
  const [formData, setFormData] = useState(initialFormData);

  // form handling
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function postOnAPI(form_data) {
    try {
      const url = "https://mern-ecommerce70.herokuapp.com/api/products";
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      };
      const res = await axios.post(url, form_data, config);
      console.log(res);
      setFormData(initialFormData);
      setApiError("");
    } catch (error) {
      console.log({ error });
      setApiError("error");
    }
    setIsAPILoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsAPILoading(true);
    console.log(formData);
    let form_data = new FormData();

    form_data.append("name", formData.name);
    form_data.append("price", formData.price);
    form_data.append("in_stock", formData.in_stock);
    form_data.append("description", formData.description);
    formData.categories.forEach((el) => form_data.append("categories[]", el));
    formData.brands.forEach((el) => form_data.append("brands[]", el));
    formData.images.forEach((el) => form_data.append("images", el));
    postOnAPI(form_data);
  }

  function addCategory() {
    setFormData((prev) => {
      return {
        ...prev,
        categories: [...prev.categories, ""],
      };
    });
  }

  function addBrand() {
    setFormData((prev) => {
      return {
        ...prev,
        brands: [...prev.brands, ""],
      };
    });
  }

  function addImage() {
    setFormData((prev) => {
      return {
        ...prev,
        images: [...prev.images, ""],
      };
    });
  }

  return (
    <>
      {isAPILoading && (
        <div
          className="alert alert-warning d-flex align-items-center"
          role="alert"
        >
          wait...
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      {!isAPILoading && !apiError && (
        <div className="alert alert-success" role="alert">
          sucessfully added
        </div>
      )}
      {!isAPILoading && apiError && (
        <div className="alert alert-danger" role="alert">
          {apiError}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="col-6 m-auto text-capitalize">
          <div className="form-group">
            <label htmlFor="exampleInputtext1" className="required-field m-2">
              product name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputtext1"
              placeholder="Enter product name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputtext2" className="m-2 required-field ">
              product price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputtext2"
              placeholder="Enter product price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputtext3" className="m-2">
              product stock
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputtext3"
              placeholder="Enter product stock"
              name="in_stock"
              value={formData.in_stock}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputtext3" className="m-2">
              product description
            </label>
            <textarea
              type="number"
              className="form-control"
              id="exampleInputtext3"
              placeholder="Enter product description"
              rows="7"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <hr />
            <CategoryInput formData={formData} setFormData={setFormData} />
            <button
              type="button"
              className="btn btn-success m-2"
              onClick={addCategory}
            >
              add category
            </button>
            <hr />
            <BrandInput formData={formData} setFormData={setFormData} />
            <button
              type="button"
              className="btn btn-success m-2"
              onClick={addBrand}
            >
              add brand
            </button>
            <hr />
            <ImageInput formData={formData} setFormData={setFormData} />
            <button
              type="button"
              className="btn btn-success m-2"
              onClick={addImage}
            >
              add Image
            </button>
          </div>
          <button type="submit" className="m-2 btn btn-primary">
            create
          </button>
          <button
            type="button"
            className="m-2 btn btn-danger"
            onClick={() => setFormData(initialFormData)}
          >
            reset
          </button>
        </div>
      </form>
    </>
  );
}
