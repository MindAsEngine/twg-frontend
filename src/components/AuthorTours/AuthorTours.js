import CardItem from "../cardItem/CardItem";
import { useState, useEffect } from "react";
import './authortours.scss'

export default function AuthorTours() {
    const [cardsList, setCardsList] = useState([
      {
        title: 'Венгрия',
        description: 'Lorem ipsum dolor sit amet',
        rating: 5,
        reviewsAmount: 44,
        img: 'https://i.imgur.com/1XCMZE5.jpg',
        path: '/'
      },
      {
        title: 'Венгрия',
        description: 'Lorem ipsum dolor sit amet',
        rating: 4,
        reviewsAmount: 8,
        img: 'https://i.imgur.com/1XCMZE5.jpg',
        path: '/'
      },
      {
        title: 'Венгрия',
        description: 'Lorem ipsum dolor sit amet',
        rating: 1,
        reviewsAmount: 13,
        img: 'https://i.imgur.com/1XCMZE5.jpg',
        path: '/'
      }
    ]);

    // загрузка данных с бэка
    /*useEffect(() => {
        // ...
        setCardsArray(array => {
        // ...
        })
    }, []);*/

    return (
        <div className="cardslist container">
            <h2 className="cardslist__title">Авторские туры</h2>
            <p className="cardslist__description">Наши специалисты подобрали лучшие предложения специально для вас</p>
            <div className="cardslist__scrollable flex">
                {cardsList.map((card) => {
                    return <CardItem key={card} title={card.title} description={card.description} rating={card.rating} reviewsAmount={card.reviewsAmount} img={card.img} path={card.path} />
                })}
            </div>
        </div>
    )
}