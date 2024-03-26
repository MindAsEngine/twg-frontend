import { useRef, useState } from "react";
import useScrollOnDrag from "react-scroll-ondrag";

import { handleDragStart } from "../../app/function";

import Album1 from "../../img/album/image1.png";

import "./style.scss";
import AlbumSwiper from "./AlbumSwiper";

const Album = ({ runScroll, medias }) => {
  console.log(medias);
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

  const handleCallback = (el) => {
    setModel(el);
  };

  return (
    <>
      <AlbumSwiper
        albumList={medias}
        model={model}
        swiper={swiper}
        handleCallback={handleCallback}
      />
      <div className="album container m-centr">
        <div
          className="album__wrapper album__scrollable flex"
          {...events}
          ref={ref}
        >
          {medias.map((el, i) => {
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
