import React from "react";
import "./consultation.css";
import { a } from "../cardfolder/data";
import { AiOutlineCalendar } from "react-icons/ai";
import { WiTime4 } from "react-icons/wi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Consultation({ info }) {
  return (
    <div className="consul-detail">
      <strong>Consultation</strong>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={1}
        // navigation
        scrollbar={{ dynamicBullets: true }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper-containers"
      >
        {a.map((items) => (
          <SwiperSlide key={items.id}>
            <div className="consul-container">
              <div className="consul-header">
                <LazyLoadImage
                  src={info}
                  alt="Dr.img"
                  width="50px"
                  height="50px"
                  className="image"
                  effect="blur"
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
              <div>
                <br />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <Calendars /> */}
      </Swiper>
    </div>
  );
}

export default Consultation;
