import React, { useState } from "react";
import "./product.css";
import productData from "./productdata";
function Product() {
  const [proDetails, setProDetails] = useState(2);
  const details = productData.slice(0, proDetails);

  const products = details.map((product) => {
    const { id, produ, price, Avalable } = product;

    console.log(product);
    return (
      <div key={id} className="product-details">
        <p className="product name">Product Name: {produ}</p>
        <p className="product price">Price: {price}</p>
        <p className="product Avalaible">Avalaible: {Avalable}</p>
      </div>
    );
  });
  return (
    <div className="product-container">
      <section>{products}</section>
    </div>
  );
}

export default Product;
