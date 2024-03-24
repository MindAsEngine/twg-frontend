import RatingComponent from "../rating/Rating";
import TagsList from "../tags/TagsList";
import "./asideMap.scss";

import { useRef, useState } from "react";

import Album1 from "../../img/album/image1.png";
import AlbumSwiper from "../album/AlbumSwiper";
import { handleDragStart } from "../../app/function";

const AsideMap = ({ asideShow }) => {
  const album = [
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
  ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiper = useRef();

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
        albumList={album}
        model={model}
        swiper={swiper}
        handleCallback={handleCallback}
      />
      <div className={asideShow ? "map__aside opn" : "map__aside"}>
        {loading ? (
          <div className="news__loading"></div>
        ) : (
          <>
            <div className="aside__album">
              {album.slice(0, 4).map((el, i) => (
                <img
                  src={el.img}
                  className="ad__img"
                  onDoubleClick={() => getItem(el.img, i)}
                  onDragStart={handleDragStart}
                />
              ))}
            </div>
            <div className="aside__title flex justif-ss-betw">
              <p>Hotel AAA</p>
              <RatingComponent
                ratingNumber={60}
                ratingAverage={3.5}
                readonly={true}
              />
            </div>
            <div className="aside__subtitle">
              <p>Nameless st, 104</p>
            </div>
            <div className="aside__text">
              <p>
                Lorem ipsum dolor sit amet ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="aside__tags">
              <TagsList tagsAside={true} tagsColor={"bl"} />
            </div>
            <div className="aside__button">
              <button>Узнать больше</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AsideMap;
