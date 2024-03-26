import { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import ProfileSection from "../../components/profileSection/ProfileSection";

import SelectedToursIcon from '../../img/profile/selectedtoursicon.svg'
import FavoriteIcon from '../../img/profile/favoriteicon.svg'
import ArchiveIcon from '../../img/profile/archiveicon.svg'
import ProfileUploadTours from "../../components/profileUploadTours/ProfileUploadTours";
import ProfileCurrencyRate from "../../components/profileCurrencyRate/ProfileCurrencyRate";
import ProfileAddedAgents from "../../components/profileAddedAgents/ProfileAddedAgents";

export default function ProfileAgent() {
    const [userData, setUserData] = useState({
        picture: 'https://i.imgur.com/EBOf5v2.png',
        firstName: 'Имя',
        lastName: 'Фамилия',
        username: 'login',
        email: 'mail@mail.uz'
    })

    const [selectedTours, setSelectedTours] = useState([
        {
            img: 'https://i.imgur.com/rG1RVQA.png',
            title: 'Кипр Тур А',
            description: 'Респу́блика Кипр (греч. Κυπρ     Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs...',
            adultsAmount: 2,
            daysAmount: 4
        },
        {
            img: 'https://i.imgur.com/rG1RVQA.png',
            title: 'Кипр Тур А',
            description: 'Респу́блика Кипр (греч. Κυπρ     Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs...',
            adultsAmount: 2,
            daysAmount: 4
        },
        {
            img: 'https://i.imgur.com/rG1RVQA.png',
            title: 'Кипр Тур А',
            description: 'Респу́блика Кипр (греч. Κυπρ     Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs...',
            adultsAmount: 2,
            daysAmount: 4
        }
    ])

    const [agentsList, setAgentsList] = useState([
        {
            img: 'https://i.imgur.com/EBOf5v2.png',
            firstName: 'Имя',
            lastName: 'Фамилия'
        },
        {
            img: 'https://i.imgur.com/EBOf5v2.png',
            firstName: 'Имя',
            lastName: 'Фамилия'
        },
        {
            img: 'https://i.imgur.com/EBOf5v2.png',
            firstName: 'Имя',
            lastName: 'Фамилия'
        },
        {
            img: 'https://i.imgur.com/EBOf5v2.png',
            firstName: 'Имя',
            lastName: 'Фамилия'
        }
    ])

    return (
        <div className="profile container">
            <aside className="profile__userinfo">
                <img className="profile__avatar" src={userData.picture} />
                <p><b>{ userData.firstName } { userData.lastName }</b></p>
                <p>@{ userData.username }</p>
                <p>{ userData.email }</p>
                <Link className="profile__editbtn">Редактировать</Link>
            </aside>
            <div className="profile__sections">
                <ProfileSection icon={SelectedToursIcon} title="Вы выбрали туры" data={selectedTours} emptyMessage="Вы не выбрали ни одного тура" />
                <ProfileSection title="Вы создали туры" data={[]} emptyMessage="Вы не создали ни одного тура" />
                <ProfileAddedAgents list={agentsList} />
                <ProfileUploadTours />
                <ProfileCurrencyRate />
            </div>
        </div>
    )
}