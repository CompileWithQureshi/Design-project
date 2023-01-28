import React from "react";

import productData from "./productdata";
function Product() {
  // const [proDetails, setProDetails] = useState(1);
  const details = productData.slice(0, 1);

  const products = details.map((product) => {
    const { id, produ, price, Avalable } = product;

    console.log(product);
    return (
      <div key={id}>
        <p>Product Name: {produ}</p>
        <p>Price: {price}</p>
        <p>Avalaible: {Avalable}</p>
      </div>
    );
  });
  return <div className="product-container">{products}</div>;
}

export default Product;
