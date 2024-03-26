import { ReactComponent as Close } from "../../img/Close.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import { handleDragStart } from "../../app/function";

const AlbumSwiper = ({ albumList, model, swiper, handleCallback }) => {
  return (
    <div className={model ? "model__wrapper open" : "model__wrapper"}>
      <div className={model ? "model open" : "model"}>
        <div className="model__controller">
          <Close onClick={() => handleCallback(false)} />
        </div>
        <Swiper spaceBetween={120} slidesPerView={1} ref={swiper}>
          {albumList.map((el, i) => {
            return (
              <SwiperSlide>
                <img src={el.img} onDragStart={handleDragStart} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AlbumSwiper;
