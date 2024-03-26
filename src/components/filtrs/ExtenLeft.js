import Clouds from "../../img/filtrs/steam.svg";
import Rain from "../../img/filtrs/rain.svg";
import Sun from "../../img/filtrs/sun.svg";
import { ReactComponent as FiltrGrey } from "../../img/filtrs/filtrLeft.svg";

import "./filters.scss";
import { useState } from "react";

const ExtenLeft = ({ right }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div className={right ? "dropleft right" : "dropleft"}>
      <div className="dropleft__container flex">
        <button
          className={`dropleft__toggle ${isOpen ? "open" : "closed"} ${
            selectedOption ? "selected" : ""
          }`}
          onClick={toggleDropdown}
        >
          <FiltrGrey />
        </button>
        <div
          className={`dropleft__menu ${isOpen ? "open" : "closed"} ${
            selectedOption ? "selected" : ""
          }`}
        >
          <ul className="flex">
            <li onClick={() => handleOptionClick(Clouds)}>
              <img src={Clouds} alt="" />
            </li>
            <li onClick={() => handleOptionClick(Rain)}>
              <img src={Rain} alt="" />
            </li>
            <li onClick={() => handleOptionClick(Sun)}>
              <img src={Sun} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExtenLeft;
