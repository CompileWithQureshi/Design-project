import "./Card.css";
import React from "react";
// import { AiOutlineUser } from "react-icons/ai";
import { a } from "./data";

function CardContainer() {
  console.log(a);
  const cardDetails = a.map((items) => {
    const { id, img, speacilist, name, rating } = items;
    return (
      <div key={id} className="card-details">
        <div className="card-img">
          <img src={img} alt="dr.img" width="130px" height="max-content" />
        </div>
        <div className="card-info">
          <h5>{name}</h5>
          <h5>{speacilist}</h5>
          <p>{rating}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <h2>Top Doctors</h2>
      <div className="cards">{cardDetails}</div>
    </section>
  );
}

export default CardContainer;
