import { useDispatch, useSelector } from "react-redux";
import { changeMapFromPanel } from "../../store/slices/MapPanel";

const MapPanel = ({ handleCallback }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.mapPanel.value);
  const handleCipher = (string) => {
    dispatch(changeMapFromPanel(string));
  };

  return (
    <ul className="panel__buttons flex">
      <li
        onClick={() => {
          handleCallback("turism");
          handleCipher("turism");
        }}
        className={counter == "turism" ? "active" : ""}
      >
        Туризм
      </li>
      <li
        onClick={() => {
          handleCallback("medic");
          handleCipher("medic");
        }}
        className={counter == "medic" ? "active" : ""}
      >
        Медицина
      </li>
      <li
        onClick={() => {
          handleCallback("bus");
          handleCipher("bus");
        }}
        className={counter == "bus" ? "active" : ""}
      >
        Автобусные туры
      </li>
    </ul>
  );
};

export default MapPanel;
