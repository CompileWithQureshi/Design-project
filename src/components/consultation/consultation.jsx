import React, { useState } from "react";
import "./consultation.css";
import { a } from "../cardfolder/data";
function Consultation({ info }) {
  const [views] = useState(1);

  const data = a.slice(0, views);
  // console.log(`this is consultation:data ${data}`);
  const drDetails = data.map((items) => {
    const { id, name, speacilist } = items;
    return (
      <div key={id}>
        <div className="consul-header">
          <img
            src={info}
            alt="Dr.img"
            width="50px"
            height="50px"
            className="image"
          />

          <div>
            <b>{name}</b>
            <p> {speacilist}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="consul-detail">
      <strong>Consultation.</strong>
      <div>{drDetails}</div>
    </div>
  );
}

export default Consultation;
