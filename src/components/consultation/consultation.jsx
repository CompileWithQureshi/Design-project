import React, { useState } from "react";
import "./consultation.css";
import { a } from "../cardfolder/data";
// import Calendars from "./calender";
function Consultation({ info }) {
  const [views] = useState(1);

  const data = a.slice(0, views);
  // console.log(`this is consultation:data ${data}`);
  const drDetails = data.map((items) => {
    const { id, name, speacilist, Date } = items;
    return (
      <div key={id}>
        <div>
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
            <h3>{Date}/2/23 Time:3pm to 7pm </h3>
          </div>
          <br />
        </div>
      </div>
    );
  });

  return (
    <div className="consul-detail">
      <strong>Consultation</strong>
      <div className="consul-header">
        {drDetails}
        <br />
        {/* <Calendars /> */}
      </div>
    </div>
  );
}

export default Consultation;
