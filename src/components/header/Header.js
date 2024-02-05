import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/LogoM.png";
import ModalComponent from "../modal/Modal";
import Seacrh from "../search/Seacrch";
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
        <ul className="header__list flex align-cent justif-ss-cent">
          <li className="header__href">Решения</li>
          <li className="header__href">Ресурсы</li>
          <li className="header__href">О нас</li>
          <li className="header__href">Блог</li>
          <li className="header__href">Контакты</li>
        </ul>
        <div className="header__search flex">
          <div
            className="flex"
            style={{
              maxWidth: "220px",
              width: "100%",
              position: "relative",
              paddingRight: "5px",
            }}
          >
            <Seacrh placeholder={"Найти"} maxWidth={"220px"} />
          </div>
        </div>
        <div className="header__auth" style={{ marginLeft: "24px" }}>
          <button className="bgYl" onClick={modalHandler}>
            Вход
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
