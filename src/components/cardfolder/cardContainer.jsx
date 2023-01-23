/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./Card.css";
import React, { useState } from "react";
// import { AiOutlineUser } from "react-icons/ai";
import { a } from "./data";

function CardContainer() {
  const [views, setViews] = useState(2);

  // const
  // console.log(a);
  const data = a.slice(0, views);
  // console.log(data);
  const cardDetails = data.map((items) => {
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
      <div className="card-container">
        <h2>Top Doctors</h2>
        <div className="cards">{cardDetails}</div>
        <a
          className="view-btn"
          onClick={() => {
            setViews(views + views);
          }}
        >
          View All
        </a>
      </div>
    </section>
  );
}

export default CardContainer;
