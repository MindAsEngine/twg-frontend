import { Link } from "react-router-dom"

import StandartSvg from "../../img/userIcon.svg";

import "./style.scss"

export default function MobileSidebar({ show, changedText, user, openAuthModal, onAction }) {
    return (
        <div className={`sidebar ${show ? 'show': ''}`}>
            <div class="sidebar__actions">
          {/* видно, если пользователь не авторизован */}
          {!user && (
            <button className="bgYl" onClick={() => {openAuthModal(0); onAction()}}>
              {changedText.auth[0]}
            </button>
          )}
          {!user && (
            <button
              className="sidebar__actions__registerbtn"
              onClick={() => { openAuthModal(1); onAction() }}
            >
              {changedText.auth[1]}
            </button>
          )}
          {/* видно, если пользователь авторизован */}
          {user && (
            <Link to="/profile">
              <button className="bgYl" onClick={onAction}>{changedText.auth[2]}</button>
            </Link>
          )}
          {user && (
            <button className="header__auth__avatar" onClick={onAction}>
              <img src={StandartSvg}></img>
            </button>
          )}
        </div>
            <ul>
                <li><Link to="/" onClick={onAction}>{changedText.links[0]}</Link></li>
                <li><Link to="/" onClick={onAction}>{changedText.links[1]}</Link></li>
                <li><Link to="/" onClick={onAction}>{changedText.links[2]}</Link></li>
                <li><Link to="/" onClick={onAction}>{changedText.links[3]}</Link></li>
            </ul>
        </div>
    )
}