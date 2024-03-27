import { useState } from "react";
import { useSelector } from "react-redux";
import "./notur.scss";
import CallbackModal from "../modal/CallbackModal";
import NoturImg from "../../img/about1.png";
// import { handleDragStart } from "../../app/function";
import { ReactComponent as Show } from "../../img/show.svg";

const NoTur = ({ hideButton, handleCallback, index }) => {
  const [state, setState] = useState({
    show: false,
  });

  function modalHandler() {
    setState({ ...state, show: !state.show });
  }

  function parentCallBack(el) {
    setState({ ...state, show: el });
  }
  const language = useSelector(
    (state) => state.persistantReducer.language.value
  );
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
    <>
      <div className="notur noTurbg flex" style={{ position: "relative" }}>
        <div className="flex justif-ss-cent">
          <div className="container notur__image" style={{ width: "100%" }}>
            <div className="notur__content container">
              {hideButton ? (
                <button onClick={() => handleCallback(index)}>
                <Show className="adm_editShow" />
              </button>
              ) : (
                <></>
              )}
              <img alt="" className="content__mobileimg" src={NoturImg} />
              <div className="content__title f-cWh fw700 fs48">
                <p>{changedText[0]}</p>
              </div>
              <div className="content__text f-cWh fw400 fs24 lh41">
                <p>{changedText[1]}</p>
              </div>
              <button
                className="content__button bgYl fw600 fs24"
                onClick={modalHandler}
              >
                <p>{changedText[2]}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <CallbackModal
        open={<>Open</>}
        close={<>Close</>}
        content={<>Lorem, ipsum dolor.</>}
        show={state.show}
        //style={customStyles}
        callBack={parentCallBack}
      />
    </>
  );
};

export default NoTur;
