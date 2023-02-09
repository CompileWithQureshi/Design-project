import React, { useState } from "react";
import "./consultation.css";
import { a } from "../cardfolder/data";
import { AiOutlineCalendar } from "react-icons/ai";
import { WiTime4 } from "react-icons/wi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Consultation({ info }) {
  return (
    <div className="consul-detail">
      <strong>Consultation</strong>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="swiper-containers"
        >
          {a.map((items) => (
            <SwiperSlide key={a.id}>
              <div className="consul-header">
                <img
                  src={info}
                  alt="Dr.img"
                  width="50px"
                  height="50px"
                  className="image"
                />

                <div>
                  <b>{items.name}</b>
                  <p> {items.speacilist}</p>
                </div>

                <br />
              </div>
              <div className="date-time">
                <big className="consul-date">
                  <AiOutlineCalendar /> {items.Date}/2/23
                </big>
                <big className="consul-time">
                  <WiTime4 />
                  3pm to 7pm
                </big>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Calendars /> */}
      </div>
    </div>
  );
}

export default Consultation;
