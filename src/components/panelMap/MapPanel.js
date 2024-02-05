import { useState } from "react";

const MapPanel = () => {
  const [state, setState] = useState({
    panelShow: "tur",
  });

  return (
    <ul className="panel__buttons flex">
      <li onClick={() => setState({ ...state, panelShow: "tur" })}>Туризм</li>
      <li onClick={() => setState({ ...state, panelShow: "med" })}>Медицина</li>
      <li onClick={() => setState({ ...state, panelShow: "bus" })}>
        Автобусные туры
      </li>
    </ul>
  );
};

export default MapPanel