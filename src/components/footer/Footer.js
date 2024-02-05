import Logo from "../../img/LogoM.png";
import { handleDragStart } from "../../app/function";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer row flex bg2 container m-centr f-cWh">
      <div className="footer__logo">
        <img src={Logo} alt="" onDragStart={handleDragStart} />
      </div>
      <ul className="footer__list flex">
        <div>
          <p className="list__title">Группа ссылок подвал 1</p>
          <ul className="list__item flex">
            <li className="footer__href">Решения</li>
            <li className="footer__href">Ресурсы</li>
            <li className="footer__href">О нас</li>
            <li className="footer__href">Блог</li>
            <li className="footer__href">Контакты</li>
          </ul>
        </div>
        <div>
          <p className="list__title">Группа ссылок подвал 1</p>
          <ul className="list__item flex">
            <li className="footer__href">Решения</li>
            <li className="footer__href">Ресурсы</li>
            <li className="footer__href">О нас</li>
            <li className="footer__href">Блог</li>
            <li className="footer__href">Контакты</li>
          </ul>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
