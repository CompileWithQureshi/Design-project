/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./Card.css";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { a } from "./data";

function CardContainer({ info }) {
  const [views, setViews] = useState(2);

  const data = a.slice(0, views);
  // console.log("card" + data);
  const cardDetails = data.map((items) => {
    const { id, speacilist, name, rating } = items;
    return (
      <div key={id} className="card-details">
        <div className="card-img">
          <LazyLoadImage
            src={info}
            alt="dr.img"
            width="100px"
            height="100px"
            className="image"
            effect="blur"
          />
        </div>
        <div className="card-info">
          <h5>Name:{name}</h5>
          <p>Speacilist: {speacilist}</p>
          <p>
            <AiFillStar />
            {rating}
            {"  "}
            Reviews
            {"  "}
            {"  "}
            {"  "}
          </p>
          <span></span>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="card-container">
        <div className="card-hearder">
          <h2>Top Doctors</h2>
          <button
            className="view-btn"
            onClick={() => {
              setViews(views + views);
            }}
          >
            View All
          </button>
        </div>
        <div className="cards">{cardDetails}</div>
      </div>
    </section>
  );
}

export default CardContainer;
