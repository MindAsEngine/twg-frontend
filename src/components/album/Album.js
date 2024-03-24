import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import useScrollOnDrag from "react-scroll-ondrag";

import "swiper/css";

import { handleDragStart } from "../../app/function";
import { ReactComponent as Close } from "../../img/Close.svg";

import Album1 from "../../img/album/image1.png";

import "./style.scss";

const Album = ({ runScroll }) => {
  const ref = useRef();
  const swiper = useRef();
  const { events } = useScrollOnDrag(ref);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState([]);

  const getItem = (imgSrc, i) => {
    setTempImgSrc(imgSrc, i);
    setModel(true);
    swiper.current.swiper.slideTo(i);
  };

  const [albumList, setAlbumList] = useState([
    {
      img: Album1,
    },
    {
      img: Album1,
    },
    {
      img: Album1,
    },
    {
      img: Album1,
    },
    {
      img: Album1,
    },
    {
      img: Album1,
    },
    {
      img: Album1,
    },
    {
      img: Album1,
    },
  ]);

  return (
    <>
      <div className={model ? "model__wrapper open" : "model__wrapper"}>
        <div className={model ? "model open" : "model"}>
          <div className="model__controller">
            <Close onClick={() => setModel(false)} />
          </div>
          <Swiper spaceBetween={120} slidesPerView={1} ref={swiper}>
            {albumList.map((el, i) => {
              return (
                <SwiperSlide>
                  <img
                    src={el.img}
                    onDragStart={handleDragStart}
                    onDoubleClick={() => getItem(el.img, i)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="album container m-centr">
        <div
          className="album__wrapper album__scrollable flex"
          {...events}
          ref={ref}
        >
          {albumList.map((el, i) => {
            return (
              <img
                src={el.img}
                onDragStart={handleDragStart}
                onDoubleClick={() => getItem(el.img, i)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Album;
