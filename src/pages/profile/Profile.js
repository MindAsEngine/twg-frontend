import { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import ProfileSection from "../../components/profileSection/ProfileSection";

import SelectedToursIcon from "../../img/profile/selectedtoursicon.svg";
import FavoriteIcon from "../../img/profile/favoriteicon.svg";
import ArchiveIcon from "../../img/profile/archiveicon.svg";
import instance from "../../app/axiosClient";
import { useDispatch, useSelector } from "react-redux";

import StandartSvg from "../../img/userIcon.svg";
import { changeToken } from "../../store/slices/Token";

export default function Profile() {
  const [state, setState] = useState({
    loading: false,
  });
  const userAvatar = useRef();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    picture: "",
    firstName: "",
    lastName: "",
    patronymic: "",
    phone: "",
    username: "",
  });
  const tokenFromLocalStorage = localStorage.getItem("token");
  const tokenValue = useSelector(
    (state) => state.persistantReducer.token.value
  );

  const token = tokenValue || tokenFromLocalStorage;
  useEffect(() => {
    async function fetchData() {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      try {
        setState({ ...state, loading: true });
        userAvatar.current.classList.add("load");
        const response = await instance.get(`profile/me`, config);
        userAvatar.current.classList.remove("load");
        setUser(response.data);
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
  const handlePost = (values) => {
    async function fetchData() {
      try {
        //setState({ ...state, loading: true });
        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        const response = await instance.post("/auth/users/logout", {}, config);

        dispatch(changeToken(null));
        localStorage.removeItem("token");
        //Обновление страницы после получения данных в redux
        window.location.reload();
      } catch (error) {
        //setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  };
  return (
    <div className="profile container">
      <aside className="profile__userinfo">
        <div className="img__wrapper" ref={userAvatar}>
          <img className="profile__avatar" src={user.picture || StandartSvg} />
        </div>
        <p>
          <b>
            {user.firstName} {user.lastName}
          </b>
        </p>
        <p>@{user.username}</p>
        <p>{user.email}</p>

        {/* <Link className="profile__editbtn">Редактировать</Link> */}
        <button onClick={() => handlePost()} className="profile__editbtn">
          Выйти
        </button>
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
