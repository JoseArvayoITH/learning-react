import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { useAxiosGet } from "./HttpsRequests";

const Product = () => {
  const { id } = useParams();
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;

  let content = null;

  let product = useAxiosGet(url);

  if (product.error) {
    content = (
      <div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (product.loading) {
    content = <Loader />;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>

        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div className="mb-3">{product.data.description}</div>
      </div>
    );
  }

  return <div> {content}</div>;
};

export default Product;
