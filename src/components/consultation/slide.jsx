import { AiOutlineCalendar } from "react-icons/ai";
import { WiTime4 } from "react-icons/wi";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ a, info }) => {
  const item = a.map((items) => {
    console.log(item);
    const { id, name, speacilist, Date } = items;
    return (
      <div key={id} className="consul-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="swiper-containers"
        >
          <SwiperSlide className="swiper-side">
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
          </SwiperSlide>
        </Swiper>
      </div>
    );
  });
  return <>{item}</>;
};
export default Slider;
