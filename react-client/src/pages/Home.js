import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import new_product from "../assets/image/new-product.jpg";
import { useSelector } from "react-redux";
import CartBtn from "../components/CartBtn";

export default function Home() {
  const { cartSet } = useSelector((store) => store.cart);

  const [products, setProducts] = useState([]);
  // for url and url_query
  const [totalPage, setTotalPage] = useState(0);
  let perPage = 12;
  const [url, setUrl] = useState(
    `https://mern-ecommerce70.herokuapp.com/api/products?page=1&per_page=${perPage}`
  );

  async function getProducts() {
    const res = await axios.get(url);
    setProducts(res.data.data[0].data);
    setTotalPage(res.data.data[0].metadata[0].total);
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [url]);

  // for pagination
  const handlePageClick = (event) => {
    // console.log(event.selected);
    setUrl(
      `https://mern-ecommerce70.herokuapp.com/api/products?page=${
        event.selected + 1
      }&per_page=${perPage}`
    );
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          {/* for each product make card */}
          {products.map((product) => {
            return (
              <div className="col-3 p-2" key={product._id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    style={{ height: "300px" }}
                    src={product.images[0] || new_product}
                    alt="Cardimage"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">
                      {product.name}
                    </h5>
                    <p className="card-text">Rs. {product.price}</p>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={`/product/${product._id}`}
                        className="btn btn-primary"
                      >
                        view detail
                      </Link>
                      {/* toggle cart btn */}
                      {!cartSet.includes(product._id) ? (
                        <CartBtn product={product} />
                      ) : (
                        <Link
                          to="/cart"
                          className="btn btn-success text-capitalize"
                        >
                          goto cart
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ReactPaginate
        className="none-list-style d-flex m-2 justify-content-center"
        breakLinkClassName="none-list-style"
        pageLinkClassName="p-2 text-decoration-none"
        activeLinkClassName="text-danger"
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(totalPage / perPage)}
        previousLabel="<<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
