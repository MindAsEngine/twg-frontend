import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../img/LogoM.png";
import ChevronDown from "../../img/chevron-down.svg"

import ModalComponent from "../modal/Modal";
import Search from "../search/SearchMini";
import { handleDragStart } from "../../app/function";

import "./style.scss";

export const Header = () => {
  const [state, setState] = useState({
    show: false,
  });

  function modalHandler() {
    setState({ ...state, show: !state.show });
  }

  return (
    <>
      <header className="header row align-cent flex bg2 container m-centr">
        <Link to="/">
          <div className="header__logo">
            <img src={Logo} alt="" onDragStart={handleDragStart} />
          </div>
        </Link>
        <div className="header__i18n">
          <button>
            <span>RU</span>
            <img src={ChevronDown} alt="" />
          </button>
        </div>
        <ul className="header__list flex align-cent justif-ss-cent">
          <li className="header__href"><NavLink>Решения</NavLink></li>
          <li className="header__href"><NavLink>О нас</NavLink></li>
          <li className="header__href"><NavLink>Блог</NavLink></li>
          <li className="header__href"><NavLink>Контакты</NavLink></li>
        </ul>
        <div className="header__search flex" style={{ marginLeft: 'auto' }}>
          <div>
            <Search placeholder={"Найти"} maxWidth={"220px"} />
          </div>
        </div>
        <div className="header__auth flex">
          <button className="bgYl" onClick={modalHandler}>
            Вход
          </button>
          <button className="bg2 f-cWh header__registerbtn" onClick={modalHandler}>
            Регистрация
          </button>
        </div>
      </header>
      <ModalComponent
        open={<>Open</>}
        close={<>Close</>}
        content={<>Lorem, ipsum dolor.</>}
        show={state.show}
        //style={customStyles}
      />
    </>
  );
};
