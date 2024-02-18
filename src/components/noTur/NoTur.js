import NoturImg from "../../img/NoTurImage.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./notur.scss";

// import { handleDragStart } from "../../app/function";

const NoTur = () => {
  const language = useSelector((state) => state.language.value);
  const changedText =
    language === "RU"
      ? [
          "Остались вопросы?",
          "Заполните эту форму и наши агенты помогут вам lorem ipsum dolor sit amet",
          "Заказать обратный звонок",
        ]
      : language === "EN"
      ? [
          "Any questions?",
          "Fill out this form and our agents will help you with lorem ipsum dolor sit amet",
          "Request a call back",
        ]
      : [
          "Savollaringiz qoldimi?",
          "Ushbu formasini to'ldiring va bizning agentlarimiz sizga yordam beradilar lorem ipsum dolor sit amet",
          "Qayta qo'ng'iroq buyurtma qiling",
        ];
  return (
    <div className="notur flex" style={{ position: "relative" }}>
      <div className="flex justif-ss-cent">
        <div className="container notur__image" style={{ width: "100%" }}>
          <div className="notur__content container">
            <img alt="" className="content__mobileimg" src={NoturImg} />
            <div className="content__title f-cBl fw700 fs48">
              <p>{changedText[0]}</p>
            </div>
            <div className="content__text f-cBl fw400 fs24 lh41">
              <p>{changedText[1]}</p>
            </div>
            <button className="content__button bgYl fw600 fs24">
              <Link to="/constructor">{changedText[2]}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTur;
