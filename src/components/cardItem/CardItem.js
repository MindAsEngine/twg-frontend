import { Link } from "react-router-dom";
import "./carditem.scss";
import RatingComponent from "../rating/Rating";
import { handleDragStart } from "../../app/function";

const CardItem = ({
  sluga,
  title,
  description,
  rating,
  reviewsAmount,
  img,
  path,
}) => {
  return (
    <>
      <div className="card">
        <img
          className="card__thumbnail"
          src={img ? img : 'https://i.imgur.com/yVaa0la.png'}
          alt=""
          onDragStart={handleDragStart}
        />
        <div className="card__wrapper flex">
          <div className="card__title flex justif-ss-betw">
            <p>{title}</p>
            <div className="card__rating">
              <RatingComponent
                ratingNumber={reviewsAmount}
                ratingAverage={rating}
                readonly={true}
              />
            </div>
          </div>
          <div className="card__description">
            <p>{description}</p>
          </div>
          <div className="flex justif-ss-cent">
            <button className="card__button">
              <Link to={`/tur/${sluga}`}>Узнать больше</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
