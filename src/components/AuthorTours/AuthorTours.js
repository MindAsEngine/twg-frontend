import { useState, useEffect } from "react";
import React, { useRef } from "react";
import useScrollOnDrag from "react-scroll-ondrag";
import { useSelector } from "react-redux";
import "./authortours.scss";
import CardItem from "../cardItem/CardItem";
import instance from "../../app/axiosClient";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReactComponent as Show } from "../../img/show.svg";
import { ReactComponent as Hide } from "../../img/hidenEye.svg";

export default function AuthorTours({
  runScroll,
  hideButton,
  handleCallback,
  index,
  visible
}) {
  const language = useSelector(
    (state) => state.persistantReducer.language.value
  );
  const [page, setPage] = useState(1);
  const changedText =
    language === "RU"
      ? [
          "Авторские туры",
          "Наши специалисты подобрали лучшие предложения специально для вас",
        ]
      : language === "EN"
      ? [
          "Author's tours",
          "Our specialists have selected the best offers specially for you",
        ]
      : [
          "Mualliflik sayohatlari",
          "Bizning mutaxassislar siz uchun eng yaxshi takliflarni maxsus tanlashdi",
        ];
  const [cardsList, setCardsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = useRef();
  const { events } = useScrollOnDrag(ref);
  let token = useSelector((state) => state.persistantReducer.token.value);
  token == "" ? (token = localStorage.token) : (token = token);
  useEffect(() => {
    async function fetchData() {
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

  return (
    <div className="cardslist container">
      {hideButton ? (
        <button className="adm_editShow" onClick={() => handleCallback(index)}>
          {visible ? <Show /> : <Hide className="hide_svg" />}
        </button>
      ) : (
        <></>
      )}
      <h2 className="cardslist__title">{changedText[0]}</h2>
      <p className="cardslist__description">{changedText[1]}</p>
      {loading ? (
        <div style={{ position: "relative", width: "100%", height: "60px" }}>
          <div className="news__loading"></div>
        </div>
      ) : (
        <div className="cardslist__scrollable flex" {...events} ref={ref}>
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
}
