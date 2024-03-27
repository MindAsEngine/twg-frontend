import { useState } from "react";
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
import MenuIcon from "../../img/menuicon.svg";
import WhiteX from "../../img/whitex.svg";

import MobileSidebar from "../mobileSidebar/MobileSidebar";

export const Header = () => {
  // по значению user ниже определяется,
  // авторизован ли пользователь или нет
  const userState = useSelector((el) => el.persistantReducer.user);

  //Тут должен быть запрос на сервер по поводу фоток, пока его нету(

  //
  const [user, setUser] = useState(userState.name !== null);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalTab, setAuthModalTab] = useState(0);

  // отображение мобильного меню
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  function handleSidebar() {
    setShowMobileSidebar(curr => !curr);
  }

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
        <div className="header__logo">
          <Link to="/">
          <img src={Logo} alt="" onDragStart={handleDragStart} />
          </Link>
        </div>
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
            <Link to="/profile">
              <button className="header__auth__avatar">
                <img src={StandartSvg}></img>
              </button>
            </Link>
          )}
        </div>
        <button className="header__mobilemenu" onClick={handleSidebar}>
          {!showMobileSidebar && <img src={MenuIcon} alt="" onDragStart={e => e.preventDefault()} /> }
          {showMobileSidebar && <img src={WhiteX} alt="" onDragStart={e => e.preventDefault()} /> }
        </button>
      </header>

      <MobileSidebar
        show={showMobileSidebar}
        changedText={changedText}
        user={user}
        openAuthModal={openAuthModal}
        onAction={() => setShowMobileSidebar(false)}
      />

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
