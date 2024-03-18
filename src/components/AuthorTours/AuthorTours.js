import { useState, useEffect } from "react";
import React, { useRef } from "react";
import useScrollOnDrag from "react-scroll-ondrag";
import { useSelector } from "react-redux";
import "./authortours.scss";
import CardItem from "../cardItem/CardItem";

export default function AuthorTours({ runScroll }) {
  const language = useSelector((state) => state.language.value);
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
  const [cardsList, setCardsList] = useState([
    {
      title: "Венгрия",
      description: "Lorem ipsum dolor sit amet",
      rating: 5,
      reviewsAmount: 44,
      img: "https://i.imgur.com/1XCMZE5.jpg",
      path: "/",
    },
    {
      title: "Венгрия",
      description: "Lorem ipsum dolor sit amet",
      rating: 4,
      reviewsAmount: 8,
      img: "https://i.imgur.com/1XCMZE5.jpg",
      path: "/",
    },
    {
      title: "Венгрия",
      description: "Lorem ipsum dolor sit amet",
      rating: 1.4,
      reviewsAmount: 13,
      img: "https://i.imgur.com/1XCMZE5.jpg",
      path: "/",
    },
    {
      title: "Венгрия",
      description: "Lorem ipsum dolor sit amet",
      rating: 3.4,
      reviewsAmount: 44,
      img: "https://i.imgur.com/1XCMZE5.jpg",
      path: "/",
    },
    {
      title: "Венгрия",
      description: "Lorem ipsum dolor sit amet",
      rating: 4,
      reviewsAmount: 8,
      img: "https://i.imgur.com/1XCMZE5.jpg",
      path: "/",
    },
    {
      title: "Венгрия",
      description: "Lorem ipsum dolor sit amet",
      rating: 1,
      reviewsAmount: 13,
      img: "https://i.imgur.com/1XCMZE5.jpg",
      path: "/",
    },
  ]);

  const ref = useRef();
  const { events } = useScrollOnDrag(ref);

  // загрузка данных с бэка
  /*useEffect(() => {
        // ...
        setCardsArray(array => {
        // ...
        })
    }, []);*/

  return (
    <div className="cardslist container">
      <h2 className="cardslist__title">{changedText[0]}</h2>
      <p className="cardslist__description">{changedText[1]}</p>
      <div className="cardslist__scrollable flex" {...events} ref={ref}>
        {cardsList.map((card) => {
          return (
            <CardItem
              key={card}
              title={card.title}
              description={card.description}
              rating={card.rating}
              reviewsAmount={card.reviewsAmount}
              img={card.img}
              path={card.path}
            />
          );
        })}
      </div>
    </div>
  );
}
