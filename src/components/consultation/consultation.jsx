import React, { useState } from "react";
import "./consultation.css";
import { a } from "../cardfolder/data";
import { AiOutlineCalendar } from "react-icons/ai";
import { WiTime4 } from "react-icons/wi";
function Consultation({ info }) {
  const [views] = useState(1);

  const data = a.slice(0, views);
  // console.log(`this is consultation:data ${data}`);
  const drDetails = data.map((items) => {
    const { id, name, speacilist, Date } = items;
    return (
      <div key={id} className="consul-container">
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

          <br />
        </div>
        <div className="date-time">
          <big className="consul-date">
            <AiOutlineCalendar /> {Date}/2/23
          </big>
          <big className="consul-time">
            <WiTime4 />
            3pm to 7pm
          </big>
        </div>
      </div>
    );
  });

  return (
    <div className="consul-detail">
      <strong>Consultation</strong>
      <div>
        {drDetails}
        <br />
        {/* <Calendars /> */}
      </div>
    </div>
  );
}

export default Consultation;
