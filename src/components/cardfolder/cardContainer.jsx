import "./Card.css";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

function CardContainer() {
  return (
    <section>
      <div className="cards">
        <div className="card">
          <AiOutlineUser />
        </div>
      </div>
    </section>
  );
}

export default CardContainer;
