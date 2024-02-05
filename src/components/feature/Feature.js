import FeatureImg from "../../img/feature.png";
import { Link } from "react-router-dom";

import { handleDragStart } from "../../app/function";
import "./feature.scss";


const Feature = () => {
  return (
    <div className="feature flex" style={{ position: "relative" }}>
      <div
        className="flex justif-ss-cent"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="feature__content">
            <div className="content__title f-cWh fw700 fs96 lh123">
              <p>Собери свой тур</p>
            </div>
            <div className="content__text f-cWh fw400 fs32 lh41">
              <p>
                Вы можете оставить заявку и мы подберём лучший вариант
                специально для вас
              </p>
            </div>
            <button className="content__button bgYl fw400 fs32 lh41">
              <Link to="/constructor">Собрать тур</Link>
            </button>
          </div>
        </div>
      </div>
      <img
        onDragStart={handleDragStart}
        className="feature__img"
        src={FeatureImg}
        alt="#"
        style={{
          marginLeft: "auto",
          maxHeight: "549px",
          maxWidth: "1032px",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Feature;
