import React, { useState } from "react";
import "./product.css";
import productData from "./productdata";
function Product() {
  const [proDetails, setProDetails] = useState(3);
  const details = productData.slice(0, proDetails);

  const products = details.map((product) => {
    const { id, produ, price } = product;
    const Active = product.Avalable;

    console.log(product);
    return (
      <div key={id} className="product-details">
        <p className="product name">Product: {produ}</p>
        <p className="product price">Price: ${price}</p>
        <p className="product Avalaible">
          Avalaible:{" "}
          {Active ? (
            <button className="green-btn"></button>
          ) : (
            <button className="red-btn"></button>
          )}{" "}
        </p>
      </div>
    );
  });
  return (
    <div className="product-container">
      <section>
        <div className="prduct-header">
          <strong>Product details.</strong>
          <button
            className="product-btn"
            onClick={() => {
              setProDetails(proDetails + proDetails);
            }}
          >
            <span className="product-title">More.. </span>
          </button>
        </div>

        {products}
      </section>
    </div>
  );
}

export default Product;
