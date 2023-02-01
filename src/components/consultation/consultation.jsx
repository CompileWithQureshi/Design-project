import React, { useState } from "react";
import "./consultation.css";
import { a } from "../cardfolder/data";
function Consultation({ info }) {
  const [views] = useState(1);
  const [schedule, setSchedule] = useState({ date: "", time: "" });
  console.log(schedule);

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

  const handleReschedule = () => {
    // code to handle rescheduling logic
    setSchedule({ date: "new date", time: "new time" });
  };

  const handleCancel = () => {
    // code to handle cancellation logic
    setSchedule({ date: "", time: "" });
  };

  return (
    <div className="consul-detail">
      <strong>Consultation.</strong>
      <div>{drDetails}</div>
      <div>
        <div>
          Date: {schedule.date}
          Time: {schedule.time}
        </div>
        <button onClick={handleReschedule}>Reschedule</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Consultation;
