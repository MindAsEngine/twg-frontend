import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../../img/LogoM.png";
import { DropdownLg } from "../cardItem/Dropdown/DropdownLan";

import Search from "../search/Search";
import { handleDragStart } from "../../app/function";

import "./style.scss";
import ModalAuthQuestComponent from "../modal/ModalQuest";

export const Header = () => {
  const [state, setState] = useState({
    show: false,
  });

  const dispatch = useDispatch();
  function modalHandler() {
    setState({ ...state, show: !state.show });
  }

  function parentCallBack(el) {
    setState({ ...state, show: el });
  }

  const language = useSelector((state) => state.language.value);
  const changedText =
    language === "RU"
      ? {
          links: ["Решения", "О нас", "Блог", "Кoнтакты"],
          auth: ["Вход", "Регистрация"],
        }
      : language === "EN"
      ? {
          links: ["Solutions", "About us", "Blog", "Contacts"],
          auth: ["Login", "Registration"],
        }
      : {
          links: ["Yechimlar", "Biz haqimizda", "Blog", "Aloqa"],
          auth: ["Kirish", "Ro'yxatdan o'tish"],
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
          <Search maxWidth={"220px"} />
        </div>
        <div className="header__auth flex">
          <button className="bgYl" onClick={modalHandler}>
            {changedText.auth[0]}
          </button>
          <button
            className="bg2 f-cWh header__registerbtn"
            onClick={modalHandler}
          >
            {changedText.auth[1]}
          </button>
        </div>
      </header>

      <ModalAuthQuestComponent
        open={<>Open</>}
        close={<>Close</>}
        content={<>Lorem, ipsum dolor.</>}
        show={state.show}
        //style={customStyles}
        contentModal={<ModalAdmin />}
        callBack={parentCallBack}
        contentModal={<ModalAdmin />}
        callBack={parentCallBack}
      />
    </>
  );
};

//Модалки
const ModalAdmin = () => {
  return <>Lorem, ipsum dolor.</>;
};
