import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import CardBtn from "../../components/CardBtn";

export default function Show() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  async function callAPI() {
    try {
      const url = `https://mern-ecommerce70.herokuapp.com/api/products/${id}`;
      const res = await axios.get(url);
      setProduct(res.data.data);
      console.log(res.data.data.images);
      console.log({ product });
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    callAPI();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">
          <Carousel>
            {product.images &&
              product.images.map((img, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      src={img}
                      alt="..."
                      className="w-100 carousel-height m-2"
                    />
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
        <div className="col-6">
          <h1>{product.name}</h1>
          <h2>price : {product.price}</h2>
          <h3>Stock : {product.in_stock}</h3>
          <p>{product.description}</p>
          <CardBtn product={product} />
        </div>
      </div>
    </div>
  );
}
