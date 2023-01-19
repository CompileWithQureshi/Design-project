import "./Card.css";
import React from "react";

function CardContainer() {
  return (
    <section>
      <div className="card-container">
        <div className="cards">
          <img src="./original.webp" alt="doctor" className="card-img" />
        </div>
        <div className="card-details">
          <h4>Doctor Name</h4>
          <h5>Profecion</h5>
        </div>
      </div>
    </section>
  );
}

export default CardContainer;
