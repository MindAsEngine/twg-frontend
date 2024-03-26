import { useDispatch, useSelector } from "react-redux";
import { changeMapFromPanel } from "../../store/slices/MapPanel";

const MapPanel = ({ handleCallback }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.persistantReducer.mapPanel.value);
  const handleCipher = (string) => {
    dispatch(changeMapFromPanel(string));
  };
  const language = useSelector((state) => state.persistantReducer.language.value);
  const changedText =
    language === "RU"
      ? ["Туризм", "Медицина", "Автобусные туры"]
      : language === "EN"
      ? ["Tourism", "Medicine", "Bus tours"]
      : ["Turizm", "Tibbiyot", "Avtobus sayohatlari"];
  return (
    <>
      <ul className="panel__buttons flex">
        <li
          onClick={() => {
            handleCallback("turism");
            handleCipher("turism");
          }}
          className={counter == "turism" ? "active" : ""}
        >
          {changedText[0]}
        </li>
        <li
          onClick={() => {
            handleCallback("medic");
            handleCipher("medic");
          }}
          className={counter == "medic" ? "active" : ""}
        >
          {changedText[1]}
        </li>
        <li
          onClick={() => {
            handleCallback("bus");
            handleCipher("bus");
          }}
          className={counter == "bus" ? "active" : ""}
        >
          {changedText[2]}
        </li>
      </ul>
    </>
  );
};

export default MapPanel;
