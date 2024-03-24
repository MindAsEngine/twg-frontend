import './style.scss'

export default function ProfileCard({
    img, title, description, adultsAmount, daysAmount
}) {
    return (
        <div className="profilecard">
            <div className="profilecard__main">
                <img className="profilecard__main__thumbnail" src={img} />
                <div className="profilecard__main__content">
                    <div className="profilecard__main__floatdata">
                        <p>{ adultsAmount } взрослых</p>
                        <p>{ daysAmount } дня</p>
                    </div>
                    <p className="profilecard__main__title">{ title }</p>
                    <p className="profilecard__main__desc">{ description }</p>
                </div>
            </div>
        </div>
    )   
}