import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FeatureImg from "../../img/featureGlobe.png";
import "./feature.scss";
import { handleDragStart } from "../../app/function";

const Feature = () => {
  const language = useSelector((state) => state.language.value);
  const changedText =
    language === "RU"
      ? {
          title: "Собери свой тур",
          text: "Вы можете оставить заявку и мы подберём лучший вариант специально для вас",
          button: "Собрать тур",
        }
      : language === "EN"
      ? {
          title: "Pack up your tour",
          text: "You can leave a request and we will select the best option especially for you",
          button: "Assemble a tour",
        }
      : {
          title: "Sayohatingizni yig'ing",
          text: "Siz so'rov qoldirishingiz mumkin va biz eng yaxshi variantni tanlaymiz ayniqsa siz uchun",
          button: "Turni yig'ing",
        };
  return (
    <div className="feature flex container" style={{ position: "relative" }}>
      <div className="flex justif-ss-cent">
        <div className="container" style={{ width: "100%" }}>
          <div className="feature__content">
            <LazyLoadImage src={FeatureImg} onDragStart={handleDragStart} className="content__mobileimg" />
            <div className="content__title f-cBlue fw700 fs64">
              <p>{changedText.title}</p>
            </div>
            <div className="content__text f-cBlue fw400 fs32 lh41">
              <p>{changedText.text}</p>
            </div>
            <button className="content__button bgYlGr fw600 fs24 lh41">
              <Link to="/const">{changedText.button}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
