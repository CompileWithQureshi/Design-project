import "./Card.css";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

function CardContainer() {
  return (
    <section>
      <div className="card">
        <div className="card-img">
          <AiOutlineUser />
        </div>
        <div className="card-info">
          <h2>Nmae</h2>
          <p>Speacilist</p>
          <h4>* 5.0</h4>
        </div>
        <div className="card-img">
          <AiOutlineUser />
        </div>
        <div className="card-info">
          <h2>Nmae</h2>
          <p>Speacilist</p>
          <h4>* 5.0</h4>
        </div>
        <div className="card-img">
          <AiOutlineUser />
        </div>
        <div className="card-info">
          <h2>Nmae</h2>
          <p>Speacilist</p>
          <h4>* 5.0</h4>
        </div>
      </div>
    </section>
  );
}

export default CardContainer;
