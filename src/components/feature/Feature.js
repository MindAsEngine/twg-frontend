import { Link } from "react-router-dom";
import "./feature.scss";

// import FeatureImg from "../../img/featureVector.svg";
// import { handleDragStart } from "../../app/function";

const Feature = () => {
  return (
    <div className="feature flex container" style={{ position: "relative" }}>
      <div
        className="flex justif-ss-cent"
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="feature__content">
            <div className="content__title f-cWh fw700 fs48">
              <p>Собери свой тур</p>
            </div>
            <div className="content__text f-cWh fw400 fs32 lh41">
              <p>
                Вы можете оставить заявку и мы подберём лучший вариант специально для вас
              </p>
            </div>
            <button className="content__button bgYl fw600 fs24 lh41">
              <Link to="/constructor">Собрать тур</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
