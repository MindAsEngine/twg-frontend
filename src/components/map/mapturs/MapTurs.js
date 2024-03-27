import { useEffect, useState } from "react";
import React, { useRef } from "react";
import useScrollOnDrag from "react-scroll-ondrag";
import "./style.scss";
import CardItem from "../../cardItem/CardItem";
import instance from "../../../app/axiosClient";
import { useSelector } from "react-redux";

const MapTurs = () => {
  const language = useSelector(
    (state) => state.persistantReducer.language.value
  );
  const token = useSelector((state) => state.persistantReducer.token.value);
  const [cardsList, setCardsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // let config = {
      //   headers: {
      //     Authorization: "Bearer " + token,
      //   },
      // };
      try {
        setLoading(true);
        const response = await instance.get(`/travel/${language}/tours`, {
          params: { size: 5, page: 0 },
        });
        setCardsList(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }

    fetchData();
  }, [token, language]);

  const ref = useRef();
  const { events } = useScrollOnDrag(ref);
  return (
    <div className="cardslist mapturslist container">
      {loading ? (
        <div style={{ position: "relative", width: "100%", height: "60px" }}>
          <div className="news__loading"></div>
        </div>
      ) : (
        <div
          className="cardslist__scrollable mapturslist__scrollable flex"
          {...events}
          ref={ref}
        >
          {cardsList.map((card, index) => {
            return (
              <CardItem
                sluga={card.slug}
                key={index}
                title={card.title}
                description={card.introduction}
                rating={card.grade}
                reviewsAmount={card.reviewsAmount}
                img={card.img}
                path={card.path}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MapTurs;
