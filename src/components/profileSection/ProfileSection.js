import ProfileCard from '../profileCard/ProfileCard'
import './style.scss'

export default function ProfileSection({ icon, title, data, emptyMessage }) {

    return (
        <div className="profilesection">
            <p className="profilesection__header">{icon && <img src={icon} width="20" />} <b>{ title }</b></p>
            <div className="profilesection__items">{ data.length > 0 && data.map((el, index) => <ProfileCard key={index} img={el.img} title={el.title} description={el.description} adultsAmount={el.adultsAmount} daysAmount={el.daysAmount} /> ) || <p className="profilesection__emptymsg">{emptyMessage}</p> }</div>
        </div>
    )
}