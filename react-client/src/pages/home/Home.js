import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import Card from "./components/Card";
import FilterCard from "./components/FilterCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  // for pagitnate
  const [page, setPage] = useState(0);

  // for url and url_query
  const [totalPage, setTotalPage] = useState(0);
  const [isAPILoading, setIsAPILoading] = useState(false);
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_API_URL}/products?page=1&per_page=${process.env.REACT_APP_PER_PAGE}`
  );

  async function getProducts() {
    setIsAPILoading(true);
    try {
      const res = await axios.get(url);

      if (res.data.data[0].data.length !== 0) {
        setProducts(res.data.data[0].data);
        setTotalPage(res.data.data[0].metadata[0].total);
        setIsAPILoading(false);
        return;
      }
    } catch (error) {
      console.log({ error });
    }
    setProducts([]);
    setTotalPage(0);
    setIsAPILoading(false);
  }

  useEffect(() => {
    console.log(url);
    getProducts();
    // eslint-disable-next-line
  }, [url]);

  // for pagination
  const handlePageClick = (event) => {
    // only change page - ?page=1&
    const afterIndex = url.search("&");
    const beforeIndex = url.search("\\?");

    const beforePage = url.substring(beforeIndex, 0);
    const afterPage = url.substring(afterIndex + 1);

    setUrl(`${beforePage}?page=${event.selected + 1}&${afterPage}`);
    setPage(event.selected);
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-3 vh-100 bg-light sticky-top">
            <FilterCard
              setUrl={setUrl}
              isAPILoading={isAPILoading}
              setPage={setPage}
            />
          </div>
          <div className="col-9 row">
            {products.length > 0 ? (
              <>
                {products.map((product) => {
                  return <Card product={product} key={product._id} />;
                })}

                {/* paginate links */}
                <ReactPaginate
                  forcePage={page}
                  className="none-list-style d-flex m-2 justify-content-center"
                  breakLinkClassName="none-list-style"
                  pageLinkClassName="p-2 text-decoration-none"
                  activeLinkClassName="text-danger"
                  breakLabel="..."
                  nextLabel=">>"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={Math.ceil(
                    totalPage / process.env.REACT_APP_PER_PAGE
                  )}
                  previousLabel="<<"
                  renderOnZeroPageCount={null}
                />
              </>
            ) : (
              <h1 className="text-center text-danger">zero products found</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
