import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../../img/LogoM.png";
import { DropdownLg } from "../cardItem/Dropdown/DropdownLan";

import Search from "../search/Search";
import { handleDragStart } from "../../app/function";

import "./style.scss";
// import ModalAuthQuestComponent from "../modal/ModalQuest";

import ModalAuthComponent from "../modal/auth/AuthModal";
import StandartSvg from "../../img/userIcon.svg";
import instance from "../../app/axiosClient";
import { getUser } from "../../store/slices/User";

export const Header = () => {
  // авторизован ли пользователь или нет
  const userProfile = useSelector((state) => state.persistantReducer.user);
  const dispatch = useDispatch();
  //Тут должен быть запрос на сервер по поводу фоток, пока его нету(

  const tokenFromLocalStorage = localStorage.getItem("token");
  const tokenValue = useSelector(
    (state) => state.persistantReducer.token.value
  );

  const token = tokenValue || tokenFromLocalStorage;
  const [user, setUser] = useState(token !== null);

  useEffect(() => {
    if (token != null) {
      async function fetchData() {
        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        try {
          const response = await instance.get(`profile/me`, config);
          dispatch(getUser(response.data));
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();
    }
  }, [token]);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalTab, setAuthModalTab] = useState(0);

  function openAuthModal(initTab) {
    setShowAuthModal(true);
    setAuthModalTab((current) => initTab);
  }
  function closeAuthModal() {
    setShowAuthModal(false);
  }
  function onAfterAuthModalClose() {
    setAuthModalTab((current) => -1);
  }
  const language = useSelector(
    (state) => state.persistantReducer.language.value
  );

  const changedText =
    language === "RU"
      ? {
          links: ["Решения", "О нас", "Блог", "Кoнтакты"],
          auth: ["Вход", "Регистрация", "Мои туры"],
        }
      : language === "EN"
      ? {
          links: ["Solutions", "About us", "Blog", "Contacts"],
          auth: ["Sign in", "Sign up", "My Tours"],
        }
      : {
          links: ["Yechimlar", "Biz haqimizda", "Blog", "Aloqa"],
          auth: ["Kirish", "Ro'yxatdan o'tish", "Mening sayohatlarim"],
        };
  return (
    <>
      <header className="header row align-cent flex bg2 container m-centr">
        <Link to="/">
          <div className="header__logo">
            <img src={Logo} alt="" onDragStart={handleDragStart} />
          </div>
        </Link>
        <div className="header__i18n">
          <DropdownLg />
        </div>
        <ul className="header__list flex align-cent justif-ss-cent">
          <li className="header__href">
            <Link to="">{changedText.links[0]}</Link>
          </li>
          <li className="header__href">
            <Link to="">{changedText.links[1]}</Link>
          </li>
          <li className="header__href">
            <Link to="">{changedText.links[2]}</Link>
          </li>
          <li className="header__href">
            <Link to="">{changedText.links[3]}</Link>
          </li>
        </ul>
        <div className="header__search flex" style={{ marginLeft: "auto" }}>
          <Search />
        </div>
        <div className="header__auth flex">
          {/* видно, если пользователь не авторизован */}
          {!user && (
            <button className="bgYl" onClick={() => openAuthModal(0)}>
              {changedText.auth[0]}
            </button>
          )}
          {!user && (
            <button
              className="bg2 f-cWh header__registerbtn"
              onClick={() => openAuthModal(1)}
            >
              {changedText.auth[1]}
            </button>
          )}
          {/* видно, если пользователь авторизован */}
          {user && (
            <Link to="/profile">
              <button className="bgYl">{changedText.auth[2]}</button>
            </Link>
          )}
          {user && (
            <button className="header__auth__avatar">
              {userProfile.avatar ? (
                <img src={userProfile.avatar} alt="Avatar" />
              ) : (
                <img
                  src={"https://i.imgur.com/u0JREci.png"}
                  alt="Fallback Avatar"
                />
              )}
            </button>
          )}
        </div>
      </header>

      <ModalAuthComponent
        show={showAuthModal}
        initTab={authModalTab}
        onClose={closeAuthModal}
        onAfterClose={onAfterAuthModalClose}
      />
    </>
  );
};

//Модалки
/*const ModalAdmin = () => {
  return <>
  Lorem, ipsum dolor.</>;
};*/
