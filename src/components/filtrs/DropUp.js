import "./filtrs.scss";
import { useState } from "react";

import Dropdown from "react-dropdown";

import Layers from "../../img/filtrs/layers.svg";
import Steam from "../../img/filtrs/steam.svg";
import Rain from "../../img/filtrs/rain.svg";
import Sun from "../../img/filtrs/sun.svg";

const DropUp = () => {
  const [state, setState] = useState({
    open: false,
  });

  const handleFiltr = () => {
    setState({ ...state, open: !state.open });
  };
  return (
    <div className="filtrDropUp" style={{position:"absolute"}}>
        <ul className="filtrDropUp__list" style={state.open ? {height:"73px"}: {height:"256px"}}>
           <li onClick={handleFiltr}><img src={Layers} alt="" /></li>
           <li><img src={Steam} alt="" /></li>
           <li><img src={Rain} alt="" /></li>
           <li><img src={Sun} alt="" /></li>
        </ul>
    </div>
 );


};

export default DropUp;
