import { Field } from "formik";
import { useState } from "react";
import Rating from "react-rating";
import ratingEmpty from "../../img/ratingStarempty.svg";
import ratingFull from "../../img/ratingStarFull.svg";
import "./style.scss";
import { handleDragStart } from "../../app/function";

const RatingComponent = ({
  ratingNumber,
  ratingAverage,
  readonly,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(0);

  const onStarClick = (nextValue) => {
    setRating(nextValue);
    onRatingChange(nextValue); // Вызываем коллбэк с новым значением рейтинга
  };

  return (
    <div className="flex rating">
      <div className="rating__body flex">
        <Rating
          emptySymbol={<img onDragStart={handleDragStart} src={ratingEmpty} className="icon" />}
          fullSymbol={<img onDragStart={handleDragStart} src={ratingFull} className="icon" />}
          onChange={onStarClick}
          initialRating={ratingAverage == null ? rating : ratingAverage}
          readonly={readonly}
        />
        {ratingNumber == null ? (
          ""
        ) : (
          <div className="rating__value fw400 fs16 lh20">({ratingNumber})</div>
        )}
      </div>
    </div>
  );
};

export default RatingComponent;
