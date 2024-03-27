import { useSelector } from "react-redux";

import "./aboutUs.scss";
import aboutUsImg from "../../img/AboutUs.png";
import { handleDragStart } from "../../app/function";
import { ReactComponent as Show } from "../../img/show.svg";

const AboutUs = ({ hideButton, handleCallback, index }) => {
  const language = useSelector(
    (state) => state.persistantReducer.language.value
  );
  const text =
    language === "RU"
      ? "О нас"
      : language === "EN"
      ? "About us"
      : "Biz haqimizda";
  return (
    <div className="bgPr">
      <div className="container m-centr aboutus flex justif-ss-betw">
        {hideButton ? (
          <button onClick={() => handleCallback(index)}>
            <Show className="adm_editShow" />
          </button>
        ) : (
          <></>
        )}
        <div className="aboutus__content">
          <p className="aboutus__title fw600 fs40">{text}</p>
          <p className="aboutus__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <img
          onDragStart={handleDragStart}
          className="aboutus__img"
          src={aboutUsImg}
          alt="#"
        />
      </div>
    </div>
  );
};

export default AboutUs;
