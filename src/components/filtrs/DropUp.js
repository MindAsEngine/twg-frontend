import { ReactComponent as LayersGrey } from "../../img/filtrs/layers.svg";
import { ReactComponent as Clouds } from "../../img/filtrs/steam.svg";
import { ReactComponent as Rain } from "../../img/filtrs/rain.svg";
import { ReactComponent as Sun } from "../../img/filtrs/sun.svg";

import "./filters.scss";
import { useState } from "react";

const DropUp = ({right}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e, option) => {
    const element = e.target;
    element.classList.toggle("selected");
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div className= {right ? "dropdown right" : "dropdown"}>
      <div className="dropdown__container">
        <button
          className={`dropdown__toggle ${isOpen ? "open" : "closed"} ${
            selectedOption ? "selected" : ""
          }`}
          onClick={toggleDropdown}
        >
          <LayersGrey />
        </button>
        <div
          className={`dropdown__menu ${isOpen ? "open" : "closed"} ${
            selectedOption ? "selected" : ""
          }`}
        >
          <ul>
            <li onClick={(e) => handleOptionClick(e, Clouds)}>
              <Clouds />
            </li>
            <li onClick={(e) => handleOptionClick(e, Rain)}>
              <Rain />
            </li>
            <li onClick={(e) => handleOptionClick(e, Sun)}>
              <Sun />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropUp;
