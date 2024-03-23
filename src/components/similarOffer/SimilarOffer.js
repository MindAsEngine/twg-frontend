import { Link } from 'react-router-dom'
import './similarOffer.scss'

export default function SimilarOffer({ title, img, path }) {
    return (
        <Link to={path || '/'} className="offer" style={{ backgroundImage: `url(${img})` }}>
            { title || '' }
        </Link>
    )
}