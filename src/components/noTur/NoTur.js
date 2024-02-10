// import NoturImg from "../../img/NoTurBackground.png";
import { Link } from "react-router-dom";
import "./notur.scss";

// import { handleDragStart } from "../../app/function";

const NoTur = () => {
  return (
    <div className="notur flex" style={{ position: "relative" }}>
      <div
        className="flex justif-ss-cent"
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="notur__content container">
            <div className="content__title f-cWh fw700 fs48">
              <p>Не нашли что искали?</p>
            </div>
            <div className="content__text f-cWh fw400 fs32 lh41">
              <p>
                Заполните эту форму и наши агенты помогут вам lorem ipsum dolor sit amet
              </p>
            </div>
            <button className="content__button bgYl fw600 fs24 lh41">
              <Link to="/constructor">Заказать обратный звонок</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTur;
