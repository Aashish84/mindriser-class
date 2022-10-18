import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import Card from "../components/Card";

export default function Home() {
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
          {products.map((product) => {
            return <Card product={product} key={product._id} />;
          })}
        </div>
      </div>
      {/* paginate links */}
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
