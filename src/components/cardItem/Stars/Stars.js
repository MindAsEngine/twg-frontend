import './stars.scss'

export default function Stars({ rating, reviewsAmount }) {
    const maxRating = 5;

    // массив вида [1, 2, 3, 4, ...] до maxRating
    // по нему генерируются звёзды
    const starsArray = Array.from({length: maxRating}, (_, i) => i + 1);

    return (
        <div style={{ color: '#D9D9D9' }}>
            { starsArray.map((star) => {
                if (star > rating) { return <span className="star" key={star}>★</span> }
                else { return <span key={star} className="star star__active">★</span> }
            }) } ({reviewsAmount})
        </div>
    )
}