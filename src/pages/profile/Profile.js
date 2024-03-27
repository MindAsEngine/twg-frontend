import { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import ProfileSection from "../../components/profileSection/ProfileSection";

import SelectedToursIcon from "../../img/profile/selectedtoursicon.svg";
import FavoriteIcon from "../../img/profile/favoriteicon.svg";
import ArchiveIcon from "../../img/profile/archiveicon.svg";
import instance from "../../app/axiosClient";
import { useSelector } from "react-redux";

export default function Profile() {
  const [state, setState] = useState({
    loading: false,
  });
  const [user, setUser] = useState({
    email: "",
    picture: "https://i.imgur.com/EBOf5v2.png",
    firstName: "",
    lastName: "",
    patronymic: "",
    phone: "",
    username: "",
  });
  const token = useSelector((state) => state.persistantReducer.token.value);
  useEffect(() => {
    
    async function fetchData() {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      try {
        setState({ ...state, loading: true });
        const response = await instance.get(`profile/me`, config);
        setUser(response.data);
        console.log(response.data);
        setState({ ...state, loading: false });
      } catch (error) {
        setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  }, [token]);
  const [selectedTours, setSelectedTours] = useState([
    {
      img: "https://i.imgur.com/rG1RVQA.png",
      title: "Кипр Тур А",
      description:
        "Респу́блика Кипр (греч. Κυπρ     Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs...",
      adultsAmount: 2,
      daysAmount: 4,
    },
    {
      img: "https://i.imgur.com/rG1RVQA.png",
      title: "Кипр Тур А",
      description:
        "Респу́блика Кипр (греч. Κυπρ     Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs...",
      adultsAmount: 2,
      daysAmount: 4,
    },
    {
      img: "https://i.imgur.com/rG1RVQA.png",
      title: "Кипр Тур А",
      description:
        "Респу́блика Кипр (греч. Κυπρ     Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs...",
      adultsAmount: 2,
      daysAmount: 4,
    },
  ]);

  return (
    <div className="profile container">
      <aside className="profile__userinfo">
        <img
          className="profile__avatar"
          src={user.picture || "https://i.imgur.com/EBOf5v2.png"}
        />
        <p>
          <b>
            {user.firstName} {user.lastName}
          </b>
        </p>
        <p>@{user.username}</p>
        <p>{user.email}</p>
        <Link className="profile__editbtn">Редактировать</Link>
      </aside>
      <div className="profile__sections">
        <ProfileSection
          icon={SelectedToursIcon}
          title="Вы выбрали туры"
          data={selectedTours}
          emptyMessage="Вы не выбрали ни одного тура"
        />
        <ProfileSection
          icon={FavoriteIcon}
          title="Избранное"
          data={[]}
          emptyMessage="Вы не добавили в избранное ни одного тура"
        />
        <ProfileSection
          icon={ArchiveIcon}
          title="История заказов"
          data={[]}
          emptyMessage="Пусто"
        />
      </div>
    </div>
  );
}
