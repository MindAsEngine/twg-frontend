import { useState } from "react";
import React, { useRef } from "react";
import useScrollOnDrag from "react-scroll-ondrag";
import "./style.scss";
import CardItem from "../../cardItem/CardItem";

const MapTurs = () => {
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
  return (
    <div className="cardslist mapturslist container">
      <div className="cardslist__scrollable mapturslist__scrollable flex" {...events} ref={ref}>
        {cardsList.map((card, index) => {
          return (
            <CardItem
              key={index}
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
};

export default MapTurs;
