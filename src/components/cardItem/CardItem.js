import { Link } from 'react-router-dom';
import './carditem.scss'
import Stars from './Stars/Stars';

const CardItem = ({ title, description, rating, reviewsAmount, img, path }) => {
  return (
    <>
      <div className="card">
        <img className="card__thumbnail" src={img} alt="" />
        <div className="card__wrapper flex">
          <div className="card__title flex justif-ss-betw">
            <p>{ title }</p>
            <div className="card__rating"><Stars rating={rating} reviewsAmount={reviewsAmount} /></div>
          </div>
          <div className="card__description">
            <p>{ description }</p>
          </div>
          <div className="flex justif-ss-end">
            <button>
            <Link to={path}>Узнать больше</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
